import { Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'comp-sticker',
  template: `
<h4 class="bq bq-warning demo-name">Sticker</h4>
<p class="demo-desc"></p>
<div class="demo-view w-full">
  <div class="d-flex d-flex-wrap gap-3">
    <div class="box box-secondary w-15rem h-10rem p-0 m-0">
      <ong-sticker
        [data]="'Short sticker text.'"
        [color]="'warning'"
        [type]="'corner'"
        (onClick)="stickerClick()"
      />
    </div>
    <div class="box box-secondary w-15rem h-5rem p-0 m-0">
      <ong-sticker
        [data]="'Long sticker text. (Autosize)'"
        [color]="'danger'"
        [type]="'top'"
        (onClick)="stickerClick()"
      />
    </div>
    <div class="box box-secondary w-15rem h-5rem p-0 m-0">
      <ong-sticker
        [data]="'Long sticker text. (Autosize)'"
        [color]="'success'"
        [type]="'left'"
        (onClick)="stickerClick()"
      />
    </div>
  </div></div>
<pre class="demo-html w-full">
  &lt;div class="d-flex d-flex-wrap gap-3"&gt;
    &lt;div class="box box-secondary w-15rem h-10rem p-0 m-0"&gt;
      &lt;ong-sticker
        [data]="'Short sticker text.'"
        [color]="'warning'"
        [type]="'corner'"
        (onClick)="stickerClick()"
      /&gt;
    &lt;/div&gt;
    &lt;div class="box box-secondary w-15rem h-5rem p-0 m-0"&gt;
      &lt;ong-sticker
        [data]="'Long sticker text. (Autosize)'"
        [color]="'danger'"
        [type]="'top'"
        (onClick)="stickerClick()"
      /&gt;
    &lt;/div&gt;
    &lt;div class="box box-secondary w-15rem h-5rem p-0 m-0"&gt;
      &lt;ong-sticker
        [data]="'Long sticker text. (Autosize)'"
        [color]="'success'"
        [type]="'left'"
        (onClick)="stickerClick()"
      /&gt;
    &lt;/div&gt;
  &lt;/div&gt;</pre>
<table class="demo-attr">
<tr><td class="t-wrap-line" style="width: 30%;"><b>ong-sticker</b></td>
<td class="t-wrap-line">Base tag</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>[data]</b></td>
<td class="t-wrap-line">Sticker text</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>[color]</b></td>
<td class="t-wrap-line">Sticker color ['light' | 'secondary' | 'warning' | 'danger' | 'success' | 'info' | 'primary' | 'dark'].</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>[type]</b></td>
<td class="t-wrap-line">Sticker type ['corner' | 'top'].</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>(onClick)</b></td>
<td class="t-wrap-line">Click event.</td></tr></table>
<div class="demo-end">&nbsp;</div>
`,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class CompSticker {
  stickerClick(): void {
    alert('Sticker clicked');
  }
}