import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ComponentRef,
  OnDestroy,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, take } from 'rxjs';
import { ComponentType } from '../../../../core/src/lib/types/component';
import { compareString } from '../../../../core/src/lib/utils/compare';
import { Api, KeyValue } from './models/_api';
import { ModalDialogBook } from './models/modal-dialog';
import { TabBook } from './models/tab';

export interface ApiLink {
  link: string,
  component: ComponentType<unknown>
}

@Component({
  selector: 'app-kit',
  templateUrl: './kit.component.html',
  styleUrls: ['./kit.component.scss'],
})
export class KitComponent implements AfterViewInit, AfterViewChecked, OnDestroy {

  list: ApiLink[] = [
    { link: 'Tabs', component: TabBook },
    { link: 'Dialog', component: ModalDialogBook },
  ];

  ref?: ComponentRef<unknown>;

  dataLink = '';
  dataAttributes: KeyValue[] = [];
  dataExampleTS?: string = '';
  dataExampleHTML?:string = '';

  @ViewChild('demo', { read: ViewContainerRef }) demo!: ViewContainerRef;

  constructor(
    private route: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef,
    private title: Title,
  ) {
  }

  ngAfterViewInit() {
    this.route.params
      .pipe(take(1))
      .subscribe(params => {
        let api = params['id'];
        if (api !== undefined) {
          api = (api as string).replace(/--/gi, ' ');
        } else {
          api = this.list[0].link;
        }
        const item = this.list.filter(value => compareString(value.link, api)).pop();
        this.show(item || this.list[0]);
      });
  }

  ngAfterViewChecked() {
    this.changeDetectorRef.detectChanges();
  }

  show(item: ApiLink): void {
    this.ref?.destroy();
    this.ref = undefined;

    this.title.setTitle(this.title.getTitle() + ' | ' + item.link);

    this.ref = this.demo.createComponent(item.component);
    this.ref.hostView.detectChanges();

    this.dataLink = item.link;
    this.dataAttributes = (this.ref.instance as Api).attributes;
    this.dataExampleTS = (this.ref.instance as Api).exampleTS;
    this.dataExampleHTML = (this.ref.instance as Api).exampleHTML;
  }

  ngOnDestroy() {
    this.ref?.destroy();
    this.ref = undefined;
  }
}
