import { Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'style-typography',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false,
  template: `
<h4 class="bq bq-warning demo-name">Font Size</h4>
<p class="demo-desc">Defines the font size of an element.</p>
<div class="demo-view w-full">
  <div class="d-block">
    <div class="f-size-xs">f-size-xs</div>
    <div class="f-size-sm">f-size-sm</div>
    <div class="f-size-md">f-size-md</div>
    <div class="f-size-lg">f-size-lg</div>
    <div class="f-size-xl">f-size-xl</div>
    <div class="f-size-2xl">f-size-2xl</div>
    <div class="f-size-3xl">f-size-3xl</div>
    <div class="f-size-4xl">f-size-4xl</div>
    <div class="f-size-5xl">f-size-5xl</div>
    <div class="f-size-6xl">f-size-6xl</div>
    <div class="f-size-7xl">f-size-7xl</div>
    <div class="f-size-8xl">f-size-8xl</div>
    <div class="f-size-9xl">f-size-9xl</div>
  </div></div>
<pre class="demo-html w-full">
  &lt;div class="d-block"&gt;
    &lt;div class="f-size-xs"&gt;f-size-xs&lt;/div&gt;
    &lt;div class="f-size-sm"&gt;f-size-sm&lt;/div&gt;
    &lt;div class="f-size-md"&gt;f-size-md&lt;/div&gt;
    &lt;div class="f-size-lg"&gt;f-size-lg&lt;/div&gt;
    &lt;div class="f-size-xl"&gt;f-size-xl&lt;/div&gt;
    &lt;div class="f-size-2xl"&gt;f-size-2xl&lt;/div&gt;
    &lt;div class="f-size-3xl"&gt;f-size-3xl&lt;/div&gt;
    &lt;div class="f-size-4xl"&gt;f-size-4xl&lt;/div&gt;
    &lt;div class="f-size-5xl"&gt;f-size-5xl&lt;/div&gt;
    &lt;div class="f-size-6xl"&gt;f-size-6xl&lt;/div&gt;
    &lt;div class="f-size-7xl"&gt;f-size-7xl&lt;/div&gt;
    &lt;div class="f-size-8xl"&gt;f-size-8xl&lt;/div&gt;
    &lt;div class="f-size-9xl"&gt;f-size-9xl&lt;/div&gt;
  &lt;/div&gt;</pre>
<table class="demo-attr">
<tr><td class="t-wrap-line" style="width: 30%;"><b>f-size-xs, f-size-sm, f-size-md, f-size-lg, f-size-xl, f-size-2xl, f-size-3xl, f-size-4xl, f-size-5xl, f-size-6xl, f-size-7xl, f-size-8xl, f-size-9xl</b></td>
<td class="t-wrap-line">Front size.</td></tr></table>
<div class="demo-end">&nbsp;</div>
<h4 class="bq bq-warning demo-name">Font Weight</h4>
<p class="demo-desc">Specifies the font weight of an element.</p>
<div class="demo-view w-full">
  <div class="f-weight-light">f-weight-light</div>
  <div class="f-weight-normal">f-weight-normal</div>
  <div class="f-weight-medium">f-weight-medium</div>
  <div class="f-weight-semibold">f-weight-semibold</div>
  <div class="f-weight-bold">f-weight-bold</div></div>
<pre class="demo-html w-full">
  &lt;div class="f-weight-light"&gt;f-weight-light&lt;/div&gt;
  &lt;div class="f-weight-normal"&gt;f-weight-normal&lt;/div&gt;
  &lt;div class="f-weight-medium"&gt;f-weight-medium&lt;/div&gt;
  &lt;div class="f-weight-semibold"&gt;f-weight-semibold&lt;/div&gt;
  &lt;div class="f-weight-bold"&gt;f-weight-bold&lt;/div&gt;</pre>
<table class="demo-attr">
<tr><td class="t-wrap-line" style="width: 30%;"><b>f-weight-light, f-weight-normal, f-weight-medium, f-weight-semibold, f-weight-bold</b></td>
<td class="t-wrap-line">Font Weight.</td></tr></table>
<div class="demo-end">&nbsp;</div>
<h4 class="bq bq-warning demo-name">Font Style</h4>
<p class="demo-desc">Specifies the font style of an element.</p>
<div class="demo-view w-full">
  <div class="gap-4 d-flex d-flex-wrap d-flex-col">
    <div class="f-style-italic">Difficult waffles 0O 3.14</div>
    <div class="f-style-small-caps">Difficult waffles 0O 3.14</div>
    <div class="f-style-caps">Difficult waffles 0O 3.14</div>
    <div class="f-style-unicase">Difficult waffles 0O 3.14</div>
    <div class="f-style-sub">Difficult waffles 0O 3.14</div>
    <div class="f-style-super">Difficult waffles 0O 3.14</div>
    <div class="f-style-line">Difficult waffles 0O 3.14</div>
    <div class="f-style-2line">Difficult waffles 0O 3.14</div>
    <div class="f-style-wavy">Difficult waffles 0O 3.14</div>
    <div class="f-style-strike">Difficult waffles 0O 3.14</div>
    <div class="f-style-vertical h-5rem">Difficult waffles 0O 3.14</div>
  </div></div>
<pre class="demo-html w-full">
  &lt;div class="gap-4 d-flex d-flex-wrap d-flex-col"&gt;
    &lt;div class="f-style-italic"&gt;Difficult waffles 0O 3.14&lt;/div&gt;
    &lt;div class="f-style-small-caps"&gt;Difficult waffles 0O 3.14&lt;/div&gt;
    &lt;div class="f-style-caps"&gt;Difficult waffles 0O 3.14&lt;/div&gt;
    &lt;div class="f-style-unicase"&gt;Difficult waffles 0O 3.14&lt;/div&gt;
    &lt;div class="f-style-sub"&gt;Difficult waffles 0O 3.14&lt;/div&gt;
    &lt;div class="f-style-super"&gt;Difficult waffles 0O 3.14&lt;/div&gt;
    &lt;div class="f-style-line"&gt;Difficult waffles 0O 3.14&lt;/div&gt;
    &lt;div class="f-style-2line"&gt;Difficult waffles 0O 3.14&lt;/div&gt;
    &lt;div class="f-style-wavy"&gt;Difficult waffles 0O 3.14&lt;/div&gt;
    &lt;div class="f-style-strike"&gt;Difficult waffles 0O 3.14&lt;/div&gt;
    &lt;div class="f-style-vertical h-5rem"&gt;Difficult waffles 0O 3.14&lt;/div&gt;
  &lt;/div&gt;</pre>
<table class="demo-attr">
<tr><td class="t-wrap-line" style="width: 30%;"><b>f-style-italic</b></td>
<td class="t-wrap-line">Selects a font that is classified as italic. If no italic version of the face is available, one classified as oblique is used instead. If neither is available, the style is artificially simulated.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>f-style-small-caps</b></td>
<td class="t-wrap-line">Enables display of small capitals (OpenType feature: smcp). Small-caps glyphs typically use the form of uppercase letters but are displayed using the same size as lowercase letters.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>f-style-caps</b></td>
<td class="t-wrap-line">Enables display of small capitals for both upper and lowercase letters (OpenType features: c2sc, smcp).</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>f-style-unicase</b></td>
<td class="t-wrap-line">Enables display of mixture of small capitals for uppercase letters with normal lowercase letters (OpenType feature: unic).</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>f-style-sub</b></td>
<td class="t-wrap-line">Activates subscript alternate glyphs. If, in a given run, one such glyph is not available for a character, all the characters in the run are rendered using synthesized glyphs.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>f-style-super</b></td>
<td class="t-wrap-line">Activates superscript alternate glyphs. If, in a given run, one such glyph is not available for a character, all the characters in the run are rendered using synthesized glyphs.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>f-style-strike</b></td>
<td class="t-wrap-line">Strikethrough text.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>f-style-line</b></td>
<td class="t-wrap-line">Underline text from the bottom.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>f-style-2line</b></td>
<td class="t-wrap-line">Underlining text at the bottom and top.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>f-style-wavy</b></td>
<td class="t-wrap-line">Underline text at the bottom in a wave.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>f-style-vertical</b></td>
<td class="t-wrap-line">Attempts to typeset all consecutive characters within the box horizontally, such that they take up the space of a single character within the vertical line of the box.</td></tr></table>
<div class="demo-end">&nbsp;</div>
<h4 class="bq bq-warning demo-name">Text Color</h4>
<p class="demo-desc">A wide range of color palettes for the text of an element.</p>
<div class="demo-view w-full">
  <div class="t-color-light">t-color-light</div>
  <div class="t-color-secondary">t-color-secondary</div>
  <div class="t-color-warning">t-color-warning</div>
  <div class="t-color-danger">t-color-danger</div>
  <div class="t-color-success">t-color-success</div>
  <div class="t-color-info">t-color-info</div>
  <div class="t-color-primary">t-color-primary</div>
  <div class="t-color-dark">t-color-dark</div></div>
<pre class="demo-html w-full">
  &lt;div class="t-color-light"&gt;t-color-light&lt;/div&gt;
  &lt;div class="t-color-secondary"&gt;t-color-secondary&lt;/div&gt;
  &lt;div class="t-color-warning"&gt;t-color-warning&lt;/div&gt;
  &lt;div class="t-color-danger"&gt;t-color-danger&lt;/div&gt;
  &lt;div class="t-color-success"&gt;t-color-success&lt;/div&gt;
  &lt;div class="t-color-info"&gt;t-color-info&lt;/div&gt;
  &lt;div class="t-color-primary"&gt;t-color-primary&lt;/div&gt;
  &lt;div class="t-color-dark"&gt;t-color-dark&lt;/div&gt;</pre>
<table class="demo-attr">
<tr><td class="t-wrap-line" style="width: 30%;"><b>t-color-light, t-color-secondary, t-color-warning, t-color-danger, t-color-success, t-color-info, t-color-primary, t-color-dark</b></td>
<td class="t-wrap-line">Text Color.</td></tr></table>
<div class="demo-end">&nbsp;</div>
<h4 class="bq bq-warning demo-name">Text Align</h4>
<p class="demo-desc">Specifies the alignment of the text inside an element.</p>
<div class="demo-view w-full">
  <div class="d-flex d-flex-wrap">
    <div class="t-align-center w-50 x p-2">t-align-center: text text text text text text text text text</div>
    <div class="t-align-justify w-50 x p-2">t-align-justify: text text text text text text text text text</div>
    <div class="t-align-end w-50 x p-2">t-align-end: text text text text text text text text text</div>
    <div class="t-align-start w-50 x p-2">t-align-start: text text text text text text text text text</div>
  </div></div>
<pre class="demo-html w-full">
  &lt;div class="d-flex d-flex-wrap"&gt;
    &lt;div class="t-align-center w-50 x p-2"&gt;t-align-center: text text text text text text text text text&lt;/div&gt;
    &lt;div class="t-align-justify w-50 x p-2"&gt;t-align-justify: text text text text text text text text text&lt;/div&gt;
    &lt;div class="t-align-end w-50 x p-2"&gt;t-align-end: text text text text text text text text text&lt;/div&gt;
    &lt;div class="t-align-start w-50 x p-2"&gt;t-align-start: text text text text text text text text text&lt;/div&gt;
  &lt;/div&gt;</pre>
<table class="demo-attr">
<tr><td class="t-wrap-line" style="width: 30%;"><b>t-align-center</b></td>
<td class="t-wrap-line">The inline contents are centered within the line box.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>t-align-justify</b></td>
<td class="t-wrap-line">The inline contents are justified. Text should be spaced to line up its left and right edges to the left and right edges of the line box, except for the last line.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>t-align-end</b></td>
<td class="t-wrap-line">The same as right if direction is left-to-right and left if direction is right-to-left.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>t-align-start</b></td>
<td class="t-wrap-line">The same as left if direction is left-to-right and right if direction is right-to-left.</td></tr></table>
<div class="demo-end">&nbsp;</div>
<h4 class="bq bq-warning demo-name">Text Overflow</h4>
<p class="demo-desc">Defines how the overflowed content gets displayed.</p>
<div class="demo-view w-full">
  <div class="t-overflow-ellipsis w-50">t-overflow-ellipsis: text text text text text text text text text</div>
  <div class="t-overflow-clip w-50">t-overflow-clip: text text text text text text text text text</div></div>
<pre class="demo-html w-full">
  &lt;div class="t-overflow-ellipsis w-50"&gt;t-overflow-ellipsis: text text text text text text text text text&lt;/div&gt;
  &lt;div class="t-overflow-clip w-50"&gt;t-overflow-clip: text text text text text text text text text&lt;/div&gt;</pre>
<table class="demo-attr">
<tr><td class="t-wrap-line" style="width: 30%;"><b>t-overflow-ellipsis</b></td>
<td class="t-wrap-line">Will display an ellipsis ('…') to indicate trimmed text. An ellipsis appears inside the content area to reduce the amount of text displayed. If there is not enough space to display the ellipsis, it is cut off.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>t-overflow-clip</b></td>
<td class="t-wrap-line">Trim text at the edge of the content area, so truncation may occur in the middle of a character.</td></tr></table>
<div class="demo-end">&nbsp;</div>
<h4 class="bq bq-warning demo-name">Text Wrap</h4>
<p class="demo-desc">Defines whether the word should wrap based on white space or not.</p>
<div class="demo-view w-full">
  <div class="d-flex d-flex-wrap">
    <div class="t-wrap box w-45">
    t-wrap: texttext texttext texttext texttext texttext texttext texttext texttext
    t-wrap: texttext texttext texttext texttext texttext texttext texttext texttext
    </div>
    <div class="t-wrap-line box w-45">
    t-wrap: texttext texttext texttext texttext texttext texttext texttext texttext
    t-wrap: texttext texttext texttext texttext texttext texttext texttext texttext
    </div>
    <div class="t-wrap-no box w-45">
    t-wrap: texttext texttext texttext texttext texttext texttext texttext texttext
    t-wrap: texttext texttext texttext texttext texttext texttext texttext texttext
    </div>
  </div></div>
<pre class="demo-html w-full">
  &lt;div class="d-flex d-flex-wrap"&gt;
    &lt;div class="t-wrap box w-45"&gt;
    t-wrap: texttext texttext texttext texttext texttext texttext texttext texttext
    t-wrap: texttext texttext texttext texttext texttext texttext texttext texttext
    &lt;/div&gt;
    &lt;div class="t-wrap-line box w-45"&gt;
    t-wrap: texttext texttext texttext texttext texttext texttext texttext texttext
    t-wrap: texttext texttext texttext texttext texttext texttext texttext texttext
    &lt;/div&gt;
    &lt;div class="t-wrap-no box w-45"&gt;
    t-wrap: texttext texttext texttext texttext texttext texttext texttext texttext
    t-wrap: texttext texttext texttext texttext texttext texttext texttext texttext
    &lt;/div&gt;
  &lt;/div&gt;</pre>
<table class="demo-attr">
<tr><td class="t-wrap-line" style="width: 30%;"><b>t-wrap</b></td>
<td class="t-wrap-line">Sequences of white space are preserved. Lines are broken at newline characters, at <br>, and as necessary to fill line boxes.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>t-wrap-no</b></td>
<td class="t-wrap-line">Collapses white space as for normal, but suppresses line breaks (text wrapping) within the source.</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>t-wrap-line</b></td>
<td class="t-wrap-line">Sequences of white space are collapsed. Lines are broken at newline characters, at <br>, and as necessary to fill line boxes.</td></tr></table>
<div class="demo-end">&nbsp;</div>
`,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class StyleTypography {
  
}