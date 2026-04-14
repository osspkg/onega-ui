import { NgModule } from '@angular/core';
import { InputModule } from './input';
import { MenuvModule } from './menuv';
import { StickerModule } from './sticker';
import { TabModule } from './tab';
import { TagModule } from './tag';

@NgModule({
  exports:[
    TabModule,
    TagModule,
    MenuvModule,
    StickerModule,
    InputModule,
  ],
})
export class KitModule { }
