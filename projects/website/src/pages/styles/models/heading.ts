import { Component } from '@angular/core';
import { Api, KeyValue } from './_api';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-HeadingBook-book',
  template: `
    <h1>h1. Heading</h1>
    <h2>h2. Heading</h2>
    <h3>h3. Heading</h3>
    <h4>h4. Heading</h4>
    <h5>h5. Heading</h5>
    <h6>h6. Heading</h6>
  `,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class HeadingBook implements Api {

  attributes: KeyValue[] = [
    { key:'h1, h2, h3, h4, h5, h6', value:'head tag' },
  ];

  exampleHTML = `
<h1>h1. Heading</h1>
<h2>h2. Heading</h2>
  `;

}
