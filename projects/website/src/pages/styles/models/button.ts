import { Api } from './_api';

export class ButtonBook implements Api {
  link = 'Button';
  attributes = {
    '.btn' : 'base class',
    '.btn-circle' : 'circle button class',
    '.btn-light .btn-secondary .btn-danger .btn-warning .btn-success .btn-info .btn-primary .btn-dark': 'color class',

  };

  example = `
<a class="btn" href="/" target="_blank">?</a>
<button class="btn" disabled>?</button>
<a class="btn btn-danger">?</a>
<a class="btn btn-warning btn-circle btn-sm">?</a>
  `;

  demo = `
Default
<div class="row">
  <div class="col">
    <a class="btn" href="/" target="_blank">class: .btn</a>
  </div>
  <div class="col">
    <button class="btn">tag: button</button>
  </div>
  <div class="col">
    <button class="btn" disabled>tag: button:disabled</button>
  </div>
</div>
Color:
<div class="row">
  <div class="col">
    <a class="btn btn-light">.btn .btn-light</a>
  </div>
  <div class="col">
    <a class="btn btn-secondary">.btn .btn-secondary</a>
  </div>
  <div class="col">
    <a class="btn btn-warning">.btn .btn-warning</a>
  </div>
  <div class="col">
    <a class="btn btn-danger">.btn .btn-danger</a>
  </div>
  <div class="col">
    <a class="btn btn-success">.btn .btn-success</a>
  </div>
  <div class="col">
    <a class="btn btn-info">.btn .btn-info</a>
  </div>
  <div class="col">
    <a class="btn btn-primary">.btn .btn-primary</a>
  </div>
  <div class="col">
    <a class="btn btn-dark">.btn .btn-dark</a>
  </div>
</div>
Circle + Size:
<div class="row">

  <div class="col-12">
    <table>
      <tr>
        <th>size</th>
        <th>&nbsp;</th>
      </tr>
      <tr>
        <td>.btn-xs</td>
        <td>
        <a class="btn btn-light btn-circle btn-xs">
        <i class="ong ong-home"></i>
    </a>
</td>
      </tr>
      <tr>
        <td>.btn-sm</td>
        <td>
        <a class="btn btn-warning btn-circle btn-sm">
        <i class="ong ong-home"></i>
    </a>
</td>
      </tr>
      <tr>
        <td>.btn-md</td>
        <td>
        <a class="btn btn-danger btn-circle btn-md">
        <i class="ong ong-home"></i>
    </a>
    </td>
      </tr>
      <tr>
        <td>.btn-lg</td>
        <td>
        <a class="btn btn-success btn-circle btn-lg">
        <i class="ong ong-home"></i>
    </a>
</td>
      </tr>
      <tr>
        <td>.btn-xl</td>
        <td>
        <a class="btn btn-info btn-circle btn-xl">
        <i class="ong ong-home"></i>
    </a>
</td>
      </tr>
    </table>
  </div>
</div>
  `;
}
