import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KitModule } from '../../../kit/src/lib/kit.module';
import { HomeComponent } from './home/home.component';
import { HtmlTemplatePipe } from './icons/html-template.pipe';
import { IconsComponent } from './icons/icons.component';
import { TextFilterPipe } from './icons/text-filter.pipe';
import { KitComponent } from './kit/kit.component';
import { ApiKitModule } from './kit/models/api-kit.module';
import { LicenseComponent } from './license/license.component';
import { Map2SlicePipe } from './root/pipes/map-2-slice.pipe';
import { SafeHtmlPipe } from './root/pipes/safe-html.pipe';
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
  ],
  imports: [
    CommonModule,
    FormsModule,
    ApiKitModule,
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
