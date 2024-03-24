import { Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'style-box',
  template: `
<h4 class="bq bq-warning demo-name">Box</h4>
<p class="demo-desc">Color container.</p>
<div class="demo-view w-full">
  <div class="box box-light">box-light</div>
  <div class="box box-secondary">box-secondary</div>
  <div class="box box-warning">box-warning</div>
  <div class="box box-danger">box-danger</div>
  <div class="box box-success">box-success</div>
  <div class="box box-info">box-info</div>
  <div class="box box-primary">box-primary</div>
  <div class="box box-dark">box-dark</div></div>
<pre class="demo-html w-full">
  &lt;div class="box box-light"&gt;box-light&lt;/div&gt;
  &lt;div class="box box-secondary"&gt;box-secondary&lt;/div&gt;
  &lt;div class="box box-warning"&gt;box-warning&lt;/div&gt;
  &lt;div class="box box-danger"&gt;box-danger&lt;/div&gt;
  &lt;div class="box box-success"&gt;box-success&lt;/div&gt;
  &lt;div class="box box-info"&gt;box-info&lt;/div&gt;
  &lt;div class="box box-primary"&gt;box-primary&lt;/div&gt;
  &lt;div class="box box-dark"&gt;box-dark&lt;/div&gt;</pre>
<table class="demo-attr">
<tr><td class="t-wrap-line" style="width: 30%;"><b>box</b></td>
<td class="t-wrap-line">Base color container</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>box-light, box-secondary, box-warning, box-danger, box-success, box-info, box-primary, box-dark</b></td>
<td class="t-wrap-line">Color of the color container.</td></tr></table>
<div class="demo-end">&nbsp;</div>
`,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class StyleBox {
  
}