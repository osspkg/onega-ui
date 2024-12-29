import { Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'style-layout',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false,
  template: `
<h4 class="bq bq-warning demo-name">Display</h4>
<p class="demo-desc">Defines how an element is displayed on a page.</p>
<table class="demo-attr">
<tr><td class="t-wrap-line" style="width: 30%;"><b>d-hidden</b></td>
<td class="t-wrap-line">A hidden element is not visible and does not allocate space.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>d-block</b></td>
<td class="t-wrap-line">A block element starts on a new line.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>d-block-inline</b></td>
<td class="t-wrap-line">Inline block is similar to an inline element but properties like width, height and top bottom paddings/margins are respected.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>d-inline</b></td>
<td class="t-wrap-line">An inline element does not start on a new line and allocates width as necessary.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>d-flex</b></td>
<td class="t-wrap-line">Displays the element as a block level flex container.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>d-flex-inline</b></td>
<td class="t-wrap-line">Displays the element as an inline level flex container.</td></tr></table>
<div class="demo-end">&nbsp;</div>
<h4 class="bq bq-warning demo-name">Flex Position</h4>
<p class="demo-desc">Specifies how an element is positioned on the screen.</p>
<div class="demo-view w-full">
  d-flex-row
  <div class="d-flex d-flex-row">
    <div class="xx">1</div>
    <div class="xx">2</div>
    <div class="xx">3</div>
  </div>

  d-flex-col
  <div class="d-flex d-flex-col">
    <div class="xx">1</div>
    <div class="xx">2</div>
    <div class="xx">3</div>
  </div>

  d-flex-x-end
  <div class="d-flex d-flex-x-end">
    <div class="xx">1</div>
    <div class="xx">2</div>
    <div class="xx">3</div>
  </div>

  d-flex-x-space-between
  <div class="d-flex d-flex-x-space-between">
    <div class="xx">1</div>
    <div class="xx">2</div>
    <div class="xx">3</div>
  </div>

  d-flex-x-space-around
  <div class="d-flex d-flex-x-space-around">
    <div class="xx">1</div>
    <div class="xx">2</div>
    <div class="xx">3</div>
  </div>

  d-flex-x-space-evenly
  <div class="d-flex d-flex-x-space-evenly">
    <div class="xx">1</div>
    <div class="xx">2</div>
    <div class="xx">3</div>
  </div></div>
<pre class="demo-html w-full">
  d-flex-row
  &lt;div class="d-flex d-flex-row"&gt;
    &lt;div class="xx"&gt;1&lt;/div&gt;
    &lt;div class="xx"&gt;2&lt;/div&gt;
    &lt;div class="xx"&gt;3&lt;/div&gt;
  &lt;/div&gt;

  d-flex-col
  &lt;div class="d-flex d-flex-col"&gt;
    &lt;div class="xx"&gt;1&lt;/div&gt;
    &lt;div class="xx"&gt;2&lt;/div&gt;
    &lt;div class="xx"&gt;3&lt;/div&gt;
  &lt;/div&gt;

  d-flex-x-end
  &lt;div class="d-flex d-flex-x-end"&gt;
    &lt;div class="xx"&gt;1&lt;/div&gt;
    &lt;div class="xx"&gt;2&lt;/div&gt;
    &lt;div class="xx"&gt;3&lt;/div&gt;
  &lt;/div&gt;

  d-flex-x-space-between
  &lt;div class="d-flex d-flex-x-space-between"&gt;
    &lt;div class="xx"&gt;1&lt;/div&gt;
    &lt;div class="xx"&gt;2&lt;/div&gt;
    &lt;div class="xx"&gt;3&lt;/div&gt;
  &lt;/div&gt;

  d-flex-x-space-around
  &lt;div class="d-flex d-flex-x-space-around"&gt;
    &lt;div class="xx"&gt;1&lt;/div&gt;
    &lt;div class="xx"&gt;2&lt;/div&gt;
    &lt;div class="xx"&gt;3&lt;/div&gt;
  &lt;/div&gt;

  d-flex-x-space-evenly
  &lt;div class="d-flex d-flex-x-space-evenly"&gt;
    &lt;div class="xx"&gt;1&lt;/div&gt;
    &lt;div class="xx"&gt;2&lt;/div&gt;
    &lt;div class="xx"&gt;3&lt;/div&gt;
  &lt;/div&gt;</pre>
<table class="demo-attr">
<tr><td class="t-wrap-line" style="width: 30%;"><b>d-flex-row</b></td>
<td class="t-wrap-line">The main axis is the same as the text orientation, defaulting to left to right. If dir is set to rtl, then the axis direction is from right to left.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>d-flex-col</b></td>
<td class="t-wrap-line">The main axis is located vertically and directed from top to bottom.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>d-flex-wrap</b></td>
<td class="t-wrap-line">Flexes are arranged in several lines, their direction is specified by the flex-direction property.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>d-flex-nowrap</b></td>
<td class="t-wrap-line">Flexes line up in one line.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>d-flex-x-start</b></td>
<td class="t-wrap-line">Flexes are pressed to the beginning of the line.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>d-flex-x-end</b></td>
<td class="t-wrap-line">Flexes are pressed to the end of the line.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>d-flex-x-center</b></td>
<td class="t-wrap-line">Flex lines are aligned to the center of the line.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>d-flex-x-space-between</b></td>
<td class="t-wrap-line">Flexes are evenly distributed throughout the line. The first and last element are pressed against the corresponding edges of the container.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>d-flex-x-space-around</b></td>
<td class="t-wrap-line">Flexes are evenly distributed throughout the line. The empty space before the first and after the last element is equal to half the space between two adjacent elements.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>d-flex-x-space-evenly</b></td>
<td class="t-wrap-line">Flexes are distributed so that the distance between any two adjacent elements, as well as before the first and after the last, is the same.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>d-flex-y-start</b></td>
<td class="t-wrap-line">Flexes are aligned at the beginning of the transverse axis of the container.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>d-flex-y-end</b></td>
<td class="t-wrap-line">The flexes are aligned at the end of the transverse axis of the container.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>d-flex-y-center</b></td>
<td class="t-wrap-line">Flexes are aligned along the transverse axis.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>d-flex-y-baseline</b></td>
<td class="t-wrap-line">Flexes are aligned to their baseline.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>d-flex-y-stretch</b></td>
<td class="t-wrap-line">Flexes are stretched in such a way as to occupy all the available space of the container.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>d-flex-self-start</b></td>
<td class="t-wrap-line">The element is aligned at the origin of the container's transverse axis.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>d-flex-self-end</b></td>
<td class="t-wrap-line">The element is aligned at the end of the container's transverse axis.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>d-flex-self-center</b></td>
<td class="t-wrap-line">The element is aligned to the centerline on the cross axis.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>d-flex-self-baseline</b></td>
<td class="t-wrap-line">The element is aligned to the text baseline.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>d-flex-self-stretch</b></td>
<td class="t-wrap-line">The element is stretched in such a way as to occupy all the free space of the container along the transverse axis.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>d-flex-content-start</b></td>
<td class="t-wrap-line">The lines are located at the beginning of the transverse axis. Each next line is flush with the previous one.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>d-flex-content-end</b></td>
<td class="t-wrap-line">The lines are located starting from the end of the transverse axis. Each previous line is flush with the next.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>d-flex-content-center</b></td>
<td class="t-wrap-line">The lines are located in the center of the container.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>d-flex-content-stretch</b></td>
<td class="t-wrap-line">The lines stretch evenly to fill the available space.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>d-flex-content-space-between</b></td>
<td class="t-wrap-line">The lines are evenly distributed in the container and the distance between them is the same.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>d-flex-content-space-around</b></td>
<td class="t-wrap-line">The lines are evenly spaced so that the space between two adjacent lines is the same. The empty space before the first line and after the last line is equal to half the space between two adjacent lines.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>d-flex-content-space-evenly</b></td>
<td class="t-wrap-line">The lines are distributed evenly. The white space before the first line and after the last line is the same width as the other lines.</td></tr></table>
<div class="demo-end">&nbsp;</div>
`,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class StyleLayout {
  
}