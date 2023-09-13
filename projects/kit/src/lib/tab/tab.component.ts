import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  EmbeddedViewRef,
  EventEmitter,
  Input,
  Output,
  QueryList,
  Renderer2,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Color } from '../envs';
import { TabDirective } from './tab.directive';

export type TabStyle = 'btn' | 'line';

@Component({
  selector: 'ong-tabs',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements AfterContentInit, AfterViewInit {
  private embeddedViewRef?: EmbeddedViewRef<unknown>;

  curr?: string;
  tabs: string[] = [];

  @Input() tabDefault = '';
  @Input() tabColor: Color = 'secondary';
  @Input() tabStyle: TabStyle = 'btn';
  @Output() tabSwitch: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('content', { static: false }) out!: ElementRef;
  @ContentChildren(TabDirective) contents!: QueryList<TabDirective>;

  constructor(
    private renderer2: Renderer2,
    private viewContainerRef: ViewContainerRef,
  ) {
  }

  ngAfterContentInit(): void {
    this.contents.forEach((item) => {
      this.tabs.push(item.tab);
    });

    if (this.tabs.indexOf(this.tabDefault) === -1) {
      this.tabDefault = this.tabs.flatMap((v) => v).shift() || '';
    }
  }

  ngAfterViewInit(): void {
    this.setTab(this.tabDefault);
  }

  setTab(name: string): void {
    if (name === this.curr) {
      return;
    }

    this.embeddedViewRef?.detach();
    this.embeddedViewRef?.destroy();

    this.contents.forEach((item) => {
      if (item.tab === name) {
        this.embeddedViewRef = this.viewContainerRef.createEmbeddedView(item.template);
        this.embeddedViewRef.detectChanges();
        this.embeddedViewRef.rootNodes.forEach(value => {
          this.renderer2.appendChild(this.out.nativeElement, value);
        });

        this.curr = name;
        this.tabSwitch.emit(name);
      }
    });
  }
}
