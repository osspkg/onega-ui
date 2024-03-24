import { Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'style-border-radius',
  template: `
<h4 class="bq bq-warning demo-name">Border Radius</h4>
<p class="demo-desc">Defines the radius of an element's corners.</p>
<div class="demo-view w-full">
  <div class="box box-info border-circle" style="width: 100px; height: 100px;">border-circle</div>
  <div class="box box-info border-1" style="width: 100px; height: 100px;">border-1</div>
  <div class="box box-info border-5" style="width: 100px; height: 100px;">border-5</div></div>
<pre class="demo-html w-full">
  &lt;div class="box box-info border-circle" style="width: 100px; height: 100px;"&gt;border-circle&lt;/div&gt;
  &lt;div class="box box-info border-1" style="width: 100px; height: 100px;"&gt;border-1&lt;/div&gt;
  &lt;div class="box box-info border-5" style="width: 100px; height: 100px;"&gt;border-5&lt;/div&gt;</pre>
<table class="demo-attr">
<tr><td class="t-wrap-line" style="width: 30%;"><b>border-circle</b></td>
<td class="t-wrap-line">Rounding the edges by 50% of the container size</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>border-0...8</b></td>
<td class="t-wrap-line">Rounding edges in relative units from 0 to 8.</td></tr></table>
<div class="demo-end">&nbsp;</div>
`,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class StyleBorderRadius {
  
}