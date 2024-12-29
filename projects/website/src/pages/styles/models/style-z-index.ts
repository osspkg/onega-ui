import { Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'style-z-index',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false,
  template: `
<h4 class="bq bq-warning demo-name">Z-Index</h4>
<p class="demo-desc">Defines the stack order of an element.</p>
<table class="demo-attr">
<tr><td class="t-wrap-line" style="width: 30%;"><b>zi-auto</b></td>
<td class="t-wrap-line">z-index: auto</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>zi-max</b></td>
<td class="t-wrap-line">z-index: 999999</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>zi-0...10</b></td>
<td class="t-wrap-line">z-index: 0...10</td></tr></table>
<div class="demo-end">&nbsp;</div>
`,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class StyleZIndex {
  
}