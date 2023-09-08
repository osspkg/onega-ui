import { Api } from './_api';

export class BlockquotesBook implements Api {
  link = 'Blockquotes';
  attributes = {
    '.bq': 'base class',
    '.bq-light .bq-secondary .bq-danger .bq-warning .bq-success .bq-info .bq-primary .bq-dark': 'color class',
  };

  example = `
<blockquote class="bq">
    <p>.bq</p>
</blockquote>
<blockquote class="bq bq-light">
    <p>.bq .bq-light</p>
</blockquote>
  `;

  demo = `
<blockquote class="bq">
  <p>.bq</p>
</blockquote>
<blockquote class="bq bq-light">
  <p>.bq .bq-light</p>
</blockquote>
<blockquote class="bq bq-secondary">
  <p>.bq .bq-secondary</p>
</blockquote>
<blockquote class="bq bq-danger">
  <p>.bq .bq-danger</p>
</blockquote>
<blockquote class="bq bq-warning">
  <p>.bq .bq-warning</p>
</blockquote>
<blockquote class="bq bq-success">
  <p>.bq .bq-success</p>
</blockquote>
<blockquote class="bq bq-info">
  <p>.bq .bq-info</p>
</blockquote>
<blockquote class="bq bq-primary">
  <p>.bq .bq-primary</p>
</blockquote>
<blockquote class="bq bq-dark">
  <p>.bq .bq-dark</p>
</blockquote>
  `;
}
