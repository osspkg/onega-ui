import { Api } from './_api';

export class FlexGridBook implements Api {
  link = 'Flex Grid';
  attributes = {
    '.r / .row' : 'row class',
    '.c / .col': 'col class',
  };

  example = `
<div class="row">
    <div class="col">...</div>
</div>

<div class="r">
    <div class="c">...</div>
</div>
  `;

  demo = `
<div class="row">
    <div class="col box">.col</div>
    <div class="col box">.col</div>
</div>
<div class="row">
    <div class="col box">.col</div>
    <div class="col box">.col</div>
    <div class="col box">.col</div>
    <div class="col box">.col</div>
</div>
  `;
}
