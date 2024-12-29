import { Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'style-blockquote',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false,
  template: `
<h4 class="bq bq-warning demo-name">Blockquote</h4>
<p class="demo-desc"></p>
<div class="demo-view w-full">
  <div class="bq-light">bq-light</div>
  <div class="bq-secondary">bq-secondary</div>
  <div class="bq-warning">bq-warning</div>
  <div class="bq-danger">bq-danger</div>
  <div class="bq-success">bq-success</div>
  <div class="bq-info">bq-info</div>
  <div class="bq-primary">bq-primary</div>
  <div class="bq-dark">bq-dark</div></div>
<pre class="demo-html w-full">
  &lt;div class="bq-light"&gt;bq-light&lt;/div&gt;
  &lt;div class="bq-secondary"&gt;bq-secondary&lt;/div&gt;
  &lt;div class="bq-warning"&gt;bq-warning&lt;/div&gt;
  &lt;div class="bq-danger"&gt;bq-danger&lt;/div&gt;
  &lt;div class="bq-success"&gt;bq-success&lt;/div&gt;
  &lt;div class="bq-info"&gt;bq-info&lt;/div&gt;
  &lt;div class="bq-primary"&gt;bq-primary&lt;/div&gt;
  &lt;div class="bq-dark"&gt;bq-dark&lt;/div&gt;</pre>
<table class="demo-attr">
<tr><td class="t-wrap-line" style="width: 30%;"><b>bq-light, bq-secondary, bq-warning, bq-danger, bq-success, bq-info, bq-primary, bq-dark</b></td>
<td class="t-wrap-line">Color of blockquote.</td></tr></table>
<div class="demo-end">&nbsp;</div>
`,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class StyleBlockquote {
  
}