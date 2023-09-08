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
<textarea></textarea>
<select>
    <option>1</option>
</select>
  `;

  demo = `
  <div class="box">
    Input:
    <input type="text">
  </div>
  <div class="box">
    File:
    <input type="file">
  </div>
  <div class="box">
    Textarea:
    <textarea></textarea>
  </div>
  <div class="box">
    Select:
    <select>
        <option>demo</option>
    </select>
  </div>
  `;
}
