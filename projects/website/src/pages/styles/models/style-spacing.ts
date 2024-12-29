import { Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'style-spacing',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false,
  template: `
<h4 class="bq bq-warning demo-name">Margin / Padding</h4>
<p class="demo-desc">Specifies the space between the content and its border and controls the space around an element.</p>
<div class="demo-view w-full">
  <div class="d-flex">
    <div class="xx mt-1">mt-1</div>
    <div class="xx ml-3">ml-3</div>
    <div class="xx pt-5">pt-5</div>
  </div></div>
<pre class="demo-html w-full">
  &lt;div class="d-flex"&gt;
    &lt;div class="xx mt-1"&gt;mt-1&lt;/div&gt;
    &lt;div class="xx ml-3"&gt;ml-3&lt;/div&gt;
    &lt;div class="xx pt-5"&gt;pt-5&lt;/div&gt;
  &lt;/div&gt;</pre>
<table class="demo-attr">
<tr><td class="t-wrap-line" style="width: 30%;"><b>m-0...8</b></td>
<td class="t-wrap-line">Margin 0...8.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>mt-0...8</b></td>
<td class="t-wrap-line">Margin top 0...8.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>mb-0...8</b></td>
<td class="t-wrap-line">Margin bottom 0...8.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>ml-0...8</b></td>
<td class="t-wrap-line">Margin left 0...8.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>mr-0...8</b></td>
<td class="t-wrap-line">Margin right 0...8.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>p-0...8</b></td>
<td class="t-wrap-line">Padding 0...8.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>pt-0...8</b></td>
<td class="t-wrap-line">Padding top 0...8.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>pb-0...8</b></td>
<td class="t-wrap-line">Padding bottom 0...8.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>pl-0...8</b></td>
<td class="t-wrap-line">Padding left 0...8.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>pr-0...8</b></td>
<td class="t-wrap-line">Padding right 0...8.</td></tr></table>
<div class="demo-end">&nbsp;</div>
`,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class StyleSpacing {
  
}