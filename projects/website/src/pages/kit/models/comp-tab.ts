import { Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'comp-tab',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false,
  template: `
<h4 class="bq bq-warning demo-name">Tab</h4>
<p class="demo-desc"></p>
<div class="demo-view w-full">
  <ong-tabs [color]="'danger'" [style]="'btn'" [byDefault]="'Example Tab 2'" (onSwitch)="tabSwitch($event)">
      <ng-template ong-tab-name="Example Tab 1">
        <div>Tab1</div>
      </ng-template>
      <ng-template ong-tab-name="Example Tab 2">
        <div>Tab2</div>
      </ng-template>
      <ng-template ong-tab-name="Example Tab 3">
        <div>Tab3</div>
      </ng-template>
      <ng-template ong-tab-name="Example Tab 4">
        <div>Tab4</div>
      </ng-template>
      <ng-template ong-tab-name="Example Tab 5">
        <div>Tab5</div>
      </ng-template>
    </ong-tabs>

    <ong-tabs [color]="'danger'" [style]="'line'">
      <ng-template ong-tab-name="Example Tab 1">
        <div>Tab1</div>
      </ng-template>
      <ng-template ong-tab-name="Example Tab 2">
        <div>Tab2</div>
      </ng-template>
      <ng-template ong-tab-name="Example Tab 3">
        <div>Tab3</div>
      </ng-template>
      <ng-template ong-tab-name="Example Tab 4">
        <div>Tab4</div>
      </ng-template>
      <ng-template ong-tab-name="Example Tab 5">
        <div>Tab5</div>
      </ng-template>
    </ong-tabs></div>
<pre class="demo-html w-full">
  &lt;ong-tabs [color]="'danger'" [style]="'btn'" [byDefault]="'Example Tab 2'" (onSwitch)="tabSwitch($event)"&gt;
      &lt;ng-template ong-tab-name="Example Tab 1"&gt;
        &lt;div&gt;Tab1&lt;/div&gt;
      &lt;/ng-template&gt;
      &lt;ng-template ong-tab-name="Example Tab 2"&gt;
        &lt;div&gt;Tab2&lt;/div&gt;
      &lt;/ng-template&gt;
      &lt;ng-template ong-tab-name="Example Tab 3"&gt;
        &lt;div&gt;Tab3&lt;/div&gt;
      &lt;/ng-template&gt;
      &lt;ng-template ong-tab-name="Example Tab 4"&gt;
        &lt;div&gt;Tab4&lt;/div&gt;
      &lt;/ng-template&gt;
      &lt;ng-template ong-tab-name="Example Tab 5"&gt;
        &lt;div&gt;Tab5&lt;/div&gt;
      &lt;/ng-template&gt;
    &lt;/ong-tabs&gt;

    &lt;ong-tabs [color]="'danger'" [style]="'line'"&gt;
      &lt;ng-template ong-tab-name="Example Tab 1"&gt;
        &lt;div&gt;Tab1&lt;/div&gt;
      &lt;/ng-template&gt;
      &lt;ng-template ong-tab-name="Example Tab 2"&gt;
        &lt;div&gt;Tab2&lt;/div&gt;
      &lt;/ng-template&gt;
      &lt;ng-template ong-tab-name="Example Tab 3"&gt;
        &lt;div&gt;Tab3&lt;/div&gt;
      &lt;/ng-template&gt;
      &lt;ng-template ong-tab-name="Example Tab 4"&gt;
        &lt;div&gt;Tab4&lt;/div&gt;
      &lt;/ng-template&gt;
      &lt;ng-template ong-tab-name="Example Tab 5"&gt;
        &lt;div&gt;Tab5&lt;/div&gt;
      &lt;/ng-template&gt;
    &lt;/ong-tabs&gt;</pre>
<table class="demo-attr">
<tr><td class="t-wrap-line" style="width: 30%;"><b>ong-tabs</b></td>
<td class="t-wrap-line">Base tag</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>ong-tab-name="..."</b></td>
<td class="t-wrap-line">ng-template directive with tab name</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>[color]</b></td>
<td class="t-wrap-line">Tab color ['light' | 'secondary' | 'warning' | 'danger' | 'success' | 'info' | 'primary' | 'dark'].</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>[style]</b></td>
<td class="t-wrap-line">Sticker type ['btn' | 'line'].</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>[byDefault]</b></td>
<td class="t-wrap-line">Setter default tab.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>(onSwitch)</b></td>
<td class="t-wrap-line">Event tab switch.</td></tr></table>
<div class="demo-end">&nbsp;</div>
`,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class CompTab {
  tabSwitch(value: unknown): void {
    console.table({ value });
  }
}