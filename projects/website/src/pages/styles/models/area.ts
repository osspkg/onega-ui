import { Component } from '@angular/core';
import { Api, KeyValue } from './_api';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-AreaBook-book',
  template: `
    <div class="area x mt-1">.area</div>
    <div class="area-fluid x mt-1">.area-fluid</div>
  `,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class AreaBook implements Api {

  attributes: KeyValue[] = [
    { key:'.area', value:'area with indents on the sides' },
    { key:'.area-fluid', value:'area without indents, stretches to the maximum size of the block it is in' },
  ];

  exampleHTML = `
<div class="area">...</div>
<div class="area-fluid">...</div>
  `;

}
