import { Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'style-position',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false,
  template: `
<h4 class="bq bq-warning demo-name">Position</h4>
<p class="demo-desc">Specifies how an element is positioned on the screen.</p>
<div class="demo-view w-full">
  <div class="p-relative x">
    <div class="p-relative x">p-relative</div>
    <div class="p-static x" style="top: 0;">p-static</div>
    <div class="p-absolute x" style="bottom: 10px; right:0; width: 100px;">p-absolute</div>
  </div></div>
<pre class="demo-html w-full">
  &lt;div class="p-relative x"&gt;
    &lt;div class="p-relative x"&gt;p-relative&lt;/div&gt;
    &lt;div class="p-static x" style="top: 0;"&gt;p-static&lt;/div&gt;
    &lt;div class="p-absolute x" style="bottom: 10px; right:0; width: 100px;"&gt;p-absolute&lt;/div&gt;
  &lt;/div&gt;</pre>
<table class="demo-attr">
<tr><td class="t-wrap-line" style="width: 30%;"><b>p-static</b></td>
<td class="t-wrap-line">The element is positioned according to the Normal Flow of the document. The top, right, bottom, left, and z-index properties have no effect. This is the default value.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>p-fixed</b></td>
<td class="t-wrap-line">The element is removed from the normal document flow, and no space is created for the element in the page layout. The element is positioned relative to its initial containing block, which is the viewport in the case of visual media. Its final position is determined by the values of top, right, bottom, and left.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>p-relative</b></td>
<td class="t-wrap-line">The element is positioned according to the normal flow of the document, and then offset relative to itself based on the values of top, right, bottom, and left. The offset does not affect the position of any other elements; thus, the space given for the element in the page layout is the same as if position were static.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>p-absolute</b></td>
<td class="t-wrap-line">The element is removed from the normal document flow, and no space is created for the element in the page layout. The element is positioned relative to its closest positioned ancestor (if any) or to the initial containing block. Its final position is determined by the values of top, right, bottom, and left.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>p-sticky</b></td>
<td class="t-wrap-line">The element is positioned according to the normal flow of the document, and then offset relative to its nearest scrolling ancestor and containing block (nearest block-level ancestor), including table-related elements, based on the values of top, right, bottom, and left. The offset does not affect the position of any other elements.</td></tr></table>
<div class="demo-end">&nbsp;</div>
<h4 class="bq bq-warning demo-name">Top / Right / Bottom / Left</h4>
<p class="demo-desc">Controls the vertical and horizontal position of a positioned element.</p>
<table class="demo-attr">
<tr><td class="t-wrap-line" style="width: 30%;"><b>p-top</b></td>
<td class="t-wrap-line">Top position - auto.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>p-top-0</b></td>
<td class="t-wrap-line">Top position - 0%.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>p-top-50</b></td>
<td class="t-wrap-line">Top position - 50%.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>p-top-100</b></td>
<td class="t-wrap-line">Top position - 100%.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>p-bottom</b></td>
<td class="t-wrap-line">Bottom position - auto.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>p-bottom-0</b></td>
<td class="t-wrap-line">Bottom position - 0%.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>p-bottom-50</b></td>
<td class="t-wrap-line">Bottom position - 50%.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>p-bottom-100</b></td>
<td class="t-wrap-line">Bottom position - 100%.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>p-right</b></td>
<td class="t-wrap-line">Right position - auto.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>p-right-0</b></td>
<td class="t-wrap-line">Right position - 0%.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>p-right-50</b></td>
<td class="t-wrap-line">Right position - 50%.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>p-right-100</b></td>
<td class="t-wrap-line">Right position - 100%.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>p-left</b></td>
<td class="t-wrap-line">Left position - auto.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>p-left-0</b></td>
<td class="t-wrap-line">Left position - 0%.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>p-left-50</b></td>
<td class="t-wrap-line">Left position - 50%.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>p-left-100</b></td>
<td class="t-wrap-line">Left position - 100%.</td></tr></table>
<div class="demo-end">&nbsp;</div>
`,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class StylePosition {
  
}