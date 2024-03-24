import { Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'style-responsive',
  template: `
<h4 class="bq bq-warning demo-name">Responsive</h4>
<p class="demo-desc">Some merges support different screen sizes. To apply merges to a specific screen, add a size prefix before the css class, example: <b>md:css-class</b></p>
<table class="demo-attr">
<tr><td class="t-wrap-line" style="width: 30%;"><b>xs:</b></td>
<td class="t-wrap-line">extra small screens e.g. old phones</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>sm:</b></td>
<td class="t-wrap-line">small screens e.g. phones</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>md:</b></td>
<td class="t-wrap-line">medium screens e.g. tablets</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>lg:</b></td>
<td class="t-wrap-line">large screens e.g. notebooks</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>xl:</b></td>
<td class="t-wrap-line">larger screens e.g monitors</td></tr></table>
<div class="demo-end">&nbsp;</div>
`,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class StyleResponsive {
  
}