import { NgModule } from '@angular/core';
import { KitModule } from '../../../../../kit/src/lib/kit.module';
import { TabBook } from './tab';

@NgModule({
  declarations: [
    TabBook,
  ],
  imports: [
    KitModule,
  ],
})
export class ApiKitModule { }
