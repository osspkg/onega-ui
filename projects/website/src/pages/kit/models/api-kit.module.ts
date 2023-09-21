import { NgModule } from '@angular/core';
import { CoreModule } from '../../../../../core/src/lib/core.module';
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
    CoreModule,
  ],
})
export class ApiKitModule { }
