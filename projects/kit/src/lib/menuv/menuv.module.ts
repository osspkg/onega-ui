import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MenuvComponent } from './menuv.component';
import { MenuvBodyDirective, MenuvFooterDirective, MenuvHeaderDirective } from './menuv.directive';

@NgModule({
  declarations: [
    MenuvComponent,
    MenuvHeaderDirective,
    MenuvBodyDirective,
    MenuvFooterDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MenuvComponent,
    MenuvHeaderDirective,
    MenuvBodyDirective,
    MenuvFooterDirective,
  ],
})
export class MenuvModule { }
