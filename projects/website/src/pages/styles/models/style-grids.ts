import { Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'style-grids',
  template: `
<h4 class="bq bq-warning demo-name">Flex Grid</h4>
<p class="demo-desc">Flexible grid allows you to customize flexible layout to fit the screen size.</p>
<div class="demo-view w-full">
  <div class="row">
    <div class="col x">Column 1</div>
    <div class="col x">Column 2</div>
  </div></div>
<pre class="demo-html w-full">
  &lt;div class="row"&gt;
    &lt;div class="col x"&gt;Column 1&lt;/div&gt;
    &lt;div class="col x"&gt;Column 2&lt;/div&gt;
  &lt;/div&gt;</pre>
<table class="demo-attr">
<tr><td class="t-wrap-line" style="width: 30%;"><b>row</b></td>
<td class="t-wrap-line">Row container</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>col</b></td>
<td class="t-wrap-line">Column container filled with maximum available width.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>gap-0...8</b></td>
<td class="t-wrap-line">Defines the size of the gap between the columns.</td></tr></table>
<div class="demo-end">&nbsp;</div>
<h4 class="bq bq-warning demo-name">Fixed Grid</h4>
<p class="demo-desc">Grid with fixed column size. It is based on a 12-column layout.</p>
<div class="demo-view w-full">
  <div class="row">
    <div class="col-2 x">Size 2</div>
    <div class="col-5 x">Size 5</div>
  </div></div>
<pre class="demo-html w-full">
  &lt;div class="row"&gt;
    &lt;div class="col-2 x"&gt;Size 2&lt;/div&gt;
    &lt;div class="col-5 x"&gt;Size 5&lt;/div&gt;
  &lt;/div&gt;</pre>
<table class="demo-attr">
<tr><td class="t-wrap-line" style="width: 30%;"><b>row</b></td>
<td class="t-wrap-line">Row container</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>col-1..12</b></td>
<td class="t-wrap-line">Fixed size column container from 1 to 12 columns.</td></tr></table>
<div class="demo-end">&nbsp;</div>
`,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class StyleGrids {
  
}