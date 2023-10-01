import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TagComponent } from './tag.component';

@NgModule({
  declarations: [
    TagComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    TagComponent,
  ],
})
export class TagModule { }
