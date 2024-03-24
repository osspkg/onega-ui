import { Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'style-sizing',
  template: `
<h4 class="bq bq-warning demo-name">Block sizes</h4>
<p class="demo-desc"></p>
<div class="demo-view w-full">
  <div class="d-block">
    <div class="box box-info w-content">w-content</div>
    <div class="box box-info w-content">text text text text text text</div>
    <div class="box box-info">text text text<br>text text text</div>
  </div>

  <div class="d-flex mt-1">
    <div class="box box-info w-half">w-half</div>
    <div class="box box-info w-full">w-full</div>
    <div class="box box-info w-10">w-10</div>
  </div>

  <div class="d-flex mt-1">
    <div class="box box-info w-10">w-10</div>
    <div class="box box-info w-55">w-55</div>
  </div></div>
<pre class="demo-html w-full">
  &lt;div class="d-block"&gt;
    &lt;div class="box box-info w-content"&gt;w-content&lt;/div&gt;
    &lt;div class="box box-info w-content"&gt;text text text text text text&lt;/div&gt;
    &lt;div class="box box-info"&gt;text text text&lt;br&gt;text text text&lt;/div&gt;
  &lt;/div&gt;

  &lt;div class="d-flex mt-1"&gt;
    &lt;div class="box box-info w-half"&gt;w-half&lt;/div&gt;
    &lt;div class="box box-info w-full"&gt;w-full&lt;/div&gt;
    &lt;div class="box box-info w-10"&gt;w-10&lt;/div&gt;
  &lt;/div&gt;

  &lt;div class="d-flex mt-1"&gt;
    &lt;div class="box box-info w-10"&gt;w-10&lt;/div&gt;
    &lt;div class="box box-info w-55"&gt;w-55&lt;/div&gt;
  &lt;/div&gt;</pre>
<table class="demo-attr">
<tr><td class="t-wrap-line" style="width: 30%;"><b>w-content</b></td>
<td class="t-wrap-line">Adjust the block size to match the width of the content.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>w-screen</b></td>
<td class="t-wrap-line">Adjust the block size to match the width of the screen.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>w-full</b></td>
<td class="t-wrap-line">Set block size to 100% width.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>w-half</b></td>
<td class="t-wrap-line">Set block size to 100% width.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>w-5...95</b></td>
<td class="t-wrap-line">Set the block size to 5%...95% of the width in 5% increments.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>w-1rem...30rem</b></td>
<td class="t-wrap-line">Set the block size to 1rem...30rem of the width in 1rem increments.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>h-content</b></td>
<td class="t-wrap-line">Adjust the block size to match the height of the content.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>h-screen</b></td>
<td class="t-wrap-line">Adjust the block size to match the height of the screen.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>h-full</b></td>
<td class="t-wrap-line">Set block size to 100% height.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>h-half</b></td>
<td class="t-wrap-line">Set block size to 100% height.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>h-5...95</b></td>
<td class="t-wrap-line">Set the block size to 5%...95% of the height in 5% increments.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>h-1rem...30rem</b></td>
<td class="t-wrap-line">Set the block size to 1rem...30rem of the height in 1rem increments.</td></tr></table>
<div class="demo-end">&nbsp;</div>
`,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class StyleSizing {
  
}