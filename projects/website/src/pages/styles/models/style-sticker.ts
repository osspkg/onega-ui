import { Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'style-sticker',
  template: `
<h4 class="bq bq-warning demo-name">Sticker</h4>
<p class="demo-desc"></p>
<div class="demo-view w-full">
  <div class="d-flex d-flex-wrap gap-3">
    <div class="box box-info p-relative w-10rem h-10rem">
      <div class="sticker">
        <div class="sticker-corner">sticker-corner sticker-corner</div>
      </div>
      sticker-corner
    </div>
  </div></div>
<pre class="demo-html w-full">
  &lt;div class="d-flex d-flex-wrap gap-3"&gt;
    &lt;div class="box box-info p-relative w-10rem h-10rem"&gt;
      &lt;div class="sticker"&gt;
        &lt;div class="sticker-corner"&gt;sticker-corner sticker-corner&lt;/div&gt;
      &lt;/div&gt;
      sticker-corner
    &lt;/div&gt;
  &lt;/div&gt;</pre>
<table class="demo-attr">
<tr><td class="t-wrap-line" style="width: 30%;"><b>box</b></td>
<td class="t-wrap-line">Base color container</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>bg-light, bg-secondary, bg-warning, bg-danger, bg-success, bg-info, bg-primary, bg-dark</b></td>
<td class="t-wrap-line">Fill color.</td></tr></table>
<div class="demo-end">&nbsp;</div>
`,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class StyleSticker {
  
}