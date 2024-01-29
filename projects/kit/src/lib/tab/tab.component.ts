import {

  AfterContentInit, AfterViewChecked,
  AfterViewInit, ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EmbeddedViewRef,
  EventEmitter,
  Input, OnDestroy,
  Output,
  QueryList,
  Renderer2,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Color } from '../envs';
import { TabDirective } from './tab.directive';

export type TabStyle = 'btn' | 'line';

interface TabItem {
  name: string;
  active: boolean;
}

@Component({
  selector: 'ong-tabs',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy {
  private embeddedViewRef?: EmbeddedViewRef<unknown>;
  private changes$?: Subscription;

  tabs: TabItem[] = [];

  @Input() byDefault = '';
  @Input() color: Color = 'secondary';
  @Input() style: TabStyle = 'btn';
  @Output() switch: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('content', { static: false }) out!: ElementRef;
  @ContentChildren(TabDirective) contents!: QueryList<TabDirective>;

  constructor(
    private renderer2: Renderer2,
    private viewContainerRef: ViewContainerRef,
    private changeDetectorRef: ChangeDetectorRef,
  ) {
  }

  ngOnDestroy() {
    this.changes$?.unsubscribe();
  }

  ngAfterContentInit(): void {
    this.contents.forEach((item) => {
      this.tabs.push({ active: false, name: item.tab });
    });

    const hasTab = this.tabs.filter(value => value.name === this.byDefault).length > 0;
    if (!hasTab) {
      this.byDefault = (this.tabs.flatMap((v) => v).shift() || { name: '' }).name;
    }

    this.changes$ = this.contents.changes.subscribe((list: QueryList<TabDirective>) => {
      this.tabs = [];
      list.forEach(item => {
        this.tabs.push({ name: item.tab, active: item.tab === this.byDefault });
      });
      const hasActive = this.tabs.filter(value => value.active).length > 0;
      if (!hasActive) {
        this.byDefault = (this.tabs.flatMap((v) => v).shift() || { name: '' }).name;
        this.setTab({ name: this.byDefault, active: false });
      }
    });
  }

  ngAfterViewInit() {
    this.setTab({ name: this.byDefault, active: false });
  }

  ngAfterViewChecked() {
    this.changeDetectorRef.detectChanges();
  }

  setTab(tab: TabItem): void {
    if (tab.active) {
      return;
    }

    this.embeddedViewRef?.detach();
    this.embeddedViewRef?.destroy();

    this.tabs = this.tabs.map(value => {
      value.active = value.name === tab.name;
      return value;
    });

    this.contents.forEach((item) => {
      if (item.tab !== tab.name) {
        return;
      }
      this.embeddedViewRef = this.viewContainerRef.createEmbeddedView(item.template);
      this.embeddedViewRef.detectChanges();
      this.embeddedViewRef.rootNodes.forEach(value => {
        this.renderer2.appendChild(this.out.nativeElement, value);
      });
      this.byDefault = item.tab;
      this.switch.emit(item.tab);
    });
  }
}
