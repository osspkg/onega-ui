import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../../../core/src/lib/core.module';
import { KitModule } from '../../../kit/src/lib/kit.module';
import { HomeComponent } from './home/home.component';
import { HtmlTemplatePipe } from './icons/html-template.pipe';
import { IconsComponent } from './icons/icons.component';
import { TextFilterPipe } from './icons/text-filter.pipe';
import { KitComponent } from './kit/kit.component';
import { CompModule } from './kit/models/module';
import { LicenseComponent } from './license/license.component';
import { Page404Component } from './page404/page404.component';
import { Map2SlicePipe } from './root/pipes/map-2-slice.pipe';
import { SafeHtmlPipe } from './root/pipes/safe-html.pipe';
import { StyleModule } from './styles/models/module';
import { StylesComponent } from './styles/styles.component';

@NgModule({
  declarations: [
    TextFilterPipe,
    HtmlTemplatePipe,
    SafeHtmlPipe,
    Map2SlicePipe,
    IconsComponent,
    HomeComponent,
    StylesComponent,
    KitComponent,
    LicenseComponent,
    Page404Component,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CoreModule,
    KitModule,
    CompModule,
    StyleModule,
  ],
  exports: [
    HomeComponent,
    IconsComponent,
    StylesComponent,
    KitComponent,
    LicenseComponent,
  ],
})
export class PagesModule { }
