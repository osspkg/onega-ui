import { Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'style-background-color',
  template: `
<h4 class="bq bq-warning demo-name">Background Color</h4>
<p class="demo-desc">Filling the background.</p>
<div class="demo-view w-full">
  <div class="bg-light">bg-light</div>
  <div class="bg-secondary">bg-secondary</div>
  <div class="bg-warning">bg-warning</div>
  <div class="bg-danger">bg-danger</div>
  <div class="bg-success">bg-success</div>
  <div class="bg-info">bg-info</div>
  <div class="bg-primary">bg-primary</div>
  <div class="bg-dark">bg-dark</div></div>
<pre class="demo-html w-full">
  &lt;div class="bg-light"&gt;bg-light&lt;/div&gt;
  &lt;div class="bg-secondary"&gt;bg-secondary&lt;/div&gt;
  &lt;div class="bg-warning"&gt;bg-warning&lt;/div&gt;
  &lt;div class="bg-danger"&gt;bg-danger&lt;/div&gt;
  &lt;div class="bg-success"&gt;bg-success&lt;/div&gt;
  &lt;div class="bg-info"&gt;bg-info&lt;/div&gt;
  &lt;div class="bg-primary"&gt;bg-primary&lt;/div&gt;
  &lt;div class="bg-dark"&gt;bg-dark&lt;/div&gt;</pre>
<table class="demo-attr">
<tr><td class="t-wrap-line" style="width: 30%;"><b>box</b></td>
<td class="t-wrap-line">Base color container</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>bg-light, bg-secondary, bg-warning, bg-danger, bg-success, bg-info, bg-primary, bg-dark</b></td>
<td class="t-wrap-line">Fill color.</td></tr></table>
<div class="demo-end">&nbsp;</div>
`,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class StyleBackgroundColor {
  
}