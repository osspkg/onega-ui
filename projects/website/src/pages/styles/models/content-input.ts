import { Api } from './_api';

export class ContentInputBook implements Api {
  link = 'Content Input';
  attributes = {
    'input' : 'base tag',
    'select' : 'base tag',
    'textarea' : 'base tag',
  };

  example = `
<input type="text">

<input type="checkbox" checked="checked" id="checkbox1">
<label for="checkbox1">checked</label>

<textarea></textarea>

<select>
    <option>1</option>
</select>
  `;

  demo = `
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
    <div>
        <input type="checkbox" checked="checked" id="demo-check-1">
        <label for="demo-check-1">checked</label>

        <input type="checkbox" id="demo-check-2">
        <label for="demo-check-2">not checked</label>

        <input type="checkbox" id="demo-check-2" checked="checked" disabled>
        <label for="demo-check-2">disabled</label>
    </div>

  </div>
  `;
}
