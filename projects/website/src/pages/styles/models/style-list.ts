import { Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'style-list',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false,
  template: `
<h4 class="bq bq-warning demo-name">List</h4>
<p class="demo-desc"></p>
<div class="demo-view w-full">
  <div class="d-flex d-flex-wrap gap-3">
    <div class="box box-info w-30 pl-3">
      <ul class="l-none"><li>l-none</li><li>l-none</li><li>l-none</li></ul>
    </div>
    <div class="box box-info w-30 pl-3">
      <ul class="l-disc"><li>l-disc</li><li>l-disc</li><li>l-disc</li></ul>
    </div>
    <div class="box box-info w-30 pl-3">
      <ul class="l-circle"><li>l-circle</li><li>l-circle</li><li>l-circle</li></ul>
    </div>
    <div class="box box-info w-30 pl-3">
      <ul class="l-square"><li>l-square</li><li>l-square</li><li>l-square</li></ul>
    </div>
    <div class="box box-info w-30 pl-3">
      <ul class="l-decimal"><li>l-decimal</li><li>l-decimal</li><li>l-decimal</li></ul>
    </div>
    <div class="box box-info w-30 pl-3">
      <ul class="l-roman"><li>l-roman</li><li>l-roman</li><li>l-roman</li></ul>
    </div>
    <div class="box box-info w-30 pl-3">
      <ul class="l-disclosure"><li>l-disclosure</li><li>l-disclosure</li><li>l-disclosure</li></ul>
    </div>
    <div class="box box-info w-30 pl-3">
      <ul class="l-line"><li>l-line</li><li>l-line</li><li>l-line</li></ul>
    </div>
    <div class="box box-info w-30 pl-3">
      <ul class="l-quotation"><li>l-quotation</li><li>l-quotation</li><li>l-quotation</li></ul>
    </div>
    <div class="box box-info w-30 pl-3">
      <ul class="l-latin"><li>l-latin</li><li>l-latin</li><li>l-latin</li></ul>
    </div>
  </div></div>
<pre class="demo-html w-full">
  &lt;div class="d-flex d-flex-wrap gap-3"&gt;
    &lt;div class="box box-info w-30 pl-3"&gt;
      &lt;ul class="l-none"&gt;&lt;li&gt;l-none&lt;/li&gt;&lt;li&gt;l-none&lt;/li&gt;&lt;li&gt;l-none&lt;/li&gt;&lt;/ul&gt;
    &lt;/div&gt;
    &lt;div class="box box-info w-30 pl-3"&gt;
      &lt;ul class="l-disc"&gt;&lt;li&gt;l-disc&lt;/li&gt;&lt;li&gt;l-disc&lt;/li&gt;&lt;li&gt;l-disc&lt;/li&gt;&lt;/ul&gt;
    &lt;/div&gt;
    &lt;div class="box box-info w-30 pl-3"&gt;
      &lt;ul class="l-circle"&gt;&lt;li&gt;l-circle&lt;/li&gt;&lt;li&gt;l-circle&lt;/li&gt;&lt;li&gt;l-circle&lt;/li&gt;&lt;/ul&gt;
    &lt;/div&gt;
    &lt;div class="box box-info w-30 pl-3"&gt;
      &lt;ul class="l-square"&gt;&lt;li&gt;l-square&lt;/li&gt;&lt;li&gt;l-square&lt;/li&gt;&lt;li&gt;l-square&lt;/li&gt;&lt;/ul&gt;
    &lt;/div&gt;
    &lt;div class="box box-info w-30 pl-3"&gt;
      &lt;ul class="l-decimal"&gt;&lt;li&gt;l-decimal&lt;/li&gt;&lt;li&gt;l-decimal&lt;/li&gt;&lt;li&gt;l-decimal&lt;/li&gt;&lt;/ul&gt;
    &lt;/div&gt;
    &lt;div class="box box-info w-30 pl-3"&gt;
      &lt;ul class="l-roman"&gt;&lt;li&gt;l-roman&lt;/li&gt;&lt;li&gt;l-roman&lt;/li&gt;&lt;li&gt;l-roman&lt;/li&gt;&lt;/ul&gt;
    &lt;/div&gt;
    &lt;div class="box box-info w-30 pl-3"&gt;
      &lt;ul class="l-disclosure"&gt;&lt;li&gt;l-disclosure&lt;/li&gt;&lt;li&gt;l-disclosure&lt;/li&gt;&lt;li&gt;l-disclosure&lt;/li&gt;&lt;/ul&gt;
    &lt;/div&gt;
    &lt;div class="box box-info w-30 pl-3"&gt;
      &lt;ul class="l-line"&gt;&lt;li&gt;l-line&lt;/li&gt;&lt;li&gt;l-line&lt;/li&gt;&lt;li&gt;l-line&lt;/li&gt;&lt;/ul&gt;
    &lt;/div&gt;
    &lt;div class="box box-info w-30 pl-3"&gt;
      &lt;ul class="l-quotation"&gt;&lt;li&gt;l-quotation&lt;/li&gt;&lt;li&gt;l-quotation&lt;/li&gt;&lt;li&gt;l-quotation&lt;/li&gt;&lt;/ul&gt;
    &lt;/div&gt;
    &lt;div class="box box-info w-30 pl-3"&gt;
      &lt;ul class="l-latin"&gt;&lt;li&gt;l-latin&lt;/li&gt;&lt;li&gt;l-latin&lt;/li&gt;&lt;li&gt;l-latin&lt;/li&gt;&lt;/ul&gt;
    &lt;/div&gt;
  &lt;/div&gt;</pre>
<table class="demo-attr">
<tr><td class="t-wrap-line" style="width: 30%;"><b>Classes</b></td>
<td class="t-wrap-line">l-none, l-disc, l-circle, l-square, l-decimal, l-roman, l-disclosure, l-line, l-quotation, l-latin</td></tr></table>
<div class="demo-end">&nbsp;</div>
`,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class StyleList {
  
}