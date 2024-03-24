import { Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'comp-tag',
  template: `
<h4 class="bq bq-warning demo-name">Tag</h4>
<p class="demo-desc"></p>
<div class="demo-view w-full">
  <ong-tags [(values)]="demoValues"></ong-tags>
  <ong-tags [(values)]="demoValues" [disable]="true"></ong-tags></div>
<pre class="demo-html w-full">
  &lt;ong-tags [(values)]="demoValues"&gt;&lt;/ong-tags&gt;
  &lt;ong-tags [(values)]="demoValues" [disable]="true"&gt;&lt;/ong-tags&gt;</pre>
<table class="demo-attr">
<tr><td class="t-wrap-line" style="width: 30%;"><b>ong-tags</b></td>
<td class="t-wrap-line">Base tag</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>[(values)]</b></td>
<td class="t-wrap-line">Data binding with values as string[].</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>[disable]</b></td>
<td class="t-wrap-line">Disable data changing.</td></tr></table>
<div class="demo-end">&nbsp;</div>
`,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class CompTag {
  demoValues = ['example1', 'example2'];
}