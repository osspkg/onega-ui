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
import { ActivatedRoute, Router } from '@angular/router';
import { filter, take } from 'rxjs';
import { ComponentType } from '../../../../core/src/lib/types';
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
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef,
  ) {
  }

  ngAfterViewInit() {
    this.show(this.list[0]);
    this.route.queryParams
      .pipe(filter(params => params['api'] !== undefined), take(1))
      .subscribe(params => {
        const item = this.list.filter(value => value.link === params['api']).pop();
        this.show(item);
      });
  }

  ngAfterViewChecked() {
    this.changeDetectorRef.detectChanges();
  }

  show(item: ApiLink | undefined): void {
    if (item === undefined) {
      return;
    }
    this.ref?.destroy();
    this.ref = undefined;

    this.router.navigate(['/kit'], { queryParams: { api: item.link }, replaceUrl: true });

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
