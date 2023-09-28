import { Component } from '@angular/core';
import { Api, KeyValue } from './_api';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-FlexGridBook-book',
  template: `
    <div class="row">
      <div class="col box demo-border">.col</div>
      <div class="col box demo-border">.col</div>
    </div>
    <div class="row">
      <div class="col box demo-border">.col</div>
      <div class="col box demo-border">.col</div>
      <div class="col box demo-border">.col</div>
      <div class="col box demo-border">.col</div>
    </div>
  `,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class FlexGridBook implements Api {

  attributes: KeyValue[] = [
    { key:'.r / .row', value:'row class' },
    { key:'.c / .col', value:'col class' },
  ];

  exampleHTML = `
<div class="row">
    <div class="col">...</div>
</div>

<div class="r">
    <div class="c">...</div>
</div>
  `;

}
