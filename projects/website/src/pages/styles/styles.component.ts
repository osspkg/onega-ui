import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs';
import { Api } from './models/_api';
import { BlockquotesBook } from './models/blockquotes';
import { BoxBook } from './models/box';
import { ContentInputBook } from './models/content-input';
import { DialogBook } from './models/dialog';
import { FixGridBook } from './models/fix-grid';
import { FlexGridBook } from './models/flex-grid';
import { HeadingBook } from './models/heading';
import { TableBook } from './models/table';
import { TextAlignBook } from './models/text-align';
import { TextColorBook } from './models/text-color';

@Component({
  selector: 'app-styles',
  templateUrl: './styles.component.html',
  styleUrls: ['./styles.component.scss'],
})
export class StylesComponent implements OnInit {

  list: Api[] = [
    new BoxBook(),
    new FlexGridBook(),
    new FixGridBook(),
    new TextAlignBook(),
    new TextColorBook(),
    new HeadingBook(),
    new BlockquotesBook(),
    new TableBook(),
    new ContentInputBook(),
    new DialogBook(),
  ];

  data?: Api = this.list[0];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.route.queryParams
      .pipe(filter(params => params['api'] !== undefined))
      .subscribe(params => {
        this.data = this.list.filter(value => value.link === params['api']).pop();
      });
  }

  show(item: Api): void {
    this.data = item;
    this.router.navigate(['/styles'], { queryParams:{ api: item.link } });
  }

}
