import { Api } from './_api';

export class TableBook implements Api {
  link = 'Table';
  attributes = {
    'table > tr > th/td' : 'base tags',
  };

  example = `
<table>
    <tr>
        <th>...</th>
    </tr>
    <tr>
        <td>...</td>
    </tr>
</table>
  `;

  demo = `
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
  `;
}
