import { Component } from '@angular/core';
import { Api, KeyValue } from './_api';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-BoxBook-book',
  template: `
    <div class="box">.box</div>
    <div class="box-light box">.box .box-light</div>
    <div class="box-secondary box">.box .box-secondary</div>
    <div class="box-warning box">.box .box-warning</div>
    <div class="box-danger box">.box .box-danger</div>
    <div class="box-success box">.box .box-success</div>
    <div class="box-info box">.box .box-info</div>
    <div class="box-primary box">.box .box-primary</div>
    <div class="box-dark box">.box .box-dark</div>
  `,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class BoxBook implements Api {

  attributes: KeyValue[] = [
    { key:'.box', value:'base class' },
    { key:'.box-light .box-secondary .box-danger .box-warning .box-success .box-info .box-primary .box-dark', value:'color class' },
  ];

  exampleHTML = `
<div class="box">...</div>
<div class="box-light box">...</div>
  `;

}
