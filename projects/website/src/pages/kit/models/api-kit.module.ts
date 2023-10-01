import { NgModule } from '@angular/core';
import { KitModule } from '../../../../../kit/src/lib/kit.module';
import { MenuvBook } from './menuv';
import { ModalDialogBook } from './modal-dialog';
import { RoutesBook } from './routes';
import { TabBook } from './tab';
import { TagBook } from './tag';

@NgModule({
  declarations: [
    TabBook,
    ModalDialogBook,
    TagBook,
    MenuvBook,
    RoutesBook,
  ],
  imports: [
    KitModule,
  ],
})
export class ApiKitModule { }
