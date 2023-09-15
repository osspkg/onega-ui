import { Api } from './_api';

export class DialogBook implements Api {
  link = 'Dialog';
  attributes = {
    'dialog' : 'base tag',
  };

  example = `
<dialog open>
    <form>
      <h1>demo dialog</h1>
      <p>press [Esc] for exit or <button value="cancel" formmethod="dialog">Close</button></p>
    </form>
</dialog>
  `;

  demo = `
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
  `;
}
