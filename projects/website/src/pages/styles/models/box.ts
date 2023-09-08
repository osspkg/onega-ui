import { Api } from './_api';

export class BoxBook implements Api {
  link = 'Box';
  attributes = {
    '.box' : 'base class',
    '.box-light .box-secondary .box-danger .box-warning .box-success .box-info .box-primary .box-dark': 'color class',
  };

  example = `
<div class="box">...</div>
<div class="box-light box">...</div>
  `;

  demo = `
<div class="box">.box</div>
<div class="box-light box">.box .box-light</div>
<div class="box-secondary box">.box .box-secondary</div>
<div class="box-warning box">.box .box-warning</div>
<div class="box-danger box">.box .box-danger</div>
<div class="box-success box">.box .box-success</div>
<div class="box-info box">.box .box-info</div>
<div class="box-primary box">.box .box-primary</div>
<div class="box-dark box">.box .box-dark</div>
  `;
}
