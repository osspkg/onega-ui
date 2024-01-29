import { Component } from '@angular/core';
import { Api, KeyValue } from './_api';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-IndentationBook-book',
  template: `
    <div class="m-1 x">.m-1</div>
    <div class="pt-3 x">.pt-3</div>
  `,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class IndentationBook implements Api {

  attributes: KeyValue[] = [
    { key:'.m-1..6', value:'margin on all sides' },
    { key:'.mt-1..6, .mr-1..6, .mb-1..6, .ml-1..6', value:'margin top, right, bottom, left' },
    { key:'.p-1..6', value:'padding on all sides' },
    { key:'.pt-1..6, .pr-1..6, .pb-1..6, .pl-1..6', value:'padding top, right, bottom, left' },
  ];

  exampleHTML = `
<div class="m-1">...</div>
<div class="pt-3">...</div>
  `;

}
