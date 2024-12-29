import { Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'style-shadow',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false,
  template: `
<h4 class="bq bq-warning demo-name">Box Shadow</h4>
<p class="demo-desc"></p>
<div class="demo-view w-full">
  <div class="d-flex d-flex-wrap gap-4">
    <div class="box bs-none">bs-none</div>
    <div class="box bs-1">bs-1</div>
    <div class="box bs-2">bs-2</div>
    <div class="box bs-3">bs-3</div>
    <div class="box bs-4">bs-4</div>
    <div class="box bs-5">bs-5</div>
    <div class="box bs-6">bs-6</div>
    <div class="box bs-7">bs-7</div>
    <div class="box bs-8">bs-8</div>
  </div></div>
<pre class="demo-html w-full">
  &lt;div class="d-flex d-flex-wrap gap-4"&gt;
    &lt;div class="box bs-none"&gt;bs-none&lt;/div&gt;
    &lt;div class="box bs-1"&gt;bs-1&lt;/div&gt;
    &lt;div class="box bs-2"&gt;bs-2&lt;/div&gt;
    &lt;div class="box bs-3"&gt;bs-3&lt;/div&gt;
    &lt;div class="box bs-4"&gt;bs-4&lt;/div&gt;
    &lt;div class="box bs-5"&gt;bs-5&lt;/div&gt;
    &lt;div class="box bs-6"&gt;bs-6&lt;/div&gt;
    &lt;div class="box bs-7"&gt;bs-7&lt;/div&gt;
    &lt;div class="box bs-8"&gt;bs-8&lt;/div&gt;
  &lt;/div&gt;</pre>
<table class="demo-attr">
<tr><td class="t-wrap-line" style="width: 30%;"><b>bs-none</b></td>
<td class="t-wrap-line">No shadow.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>bs-1...8</b></td>
<td class="t-wrap-line">Shadow size.</td></tr></table>
<div class="demo-end">&nbsp;</div>
`,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class StyleShadow {
  
}