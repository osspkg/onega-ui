import { Component } from '@angular/core';
import { Api, KeyValue } from './_api';

@Component({
  selector: 'app-routes-book',
  template: `

  `,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class RoutesBook implements Api {
  attributes: KeyValue[] = [
    { key: 'a[ong-href]', value: 'dynamic generate href, all spaces will be replaced with \'--\'' },
    { key: 'a[ong-active-route]', value: 'setting the class/classes if the route matches or is a prefix from window.location' },
  ];

  exampleHTML = `
    <a [ong-href]="/dyn link/">dyn link</a>
    <a href="/" [ong-active-route]="'active-route'">active route</a>
    <a href="/" [ong-active-route]="['active-route']">active route</a>
  `;

  protected readonly console = console;
}
