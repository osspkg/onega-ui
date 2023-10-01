import { NgModule } from '@angular/core';
import { MenuvModule } from './menuv';
import { TabModule } from './tab';
import { TagModule } from './tag';

@NgModule({
  exports:[
    TabModule,
    TagModule,
    MenuvModule,
  ],
  declarations: [
  ],
})
export class KitModule { }
