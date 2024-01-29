import { Component } from '@angular/core';
import { Api, KeyValue } from './_api';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-FixGridBook-book',
  template: `
    <div class="row">
      <div class="col-2 box x">.col-2</div>
      <div class="col-6 box x">.col-6</div>
    </div>
    <div class="row">
      <div class="col-2 box x">.col-2</div>
      <div class="col-3 box x">.col-3</div>
      <div class="col-5 box x">.col-5</div>
      <div class="col-2 box x">.col-2</div>
    </div>
  `,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class FixGridBook implements Api {

  attributes: KeyValue[] = [
    { key:'.r / .row', value:'row class' },
    { key:'.c1..12 / .col-1..12', value:'col class' },
  ];

  exampleHTML = `
<div class="row">
    <div class="col-2">...</div>
    <div class="col-6">...</div>
</div>

<div class="r">
    <div class="c2">...</div>
    <div class="c6">...</div>
</div>
  `;

}
