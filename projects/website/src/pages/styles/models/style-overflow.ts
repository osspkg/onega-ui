import { Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'style-overflow',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false,
  template: `
<h4 class="bq bq-warning demo-name">Overflow</h4>
<p class="demo-desc">Controls the behavior when content exceeds the area of its container.</p>
<table class="demo-attr">
<tr><td class="t-wrap-line" style="width: 30%;"><b>overflow-auto</b></td>
<td class="t-wrap-line">A vertical scrollbar is only displayed when the content does not fit the area.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>overflow-hidden</b></td>
<td class="t-wrap-line">Overflown content is clipped and rest of the content will not be visible.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>overflow-scroll</b></td>
<td class="t-wrap-line">A vertical scrollbar is always displayed whether the content overflows or not.</td></tr></table>
<div class="demo-end">&nbsp;</div>
`,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class StyleOverflow {
  
}