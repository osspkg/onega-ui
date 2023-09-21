import { Component } from '@angular/core';
import { DialogService } from '../../../../../core/src/lib/dialog.service';
import { LicenseComponent } from '../../license/license.component';
import { Api, KeyValue } from './_api';

@Component({
  selector: 'app-modal-dialog-book',
  template: `
    <button class="btn btn-danger" (click)="open()">show license</button>
  `,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class ModalDialogBook implements Api {
  attributes: KeyValue[] = [
    {
      key: `ong-dialog
    ong-dialog-close`,
      value: 'css class for styling',
    },
    {
      key: `constructor(
    private dialog: DialogService,
  ) {}`,
      value: 'inject dialog service to component',
    },
    {
      key: 'const ref = this.dialog.open(component, options?);',
      value: `creating a component inside a dialog box, where:

      component - component class name

      options - object with @Input()/@Output fields

      ref - this is a link to the dialog box with the method close dialog
      `,
    },
  ];

  //   {
  //   'ong-dialog, ong-dialog-close' : 'css class for sterilization',
  //   'constructor( private dialog: DialogService ) {}' : 'inject dialog service to component',
  // };

  exampleTS = `
constructor(
  private dialog: DialogService,
) {}

open(): void {
  this.dialog.open(LicenseComponent, { id: 1, save:()=>{} });
}
  `;

  exampleHTML = '';

  constructor(
    private dialog: DialogService,
  ) {
  }

  open(): void {
    this.dialog.open(LicenseComponent);
  }

}
