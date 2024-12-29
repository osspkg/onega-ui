import { Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'comp-links',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false,
  template: `
<h4 class="bq bq-warning demo-name">Active Route</h4>
<p class="demo-desc"></p>
<div class="demo-view w-full">
  <a href="/" [ong-active-route]="['btn']">HOME</a>
  <a href="/kit" [ong-active-route]="['btn']">KIT</a></div>
<pre class="demo-html w-full">
  &lt;a href="/" [ong-active-route]="['btn']"&gt;HOME&lt;/a&gt;
  &lt;a href="/kit" [ong-active-route]="['btn']"&gt;KIT&lt;/a&gt;</pre>
<table class="demo-attr">
<tr><td class="t-wrap-line" style="width: 30%;"><b>[ong-active-route]</b></td>
<td class="t-wrap-line">Adding a class if the link matches the current route or starts with it.</td></tr></table>
<div class="demo-end">&nbsp;</div>
<h4 class="bq bq-warning demo-name">Href Build</h4>
<p class="demo-desc"></p>
<div class="demo-view w-full">
  <a [ong-href]="'/aaa aaa'">HREF BUILD as href="/aaa--aaa"</a></div>
<pre class="demo-html w-full">
  &lt;a [ong-href]="'/aaa aaa'"&gt;HREF BUILD as href="/aaa--aaa"&lt;/a&gt;</pre>
<table class="demo-attr">
<tr><td class="t-wrap-line" style="width: 30%;"><b>[ong-href]</b></td>
<td class="t-wrap-line">Replacing spaces with double dashes</td></tr></table>
<div class="demo-end">&nbsp;</div>
`,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class CompLinks {
  
}