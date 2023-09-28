import { Component } from '@angular/core';
import { Api, KeyValue } from './_api';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-DialogBook-book',
  template: `
    Dialog:
    <button onClick="document.querySelector('#di').showModal()" class="btn">show</button>

    <dialog id="di">
      <form>
        <h1>demo dialog</h1>
        <div>
          The HTML element represents a dialog box or other interactive component, such as a dismissible alert, inspector, or subwindow.
        </div>
        <p>press [Esc] for exit or <button value="cancel" formmethod="dialog" class="btn">Close</button></p>
      </form>
    </dialog>
  `,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class DialogBook implements Api {

  attributes: KeyValue[] = [
    { key:'dialog', value:'base tag' },
  ];

  exampleHTML = `
<dialog open>
    <form>
      <h1>demo dialog</h1>
      <p>press [Esc] for exit or <button value="cancel" formmethod="dialog">Close</button></p>
    </form>
</dialog>
  `;

}
