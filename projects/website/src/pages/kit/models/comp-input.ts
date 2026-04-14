import { Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'comp-input',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false,
  template: `
<h4 class="bq bq-warning demo-name">Input</h4>
<p class="demo-desc"></p>
<div class="demo-view w-full">
  <div class="d-flex d-flex-wrap gap-3">
      <ong-input
        [label]="'Input type - filled'"
        [data]="'Input text'"
        [color]="'danger'"
        [type]="'text'"
        [style]="'filled'"
        (onInput)="onInput"
      />
      <ong-input
        [label]="'Input type - standard'"
        [data]="'Input text'"
        [color]="'warning'"
        [type]="'text'"
        [style]="'standard'"
        (onInput)="onInput"
      />
  </div></div>
<pre class="demo-html w-full">
  &lt;div class="d-flex d-flex-wrap gap-3"&gt;
      &lt;ong-input
        [label]="'Input type - filled'"
        [data]="'Input text'"
        [color]="'danger'"
        [type]="'text'"
        [style]="'filled'"
        (onInput)="onInput"
      /&gt;
      &lt;ong-input
        [label]="'Input type - standard'"
        [data]="'Input text'"
        [color]="'warning'"
        [type]="'text'"
        [style]="'standard'"
        (onInput)="onInput"
      /&gt;
  &lt;/div&gt;</pre>
<table class="demo-attr">
<tr><td class="t-wrap-line" style="width: 30%;"><b>ong-input</b></td>
<td class="t-wrap-line">Base tag</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>[data]</b></td>
<td class="t-wrap-line">Content</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>[label]</b></td>
<td class="t-wrap-line">Field Name</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>[color]</b></td>
<td class="t-wrap-line">Color ['light' | 'secondary' | 'warning' | 'danger' | 'success' | 'info' | 'primary' | 'dark'].</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>[type]</b></td>
<td class="t-wrap-line">Type ['text' | 'multitext' | 'select' | 'file'].</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>[style]</b></td>
<td class="t-wrap-line">Style ['filled' | 'standard'].</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>[multiline]</b></td>
<td class="t-wrap-line">Multiline input [false | true].</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>(onInput)</b></td>
<td class="t-wrap-line">Event.</td></tr></table>
<div class="demo-end">&nbsp;</div>
`,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class CompInput {
  onInput($e: any): void {
    console.log($e);
  }
}