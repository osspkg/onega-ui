import { Component } from '@angular/core';
import { Api, KeyValue } from './_api';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-ContentInputBook-book',
  template: `
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

    </div>
  `,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class ContentInputBook implements Api {

  attributes : KeyValue[] = [
    { key:'input', value:'base tag' },
    { key:'select', value:'base tag' },
    { key:'textarea', value:'base tag' },
  ];

  exampleHTML = `
<input type="text">

<input type="checkbox" checked="checked" id="checkbox1">
<label for="checkbox1">checked</label>

<textarea></textarea>

<select>
    <option>1</option>
</select>
  `;

}
