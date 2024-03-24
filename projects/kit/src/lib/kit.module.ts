import { NgModule } from '@angular/core';
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
  ],
})
export class KitModule { }
