import { Component } from '@angular/core';
import { Api, KeyValue } from './_api';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-TextAlignBook-book',
  template: `
    <div class="ta-l box demo-border">.ta-l</div>
    <div class="ta-c box demo-border">.ta-c</div>
    <div class="ta-r box demo-border">.ta-r</div>
  `,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class TextAlignBook implements Api {

  attributes : KeyValue[] = [
    { key:'.ta-l .ta-c .ta-r', value:'base class' },
  ];

  exampleHTML = `
<div class="ta-l box demo-border">.ta-l</div>
<div class="ta-c box demo-border">.ta-c</div>
<div class="ta-r box demo-border">.ta-r</div>
  `;

}
