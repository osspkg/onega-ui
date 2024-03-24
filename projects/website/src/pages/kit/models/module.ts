import { NgModule } from '@angular/core';
import { KitModule } from '../../../../../kit/src/lib/kit.module';
import { ApiLink } from '../../root/api.models';
import { CompMenu } from './comp-menu';
import { CompSticker } from './comp-sticker';
import { CompTab } from './comp-tab';
import { CompTag } from './comp-tag';

export function links(): ApiLink[] {
  return [
    { link: 'Menu', component: CompMenu },
    { link: 'Sticker', component: CompSticker },
    { link: 'Tab', component: CompTab },
    { link: 'Tag', component: CompTag },
  ];
}

@NgModule({
  declarations: [
    CompMenu,
    CompSticker,
    CompTab,
    CompTag,
  ],
  imports: [
    KitModule,
  ],
})
export class CompModule { }
