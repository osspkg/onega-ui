import { Api } from './_api';

export class TextColorBook implements Api {
  link = 'Text Color';
  attributes = {
    '.box' : 'row class',
    '.tc-light .tc-secondary .tc-danger .tc-warning .tc-success .tc-info .tc-primary .tc-dark': 'color class',
  };

  example = `
<div class="tc-success">.tc-success</div>
<div class="tc-info">.tc-info</div>
  `;

  demo = `
<div class="tc-light">.tc-light</div>
<div class="tc-secondary">.tc-secondary</div>
<div class="tc-danger">.tc-danger</div>
<div class="tc-warning">.tc-warning</div>
<div class="tc-success">.tc-success</div>
<div class="tc-info">.tc-info</div>
<div class="tc-primary">.tc-primary</div>
<div class="tc-dark">.tc-dark</div>
  `;
}
