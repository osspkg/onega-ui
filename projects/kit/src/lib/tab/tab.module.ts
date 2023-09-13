import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TabComponent } from './tab.component';
import { TabDirective } from './tab.directive';

@NgModule({
  declarations: [
    TabComponent,
    TabDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    TabComponent,
    TabDirective,
  ],
})
export class TabModule { }
