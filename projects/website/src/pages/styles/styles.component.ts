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
import { ComponentType } from '../../../../core/src/lib/types/component';
import { compareString } from '../../../../core/src/lib/utils/compare';
import { KeyValue } from '../kit/models/_api';
import { Api } from './models/_api';
import { AreaBook } from './models/area';
import { ArticleBook } from './models/article';
import { BlockquotesBook } from './models/blockquotes';
import { BoxBook } from './models/box';
import { ButtonBook } from './models/button';
import { ContentInputBook } from './models/content-input';
import { DialogBook } from './models/dialog';
import { FixGridBook } from './models/fix-grid';
import { FlexGridBook } from './models/flex-grid';
import { HeadingBook } from './models/heading';
import { IndentationBook } from './models/indentation';
import { TableBook } from './models/table';
import { TextAlignBook } from './models/text-align';
import { TextColorBook } from './models/text-color';

export interface ApiLink {
  link: string,
  component: ComponentType<unknown>
}

@Component({
  selector: 'app-styles',
  templateUrl: './styles.component.html',
  styleUrls: ['./styles.component.scss'],
})
export class StylesComponent implements AfterViewInit, AfterViewChecked, OnDestroy {

  list: ApiLink[] = [
    { link: 'Area', component: AreaBook },
    { link: 'Box', component: BoxBook },
    { link: 'Indentation', component: IndentationBook },
    { link: 'Flex Grid', component: FlexGridBook },
    { link: 'Fix Grid', component: FixGridBook },
    { link: 'Article', component: ArticleBook },
    { link: 'Text Align', component: TextAlignBook },
    { link: 'Text Color', component: TextColorBook },
    { link: 'Heading', component: HeadingBook },
    { link: 'Blockquotes', component: BlockquotesBook },
    { link: 'Table', component: TableBook },
    { link: 'Content Input', component: ContentInputBook },
    { link: 'Dialog', component: DialogBook },
    { link: 'Button', component: ButtonBook },
  ];

  ref?: ComponentRef<unknown>;

  dataLink = '';
  dataAttributes: KeyValue[] = [];
  dataExampleTS?: string = '';
  dataExampleHTML?: string = '';

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
    this.dataAttributes = (this.ref.instance as Api).attributes;
    this.dataExampleTS = (this.ref.instance as Api).exampleTS;
    this.dataExampleHTML = (this.ref.instance as Api).exampleHTML;
  }

  ngOnDestroy() {
    this.ref?.destroy();
    this.ref = undefined;
  }
}
