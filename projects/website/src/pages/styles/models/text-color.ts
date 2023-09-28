import { Component } from '@angular/core';
import { Api, KeyValue } from './_api';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-TextColorBook-book',
  template: `
    <div class="tc-light">.tc-light</div>
    <div class="tc-secondary">.tc-secondary</div>
    <div class="tc-danger">.tc-danger</div>
    <div class="tc-warning">.tc-warning</div>
    <div class="tc-success">.tc-success</div>
    <div class="tc-info">.tc-info</div>
    <div class="tc-primary">.tc-primary</div>
    <div class="tc-dark">.tc-dark</div>
  `,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class TextColorBook implements Api {

  attributes: KeyValue[] = [
    { key:'.box', value:'row class' },
    { key:'.tc-light .tc-secondary .tc-danger .tc-warning .tc-success .tc-info .tc-primary .tc-dark', value:'color class' },
  ];

  exampleHTML = `
<div class="tc-success">.tc-success</div>
<div class="tc-info">.tc-info</div>
  `;

}
