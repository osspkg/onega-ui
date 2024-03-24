import { Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'style-animation',
  template: `
<h4 class="bq bq-warning demo-name">Animation</h4>
<p class="demo-desc"></p>
<div class="demo-view w-full">
  <div class="d-flex d-flex-wrap gap-3">
    <div class="box box-info a-fade-in-bottom">a-fade-in-bottom</div>
    <div class="box box-info a-fade-in-top">a-fade-in-top</div>
    <div class="box box-info a-fade-in-left">a-fade-in-left</div>
    <div class="box box-info a-fade-in-right">a-fade-in-right</div>
    <div class="box box-info a-fade-in-center">a-fade-in-center</div>
  </div>
  <div class="d-flex d-flex-wrap gap-3 mt-1">
    <div class="box box-info a-fade-out-bottom">a-fade-out-bottom</div>
    <div class="box box-info a-fade-out-top">a-fade-out-top</div>
    <div class="box box-info a-fade-out-left">a-fade-out-left</div>
    <div class="box box-info a-fade-out-right">a-fade-out-right</div>
    <div class="box box-info a-fade-out-center">a-fade-out-center</div>
  </div>
  <div class="d-flex d-flex-wrap gap-3 mt-1">
    <div class="box box-info a-scale-in">a-scale-in</div>
    <div class="box box-info a-scale-out">a-scale-out</div>
    <div class="box box-info a-shake">a-shake</div>
  </div></div>
<pre class="demo-html w-full">
  &lt;div class="d-flex d-flex-wrap gap-3"&gt;
    &lt;div class="box box-info a-fade-in-bottom"&gt;a-fade-in-bottom&lt;/div&gt;
    &lt;div class="box box-info a-fade-in-top"&gt;a-fade-in-top&lt;/div&gt;
    &lt;div class="box box-info a-fade-in-left"&gt;a-fade-in-left&lt;/div&gt;
    &lt;div class="box box-info a-fade-in-right"&gt;a-fade-in-right&lt;/div&gt;
    &lt;div class="box box-info a-fade-in-center"&gt;a-fade-in-center&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="d-flex d-flex-wrap gap-3 mt-1"&gt;
    &lt;div class="box box-info a-fade-out-bottom"&gt;a-fade-out-bottom&lt;/div&gt;
    &lt;div class="box box-info a-fade-out-top"&gt;a-fade-out-top&lt;/div&gt;
    &lt;div class="box box-info a-fade-out-left"&gt;a-fade-out-left&lt;/div&gt;
    &lt;div class="box box-info a-fade-out-right"&gt;a-fade-out-right&lt;/div&gt;
    &lt;div class="box box-info a-fade-out-center"&gt;a-fade-out-center&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="d-flex d-flex-wrap gap-3 mt-1"&gt;
    &lt;div class="box box-info a-scale-in"&gt;a-scale-in&lt;/div&gt;
    &lt;div class="box box-info a-scale-out"&gt;a-scale-out&lt;/div&gt;
    &lt;div class="box box-info a-shake"&gt;a-shake&lt;/div&gt;
  &lt;/div&gt;</pre>
<table class="demo-attr">
<tr><td class="t-wrap-line" style="width: 30%;"><b>fade-in</b></td>
<td class="t-wrap-line">a-fade-in-bottom, a-fade-in-top, a-fade-in-left, a-fade-in-right, a-fade-in-center</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>fade-out</b></td>
<td class="t-wrap-line">a-fade-out-bottom,a-fade-out-top, a-fade-out-left,a-fade-out-right, a-fade-out-center</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>scale</b></td>
<td class="t-wrap-line">a-scale-in, a-scale-out</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>shake</b></td>
<td class="t-wrap-line">a-shake</td></tr></table>
<div class="demo-end">&nbsp;</div>
`,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class StyleAnimation {
  
}