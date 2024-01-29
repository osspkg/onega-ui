import { Component } from '@angular/core';
import { Api, KeyValue } from './_api';

@Component({
  selector: 'app-tag-book',
  template: `
    <ong-tags [(values)]="demoValues"></ong-tags>
    <ong-tags [(values)]="demoValues" [disable]="true" class="mt-1"></ong-tags>
  `,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class TagBook implements Api {
  attributes: KeyValue[] = [
    { key: 'ong-tags', value: 'base tag' },
    { key: '[(values)]', value: 'values as string[]' },
    { key: '[disable]', value: 'change disable' },
  ];

  exampleHTML = `
<ong-tags [(values)]="demoValues"></ong-tags>
<ong-tags [(values)]="demoValues" [disable]="true"></ong-tags>
  `;

  demoValues = ['example1', 'example2'];

  protected readonly console = console;
}
