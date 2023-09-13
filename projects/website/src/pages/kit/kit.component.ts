import {
  AfterViewInit,
  Component,
  ComponentRef, ElementRef, EmbeddedViewRef,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs';
import { Api } from './models/_api';
import { TabBook } from './models/tab';

@Component({
  selector: 'app-kit',
  templateUrl: './kit.component.html',
  styleUrls: ['./kit.component.scss'],
})
export class KitComponent implements AfterViewInit, OnDestroy {

  list: Api[] = [
    new TabBook(),
  ];

  data?: Api;
  private ref?: ComponentRef<unknown>;

  @ViewChild('demo', { read: ViewContainerRef }) demo!: ViewContainerRef;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngAfterViewInit() {
    this.show(this.list[0]);
    this.route.queryParams
      .pipe(filter(params => params['api'] !== undefined))
      .subscribe(params => {
        const item = this.list.filter(value => value.link === params['api']).pop();
        this.show(item);
      });
  }

  show(item: Api | undefined): void {
    if (item === undefined) {
      return;
    }

    setTimeout(()=>{
      this.data = item;
      this.router.navigate(['/kit'], { queryParams:{ api: item.link } });

      this.ref?.destroy();
      this.ref = this.demo.createComponent(item.component);
      this.ref.hostView.detectChanges();
    }, 100);
  }

  ngOnDestroy() {
    this.ref?.destroy();
  }
}
