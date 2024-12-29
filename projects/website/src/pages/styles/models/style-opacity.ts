import { Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'style-opacity',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false,
  template: `
<h4 class="bq bq-warning demo-name">Opacity</h4>
<p class="demo-desc"></p>
<div class="demo-view w-full">
  <div class="d-flex d-flex-wrap gap-4">
    <div class="box box-info o-0">o-0</div>
    <div class="box box-info o-10">o-10</div>
    <div class="box box-info o-20">o-20</div>
    <div class="box box-info o-30">o-30</div>
    <div class="box box-info o-40">o-40</div>
    <div class="box box-info o-50">o-50</div>
    <div class="box box-info o-60">o-60</div>
    <div class="box box-info o-70">o-70</div>
    <div class="box box-info o-80">o-80</div>
    <div class="box box-info o-90">o-90</div>
    <div class="box box-info o-100">o-100</div>
  </div>
  <div class="box box-info hover:o-50 mt-2">hover me</div></div>
<pre class="demo-html w-full">
  &lt;div class="d-flex d-flex-wrap gap-4"&gt;
    &lt;div class="box box-info o-0"&gt;o-0&lt;/div&gt;
    &lt;div class="box box-info o-10"&gt;o-10&lt;/div&gt;
    &lt;div class="box box-info o-20"&gt;o-20&lt;/div&gt;
    &lt;div class="box box-info o-30"&gt;o-30&lt;/div&gt;
    &lt;div class="box box-info o-40"&gt;o-40&lt;/div&gt;
    &lt;div class="box box-info o-50"&gt;o-50&lt;/div&gt;
    &lt;div class="box box-info o-60"&gt;o-60&lt;/div&gt;
    &lt;div class="box box-info o-70"&gt;o-70&lt;/div&gt;
    &lt;div class="box box-info o-80"&gt;o-80&lt;/div&gt;
    &lt;div class="box box-info o-90"&gt;o-90&lt;/div&gt;
    &lt;div class="box box-info o-100"&gt;o-100&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="box box-info hover:o-50 mt-2"&gt;hover me&lt;/div&gt;</pre>
<table class="demo-attr">
<tr><td class="t-wrap-line" style="width: 30%;"><b>o-0...100</b></td>
<td class="t-wrap-line">Opacity from 0% to 100% with step 10%.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>hover:o-0...100</b></td>
<td class="t-wrap-line">Opacity on hover.</td></tr></table>
<div class="demo-end">&nbsp;</div>
`,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class StyleOpacity {
  
}