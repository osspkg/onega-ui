import { NgModule } from '@angular/core';
import { KitModule } from '../../../../../kit/src/lib/kit.module';
import { ModalDialogBook } from './modal-dialog';
import { TabBook } from './tab';

@NgModule({
  declarations: [
    TabBook,
    ModalDialogBook,
  ],
  imports: [
    KitModule,
  ],
})
export class ApiKitModule { }
