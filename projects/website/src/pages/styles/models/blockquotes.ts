import { Component } from '@angular/core';
import { Api, KeyValue } from './_api';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-BlockquotesBook-book',
  template: `
    <blockquote class="bq">
      <p>.bq</p>
    </blockquote>
    <blockquote class="bq bq-light">
      <p>.bq .bq-light</p>
    </blockquote>
    <blockquote class="bq bq-secondary">
      <p>.bq .bq-secondary</p>
    </blockquote>
    <blockquote class="bq bq-danger">
      <p>.bq .bq-danger</p>
    </blockquote>
    <blockquote class="bq bq-warning">
      <p>.bq .bq-warning</p>
    </blockquote>
    <blockquote class="bq bq-success">
      <p>.bq .bq-success</p>
    </blockquote>
    <blockquote class="bq bq-info">
      <p>.bq .bq-info</p>
    </blockquote>
    <blockquote class="bq bq-primary">
      <p>.bq .bq-primary</p>
    </blockquote>
    <blockquote class="bq bq-dark">
      <p>.bq .bq-dark</p>
    </blockquote>
  `,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class BlockquotesBook implements Api {

  attributes: KeyValue[] = [
    { key:'.bq', value: 'base class' },
    { key:'.bq-light .bq-secondary .bq-danger .bq-warning .bq-success .bq-info .bq-primary .bq-dark', value: 'color class' },
  ];

  exampleHTML = `
<blockquote class="bq">
    <p>.bq</p>
</blockquote>
<blockquote class="bq bq-light">
    <p>.bq .bq-light</p>
</blockquote>
  `;

}
