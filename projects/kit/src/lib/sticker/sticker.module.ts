import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StickerComponent } from './sticker.component';

@NgModule({
  declarations: [
    StickerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[
    StickerComponent,
  ],
})
export class StickerModule { }
