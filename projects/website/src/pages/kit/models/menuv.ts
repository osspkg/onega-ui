import { Component } from '@angular/core';
import { Api, KeyValue } from './_api';

@Component({
  selector: 'app-menuv-book',
  template: `
    <ong-menuv>
      <ng-template ong-menuv-header>
        <h1>Header</h1>
      </ng-template>
      <ng-template ong-menuv-body>
        <h3>Body1</h3>
      </ng-template>
      <ng-template ong-menuv-body>
        <h3>Body2</h3>
      </ng-template>
      <ng-template ong-menuv-footer>
        <h1>Footer</h1>
      </ng-template>
    </ong-menuv>
  `,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class MenuvBook implements Api {
  attributes: KeyValue[] = [
    { key: 'ong-menuv', value: 'base tag' },
    { key: 'ong-menuv-header', value: 'directive for set header content' },
    { key: 'ong-menuv-body', value: 'directive for set body content' },
    { key: 'ong-menuv-footer', value: 'directive for set footer content' },
    { key: 'STYLES CHANGING:', value: 'style="--ong-menuv-<sufix>: <value>;..."' },
    { key: '--ong-menuv-height', value: 'menu height (default: 100vh)' },
    { key: '--ong-menuv-header-height', value: 'header height (default: 10vh)' },
    { key: '--ong-menuv-footer-height', value: 'footer height (default: 10vh)' },
    { key: '--ong-menuv-width', value: 'menu width (default: 15rem)' },
    { key: '--ong-menuv-bg-color', value: 'menu background' },
    { key: '--ong-menuv-line-color', value: 'right line color' },
  ];

  exampleHTML = `
    <ong-menuv>
      <ng-template ong-menuv-header>
        <h1>Header</h1>
      </ng-template>
      <ng-template ong-menuv-body>
        <h3>Body1</h3>
      </ng-template>
      <ng-template ong-menuv-body>
        <h3>Body2</h3>
      </ng-template>
      <ng-template ong-menuv-footer>
        <h1>Footer</h1>
      </ng-template>
    </ong-menuv>
  `;

  protected readonly console = console;
}
