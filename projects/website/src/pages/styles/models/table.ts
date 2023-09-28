import { Component } from '@angular/core';
import { Api, KeyValue } from './_api';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-TableBook-book',
  template: `
    <table>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>City</th>
      </tr>

      <tr>
        <td>1</td>
        <td>Harly</td>
        <td>SPb</td>
      </tr>

      <tr>
        <td>2</td>
        <td>Joy</td>
        <td>SPb</td>
      </tr>
    </table>
  `,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class TableBook implements Api {

  attributes : KeyValue[] = [
    { key:'table > tr > th/td', value:'base tags' },
  ];

  exampleHTML = `
<table>
    <tr>
        <th>...</th>
    </tr>
    <tr>
        <td>...</td>
    </tr>
</table>
  `;

}
