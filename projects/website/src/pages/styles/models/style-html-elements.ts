import { Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'style-html-elements',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false,
  template: `
<h4 class="bq bq-warning demo-name">Cursor</h4>
<p class="demo-desc"></p>
<div class="demo-view w-full">
  <div class="d-flex d-flex-wrap gap-2">
    <button class="c-default">c-default</button>
    <button class="c-click">c-click</button>
    <button class="c-help">c-help</button>
    <button class="c-wait">c-wait</button>
    <button class="c-crosshair">c-crosshair</button>
    <button class="c-not-allowed">c-not-allowed</button>
    <button class="c-zoom-in">c-zoom-in</button>
    <button class="c-zoom-out">c-zoom-out</button>
    <button class="c-grab">c-grab</button>
    <button class="c-grabbing">c-grabbing</button>
    <button class="c-no-drop">c-no-drop</button>
    <button class="c-text">c-text</button>
    <button class="c-copy">c-copy</button>
    <button class="c-move">c-move</button>
  </div></div>
<pre class="demo-html w-full">
  &lt;div class="d-flex d-flex-wrap gap-2"&gt;
    &lt;button class="c-default"&gt;c-default&lt;/button&gt;
    &lt;button class="c-click"&gt;c-click&lt;/button&gt;
    &lt;button class="c-help"&gt;c-help&lt;/button&gt;
    &lt;button class="c-wait"&gt;c-wait&lt;/button&gt;
    &lt;button class="c-crosshair"&gt;c-crosshair&lt;/button&gt;
    &lt;button class="c-not-allowed"&gt;c-not-allowed&lt;/button&gt;
    &lt;button class="c-zoom-in"&gt;c-zoom-in&lt;/button&gt;
    &lt;button class="c-zoom-out"&gt;c-zoom-out&lt;/button&gt;
    &lt;button class="c-grab"&gt;c-grab&lt;/button&gt;
    &lt;button class="c-grabbing"&gt;c-grabbing&lt;/button&gt;
    &lt;button class="c-no-drop"&gt;c-no-drop&lt;/button&gt;
    &lt;button class="c-text"&gt;c-text&lt;/button&gt;
    &lt;button class="c-copy"&gt;c-copy&lt;/button&gt;
    &lt;button class="c-move"&gt;c-move&lt;/button&gt;
  &lt;/div&gt;</pre>
<table class="demo-attr">
<tr><td class="t-wrap-line" style="width: 30%;"><b>Cursors</b></td>
<td class="t-wrap-line">c-default, c-click, c-help, c-wait, c-crosshair, c-not-allowed, c-zoom-in, c-zoom-out, c-grab, c-grabbing, c-no-drop, c-text, c-copy, c-move</td></tr></table>
<div class="demo-end">&nbsp;</div>
<h4 class="bq bq-warning demo-name">No Link</h4>
<p class="demo-desc"></p>
<div class="demo-view w-full">
  <div class="d-flex d-flex-wrap gap-2">
    <a href="javascript:alert('defautl tag A')">default</a>
    <a class="no-link" href="javascript:alert('class no-link')">no-link</a>
  </div></div>
<pre class="demo-html w-full">
  &lt;div class="d-flex d-flex-wrap gap-2"&gt;
    &lt;a href="javascript:alert('defautl tag A')"&gt;default&lt;/a&gt;
    &lt;a class="no-link" href="javascript:alert('class no-link')"&gt;no-link&lt;/a&gt;
  &lt;/div&gt;</pre>
<table class="demo-attr">
<tr><td class="t-wrap-line" style="width: 30%;"><b>no-link</b></td>
<td class="t-wrap-line">Disable linking for tag A</td></tr></table>
<div class="demo-end">&nbsp;</div>
<h4 class="bq bq-warning demo-name">Article</h4>
<p class="demo-desc"></p>
<div class="demo-view w-full">
  <div class="article article-x3">
    <h3>header3 header3 header3 header3</h3>
    <p class="letter-x2">Text text text text text text text text text text text text text text text text text text
      text text text </p>
    <p class="letter-x3">text text text text text text text text text text text text text text text text text text
      text text text </p>
    <p class="letter-x4">text text text text text text text text text text text text text text text text text text
      text text text </p>
    <p class="letter-x5">text text text text text text text text text text text text text text text text text text
      text text text </p>
    <h4>header4 header4 header4 header4</h4>
    <p class="letter-x2">text text text text text text text text text text text text text text text text text text text text text </p>
    <p class="letter-x2">text text text text text text text text text text text text text text text text text text text text text </p>
    <p class="letter-x2">text text text text text text text text text text text text text text text text text text text text text </p>
    <p class="letter-x2">text text text text text text text text text text text text text text text text text text text text text </p>
    <p class="letter-x2">text text text text text text text text text text text text text text text text text text text text text </p>
    <p class="letter-x2">text text text text text text text text text text text text text text text text text text text text text </p>
  </div></div>
<pre class="demo-html w-full">
  &lt;div class="article article-x3"&gt;
    &lt;h3&gt;header3 header3 header3 header3&lt;/h3&gt;
    &lt;p class="letter-x2"&gt;Text text text text text text text text text text text text text text text text text text
      text text text &lt;/p&gt;
    &lt;p class="letter-x3"&gt;text text text text text text text text text text text text text text text text text text
      text text text &lt;/p&gt;
    &lt;p class="letter-x4"&gt;text text text text text text text text text text text text text text text text text text
      text text text &lt;/p&gt;
    &lt;p class="letter-x5"&gt;text text text text text text text text text text text text text text text text text text
      text text text &lt;/p&gt;
    &lt;h4&gt;header4 header4 header4 header4&lt;/h4&gt;
    &lt;p class="letter-x2"&gt;text text text text text text text text text text text text text text text text text text text text text &lt;/p&gt;
    &lt;p class="letter-x2"&gt;text text text text text text text text text text text text text text text text text text text text text &lt;/p&gt;
    &lt;p class="letter-x2"&gt;text text text text text text text text text text text text text text text text text text text text text &lt;/p&gt;
    &lt;p class="letter-x2"&gt;text text text text text text text text text text text text text text text text text text text text text &lt;/p&gt;
    &lt;p class="letter-x2"&gt;text text text text text text text text text text text text text text text text text text text text text &lt;/p&gt;
    &lt;p class="letter-x2"&gt;text text text text text text text text text text text text text text text text text text text text text &lt;/p&gt;
  &lt;/div&gt;</pre>
<table class="demo-attr">
<tr><td class="t-wrap-line" style="width: 30%;"><b>article</b></td>
<td class="t-wrap-line">Base class</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>article-x2...6</b></td>
<td class="t-wrap-line">Count column</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>letter-x2...6</b></td>
<td class="t-wrap-line">Cap size</td></tr></table>
<div class="demo-end">&nbsp;</div>
<h4 class="bq bq-warning demo-name">Image Ratio</h4>
<p class="demo-desc"></p>
<div class="demo-view w-full">
  <img alt="" src="/assets/icons/apple-icon-114x114.png" class="w-10rem h-5rem" />
  <img alt="" src="/assets/icons/apple-icon-114x114.png" class="ratio w-10rem h-5rem" />
  <img alt="" src="/assets/icons/apple-icon-114x114.png" class="w-5rem h-10rem" />
  <img alt="" src="/assets/icons/apple-icon-114x114.png" class="ratio w-5rem h-10rem" /></div>
<pre class="demo-html w-full">
  &lt;img alt="" src="/assets/icons/apple-icon-114x114.png" class="w-10rem h-5rem" /&gt;
  &lt;img alt="" src="/assets/icons/apple-icon-114x114.png" class="ratio w-10rem h-5rem" /&gt;
  &lt;img alt="" src="/assets/icons/apple-icon-114x114.png" class="w-5rem h-10rem" /&gt;
  &lt;img alt="" src="/assets/icons/apple-icon-114x114.png" class="ratio w-5rem h-10rem" /&gt;</pre>
<table class="demo-attr">
<tr><td class="t-wrap-line" style="width: 30%;"><b>ratio</b></td>
<td class="t-wrap-line">Enables a 1:1 aspect ratio with the image positioned in the center along the minimum side of the container.</td></tr></table>
<div class="demo-end">&nbsp;</div>
<h4 class="bq bq-warning demo-name">Button</h4>
<p class="demo-desc"></p>
<div class="demo-view w-full">
  <div class="d-flex d-flex-wrap gap-2">
    <a class="btn" href="/" target="_blank">btn</a>
    <button class="btn">btn</button>
    <button class="btn" disabled>btn with disabled</button>
  </div>
  <div class="d-flex d-flex-wrap gap-2 mt-2">
    <a class="btn btn-light">btn btn-light</a>
    <a class="btn btn-secondary">btn btn-secondary</a>
    <a class="btn btn-warning">btn btn-warning</a>
    <a class="btn btn-danger">btn btn-danger</a>
    <a class="btn btn-success">btn btn-success</a>
    <a class="btn btn-info">btn btn-info</a>
    <a class="btn btn-primary">btn btn-primary</a>
    <a class="btn btn-dark">btn btn-dark</a>
  </div>
  <div class="d-flex d-flex-wrap gap-2 mt-2 d-flex-y-baseline">
    <a class="btn btn-info btn-circle btn-xs"><i class="ong ong-home"></i></a>
    <a class="btn btn-info btn-circle btn-xs">5%</a>
    <a class="btn btn-info btn-circle btn-sm"><i class="ong ong-home"></i></a>
    <a class="btn btn-info btn-circle btn-sm">5%</a>
    <a class="btn btn-info btn-circle btn-md"><i class="ong ong-home"></i></a>
    <a class="btn btn-info btn-circle btn-md">5%</a>
    <a class="btn btn-info btn-circle btn-lg"><i class="ong ong-home"></i></a>
    <a class="btn btn-info btn-circle btn-lg">5%</a>
    <a class="btn btn-info btn-circle btn-xl"><i class="ong ong-home"></i></a>
    <a class="btn btn-info btn-circle btn-xl">5%</a>
    <a class="btn btn-info btn-circle btn-2xl"><i class="ong ong-home"></i></a>
    <a class="btn btn-info btn-circle btn-2xl">5%</a>
  </div></div>
<pre class="demo-html w-full">
  &lt;div class="d-flex d-flex-wrap gap-2"&gt;
    &lt;a class="btn" href="/" target="_blank"&gt;btn&lt;/a&gt;
    &lt;button class="btn"&gt;btn&lt;/button&gt;
    &lt;button class="btn" disabled&gt;btn with disabled&lt;/button&gt;
  &lt;/div&gt;
  &lt;div class="d-flex d-flex-wrap gap-2 mt-2"&gt;
    &lt;a class="btn btn-light"&gt;btn btn-light&lt;/a&gt;
    &lt;a class="btn btn-secondary"&gt;btn btn-secondary&lt;/a&gt;
    &lt;a class="btn btn-warning"&gt;btn btn-warning&lt;/a&gt;
    &lt;a class="btn btn-danger"&gt;btn btn-danger&lt;/a&gt;
    &lt;a class="btn btn-success"&gt;btn btn-success&lt;/a&gt;
    &lt;a class="btn btn-info"&gt;btn btn-info&lt;/a&gt;
    &lt;a class="btn btn-primary"&gt;btn btn-primary&lt;/a&gt;
    &lt;a class="btn btn-dark"&gt;btn btn-dark&lt;/a&gt;
  &lt;/div&gt;
  &lt;div class="d-flex d-flex-wrap gap-2 mt-2 d-flex-y-baseline"&gt;
    &lt;a class="btn btn-info btn-circle btn-xs"&gt;&lt;i class="ong ong-home"&gt;&lt;/i&gt;&lt;/a&gt;
    &lt;a class="btn btn-info btn-circle btn-xs"&gt;5%&lt;/a&gt;
    &lt;a class="btn btn-info btn-circle btn-sm"&gt;&lt;i class="ong ong-home"&gt;&lt;/i&gt;&lt;/a&gt;
    &lt;a class="btn btn-info btn-circle btn-sm"&gt;5%&lt;/a&gt;
    &lt;a class="btn btn-info btn-circle btn-md"&gt;&lt;i class="ong ong-home"&gt;&lt;/i&gt;&lt;/a&gt;
    &lt;a class="btn btn-info btn-circle btn-md"&gt;5%&lt;/a&gt;
    &lt;a class="btn btn-info btn-circle btn-lg"&gt;&lt;i class="ong ong-home"&gt;&lt;/i&gt;&lt;/a&gt;
    &lt;a class="btn btn-info btn-circle btn-lg"&gt;5%&lt;/a&gt;
    &lt;a class="btn btn-info btn-circle btn-xl"&gt;&lt;i class="ong ong-home"&gt;&lt;/i&gt;&lt;/a&gt;
    &lt;a class="btn btn-info btn-circle btn-xl"&gt;5%&lt;/a&gt;
    &lt;a class="btn btn-info btn-circle btn-2xl"&gt;&lt;i class="ong ong-home"&gt;&lt;/i&gt;&lt;/a&gt;
    &lt;a class="btn btn-info btn-circle btn-2xl"&gt;5%&lt;/a&gt;
  &lt;/div&gt;</pre>
<table class="demo-attr">
<tr><td class="t-wrap-line" style="width: 30%;"><b>btn</b></td>
<td class="t-wrap-line">Base button</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>btn-circle</b></td>
<td class="t-wrap-line">Circle button</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>btn-light, btn-secondary, btn-warning, btn-danger, btn-success, btn-info, btn-primary, btn-dark</b></td>
<td class="t-wrap-line">Color of button</td></tr><tr><td class="t-wrap-line" style="width: 30%;"><b>btn-xs, btn-sm, btn-md, btn-lg, btn-xl, btn-2xl, btn-3xl, btn-4xl, btn-5xl, btn-6xl, btn-7xl, btn-8xl, btn-9xl</b></td>
<td class="t-wrap-line">Size of button</td></tr></table>
<div class="demo-end">&nbsp;</div>
<h4 class="bq bq-warning demo-name">Heading</h4>
<p class="demo-desc"></p>
<div class="demo-view w-full">
  <h1>The HTML Section Heading elements</h1>
  <h2>The HTML Section Heading elements</h2>
  <h3>The HTML Section Heading elements</h3>
  <h4>The HTML Section Heading elements</h4>
  <h5>The HTML Section Heading elements</h5>
  <h6>The HTML Section Heading elements</h6></div>
<pre class="demo-html w-full">
  &lt;h1&gt;The HTML Section Heading elements&lt;/h1&gt;
  &lt;h2&gt;The HTML Section Heading elements&lt;/h2&gt;
  &lt;h3&gt;The HTML Section Heading elements&lt;/h3&gt;
  &lt;h4&gt;The HTML Section Heading elements&lt;/h4&gt;
  &lt;h5&gt;The HTML Section Heading elements&lt;/h5&gt;
  &lt;h6&gt;The HTML Section Heading elements&lt;/h6&gt;</pre>
<table class="demo-attr">
<tr><td class="t-wrap-line" style="width: 30%;"><b>h1...6</b></td>
<td class="t-wrap-line">Elements represent six levels of section headings. h1 is the highest section level and h6 is the lowest.</td></tr></table>
<div class="demo-end">&nbsp;</div>
<h4 class="bq bq-warning demo-name">Table</h4>
<p class="demo-desc"></p>
<div class="demo-view w-full">
  <table>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>City</th>
    </tr>

    <tr>
      <td>1</td>
      <td>Harly</td>
      <td>SPb</td>
    </tr>

    <tr>
      <td>2</td>
      <td>Joy</td>
      <td>SPb</td>
    </tr>
  </table></div>
<pre class="demo-html w-full">
  &lt;table&gt;
    &lt;tr&gt;
      &lt;th&gt;#&lt;/th&gt;
      &lt;th&gt;Name&lt;/th&gt;
      &lt;th&gt;City&lt;/th&gt;
    &lt;/tr&gt;

    &lt;tr&gt;
      &lt;td&gt;1&lt;/td&gt;
      &lt;td&gt;Harly&lt;/td&gt;
      &lt;td&gt;SPb&lt;/td&gt;
    &lt;/tr&gt;

    &lt;tr&gt;
      &lt;td&gt;2&lt;/td&gt;
      &lt;td&gt;Joy&lt;/td&gt;
      &lt;td&gt;SPb&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/table&gt;</pre>
<div class="demo-end">&nbsp;</div>
<h4 class="bq bq-warning demo-name">Input</h4>
<p class="demo-desc"></p>
<div class="demo-view w-full">
<div class="box">
    Input:
    <input type="text" class="full-width">
  </div>
  <div class="box">
    File:
    <input type="file" class="full-width">
  </div>
  <div class="box">
    Textarea:
    <textarea class="full-width"></textarea>
  </div>
  <div class="box">
    Select:
    <select class="full-width">
      <option>demo</option>
    </select>
  </div>
  <div class="box">
    Check:
    <div class="r">
      <div class="c4">
        <input type="checkbox" checked="checked" id="demo-check-1">
        <label for="demo-check-1">checked</label>
      </div>
      <div class="c4">
        <input type="checkbox" id="demo-check-2">
        <label for="demo-check-2">not checked</label>
      </div>
      <div class="c4">
        <input type="checkbox" id="demo-check-2" checked="checked" disabled>
        <label for="demo-check-2">disabled</label>
      </div>
    </div>
  </div></div>
<pre class="demo-html w-full">
&lt;div class="box"&gt;
    Input:
    &lt;input type="text" class="full-width"&gt;
  &lt;/div&gt;
  &lt;div class="box"&gt;
    File:
    &lt;input type="file" class="full-width"&gt;
  &lt;/div&gt;
  &lt;div class="box"&gt;
    Textarea:
    &lt;textarea class="full-width"&gt;&lt;/textarea&gt;
  &lt;/div&gt;
  &lt;div class="box"&gt;
    Select:
    &lt;select class="full-width"&gt;
      &lt;option&gt;demo&lt;/option&gt;
    &lt;/select&gt;
  &lt;/div&gt;
  &lt;div class="box"&gt;
    Check:
    &lt;div class="r"&gt;
      &lt;div class="c4"&gt;
        &lt;input type="checkbox" checked="checked" id="demo-check-1"&gt;
        &lt;label for="demo-check-1"&gt;checked&lt;/label&gt;
      &lt;/div&gt;
      &lt;div class="c4"&gt;
        &lt;input type="checkbox" id="demo-check-2"&gt;
        &lt;label for="demo-check-2"&gt;not checked&lt;/label&gt;
      &lt;/div&gt;
      &lt;div class="c4"&gt;
        &lt;input type="checkbox" id="demo-check-2" checked="checked" disabled&gt;
        &lt;label for="demo-check-2"&gt;disabled&lt;/label&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;</pre>
<div class="demo-end">&nbsp;</div>
<h4 class="bq bq-warning demo-name">Dialog</h4>
<p class="demo-desc"></p>
<div class="demo-view w-full">
Dialog:
    <button onClick="document.querySelector('#di').showModal()" class="btn">show</button>

    <dialog id="di">
      <form>
        <h1>demo dialog</h1>
        <div>
          The HTML element represents a dialog box or other interactive component, such as a dismissible alert, inspector, or subwindow.
        </div>
        <p class="mt-2">press [Esc] for exit or <button value="cancel" formmethod="dialog" class="btn">Close</button></p>
      </form>
    </dialog></div>
<pre class="demo-html w-full">
Dialog:
    &lt;button onClick="document.querySelector('#di').showModal()" class="btn"&gt;show&lt;/button&gt;

    &lt;dialog id="di"&gt;
      &lt;form&gt;
        &lt;h1&gt;demo dialog&lt;/h1&gt;
        &lt;div&gt;
          The HTML element represents a dialog box or other interactive component, such as a dismissible alert, inspector, or subwindow.
        &lt;/div&gt;
        &lt;p class="mt-2"&gt;press [Esc] for exit or &lt;button value="cancel" formmethod="dialog" class="btn"&gt;Close&lt;/button&gt;&lt;/p&gt;
      &lt;/form&gt;
    &lt;/dialog&gt;</pre>
<div class="demo-end">&nbsp;</div>
`,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class StyleHTMLElements {
  
}