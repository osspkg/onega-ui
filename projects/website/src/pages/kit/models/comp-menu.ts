import { Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'comp-menu',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false,
  template: `
<h4 class="bq bq-warning demo-name">Vertical Menu</h4>
<p class="demo-desc"></p>
<div class="demo-view w-full">
  <ong-menuv>
    <ng-template ong-menuv-header>
      <h1>Header</h1>
    </ng-template>
    <ng-template ong-menuv-body>
      <h3>Body1</h3>
    </ng-template>
    <ng-template ong-menuv-body>
      <h3>Body2</h3>
    </ng-template>
    <ng-template ong-menuv-footer>
      <h1>Footer</h1>
    </ng-template>
  </ong-menuv></div>
<pre class="demo-html w-full">
  &lt;ong-menuv&gt;
    &lt;ng-template ong-menuv-header&gt;
      &lt;h1&gt;Header&lt;/h1&gt;
    &lt;/ng-template&gt;
    &lt;ng-template ong-menuv-body&gt;
      &lt;h3&gt;Body1&lt;/h3&gt;
    &lt;/ng-template&gt;
    &lt;ng-template ong-menuv-body&gt;
      &lt;h3&gt;Body2&lt;/h3&gt;
    &lt;/ng-template&gt;
    &lt;ng-template ong-menuv-footer&gt;
      &lt;h1&gt;Footer&lt;/h1&gt;
    &lt;/ng-template&gt;
  &lt;/ong-menuv&gt;</pre>
<table class="demo-attr">
<tr><td class="t-wrap-line" style="width: 30%;"><b>ong-menuv</b></td>
<td class="t-wrap-line">Base tag</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>ong-menuv-body</b></td>
<td class="t-wrap-line">Template directive for set header content</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>ong-menuv-header</b></td>
<td class="t-wrap-line">Template directive for set body content</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>ong-menuv-footer</b></td>
<td class="t-wrap-line">Template directive for set footer content</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>STYLES CHANGING:</b></td>
<td class="t-wrap-line">style="--ong-menuv-< sufix >: < value >;..."</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>--ong-menuv-height</b></td>
<td class="t-wrap-line">menu height (default: 100vh)</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>--ong-menuv-header-height</b></td>
<td class="t-wrap-line">header height (default: 10vh)</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>--ong-menuv-footer-height</b></td>
<td class="t-wrap-line">footer height (default: 10vh)</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>--ong-menuv-width</b></td>
<td class="t-wrap-line">menu width (default: 15rem)</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>--ong-menuv-bg-color</b></td>
<td class="t-wrap-line">menu background</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>--ong-menuv-line-color</b></td>
<td class="t-wrap-line">right line color</td></tr></table>
<div class="demo-end">&nbsp;</div>
`,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class CompMenu {
  
}