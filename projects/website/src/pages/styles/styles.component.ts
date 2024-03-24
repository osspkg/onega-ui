import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ComponentRef, OnDestroy,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { compareString } from '../../../../core/src/lib/utils/compare';
import { ApiLink } from '../root/api.models';
import { links } from './models/module';

@Component({
  selector: 'app-styles',
  templateUrl: './styles.component.html',
  styleUrls: ['./styles.component.scss'],
})
export class StylesComponent implements AfterViewInit, AfterViewChecked, OnDestroy {

  list: ApiLink[] = links();
  ref?: ComponentRef<unknown>;
  dataLink = '';

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
        this.show(item);
      });
  }

  ngAfterViewChecked() {
    this.changeDetectorRef.detectChanges();
  }

  show(item?: ApiLink): void {
    if (item === undefined) {
      return;
    }
    this.ref?.destroy();
    this.ref = undefined;
    this.title.setTitle(this.title.getTitle() + ' | ' + item.link);
    this.ref = this.demo.createComponent(item.component);
    this.ref.hostView.detectChanges();
    this.dataLink = item.link;
  }

  ngOnDestroy() {
    this.ref?.destroy();
    this.ref = undefined;
  }
}
