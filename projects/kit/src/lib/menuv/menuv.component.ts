import {
  AfterViewChecked, AfterViewInit, ChangeDetectorRef,
  Component, ContentChildren, ElementRef, EmbeddedViewRef,
  OnDestroy, QueryList, Renderer2, ViewChild, ViewContainerRef,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { MenuvBodyDirective, MenuvFooterDirective, MenuvHeaderDirective } from './menuv.directive';

@Component({
  selector: 'ong-menuv',
  templateUrl: './menuv.component.html',
  styleUrls: ['./menuv.component.scss'],
})
export class MenuvComponent implements AfterViewInit, AfterViewChecked, OnDestroy {
  private headerView: EmbeddedViewRef<unknown>[] = [];
  private bodyView: EmbeddedViewRef<unknown>[] = [];
  private footerView: EmbeddedViewRef<unknown>[] = [];

  private changes$: Subscription[] = [];

  @ViewChild('header', { static: false }) headerOut!: ElementRef<unknown>;
  @ViewChild('body', { static: false }) bodyOut!: ElementRef<unknown>;
  @ViewChild('footer', { static: false }) footerOut!: ElementRef<unknown>;

  @ContentChildren(MenuvHeaderDirective) headerIn!: QueryList<MenuvHeaderDirective>;
  @ContentChildren(MenuvBodyDirective) bodyIn!: QueryList<MenuvBodyDirective>;
  @ContentChildren(MenuvFooterDirective) footerIn!: QueryList<MenuvFooterDirective>;

  constructor(
    private renderer2: Renderer2,
    private viewContainerRef: ViewContainerRef,
    private changeDetectorRef: ChangeDetectorRef,
  ) {
  }

  ngOnDestroy() {
    this.changes$.forEach(value => value?.unsubscribe());
    this.headerView.forEach(value => {
      value?.detach();
      value?.destroy();
    });
    this.bodyView.forEach(value => {
      value?.detach();
      value?.destroy();
    });
    this.footerView.forEach(value => {
      value?.detach();
      value?.destroy();
    });
  }

  private drawing(to: ElementRef<unknown>, view: EmbeddedViewRef<unknown>[], list: QueryList<MenuvHeaderDirective | MenuvBodyDirective | MenuvFooterDirective>): void {
    view.forEach(value => {
      value?.detach();
      value?.destroy();
    });
    view = [];
    list.forEach((item: MenuvHeaderDirective) => {
      const ref = this.viewContainerRef.createEmbeddedView(item.template);
      ref.detectChanges();
      ref.rootNodes.forEach(value => {
        this.renderer2.appendChild(to.nativeElement, value);
      });
      view.push(ref);
    });

  }

  ngAfterViewInit() {
    this.drawing(this.headerOut, this.headerView, this.headerIn);
    const shi$ = this.headerIn.changes.subscribe(list => {
      this.drawing(this.headerOut, this.headerView, list);
    });
    this.changes$.push(shi$);

    this.drawing(this.bodyOut, this.bodyView, this.bodyIn);
    const sbi$ = this.bodyIn.changes.subscribe(list => {
      this.drawing(this.bodyOut, this.bodyView, list);
    });
    this.changes$.push(sbi$);

    this.drawing(this.footerOut, this.footerView, this.footerIn);
    const sfi$ = this.footerIn.changes.subscribe(list => {
      this.drawing(this.footerOut, this.footerView, list);
    });
    this.changes$.push(sfi$);
  }

  ngAfterViewChecked() {
    this.changeDetectorRef.detectChanges();
  }
}
