import { Component } from '@angular/core';
import { Api, KeyValue } from './_api';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-ArticleBook-book',
  template: `
    <div class="article article-x3">
      <h3>header3 header3 header3 header3</h3>
      <p class="letter-x2">Text text text text text text text text text text text text text text text text text text
        text text text </p>
      <p class="letter-x3">text text text text text text text text text text text text text text text text text text
        text text text </p>
      <p class="letter-x4">text text text text text text text text text text text text text text text text text text
        text text text </p>
      <p class="letter-x5">text text text text text text text text text text text text text text text text text text
        text text text </p>
      <h4>header4 header4 header4 header4</h4>
      <p>text text text text text text text text text text text text text text text text text text text text text </p>
      <p>text text text text text text text text text text text text text text text text text text text text text </p>
      <p>text text text text text text text text text text text text text text text text text text text text text </p>
      <p>text text text text text text text text text text text text text text text text text text text text text </p>
      <p>text text text text text text text text text text text text text text text text text text text text text </p>
      <p>text text text text text text text text text text text text text text text text text text text text text </p>
    </div>
  `,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class ArticleBook implements Api {
  attributes: KeyValue[] = [
    { key: '.article', value: 'base class' },
    { key: '.article-x2...6', value: 'columns count 2-6 class' },
    { key: '.letter-x2...5', value: 'first letter size 2-5 class' },
  ];

  exampleHTML = `
<div class="article article-x3">
  <h3>header3 header3 header3 header3</h3>
  <p class="letter-x2">Text text text</p>
</div>
  `;

}
