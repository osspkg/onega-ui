import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HtmlTemplatePipe } from './icons/html-template.pipe';
import { IconsComponent } from './icons/icons.component';
import { TextFilterPipe } from './icons/text-filter.pipe';

@NgModule({
  declarations: [
    IconsComponent,
    TextFilterPipe,
    HtmlTemplatePipe,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    IconsComponent,
    HomeComponent,
  ],
})
export class PagesModule { }
