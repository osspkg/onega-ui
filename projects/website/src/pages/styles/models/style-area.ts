import { Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'style-area',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false,
  template: `
<h4 class="bq bq-warning demo-name">Area</h4>
<p class="demo-desc">This is the parent container for arranging child elements on the page.</p>
<div class="demo-view w-full">
  <div class="area x">Area</div>
  <div class="area-fluid x">Area Fluid</div></div>
<pre class="demo-html w-full">
  &lt;div class="area x"&gt;Area&lt;/div&gt;
  &lt;div class="area-fluid x"&gt;Area Fluid&lt;/div&gt;</pre>
<table class="demo-attr">
<tr><td class="t-wrap-line" style="width: 30%;"><b>area</b></td>
<td class="t-wrap-line">Container with automatic indentation on the right and left.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>area-fluid</b></td>
<td class="t-wrap-line">A container that occupies the entire width of the screen.</td></tr></table>
<div class="demo-end">&nbsp;</div>
`,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class StyleArea {
  
}