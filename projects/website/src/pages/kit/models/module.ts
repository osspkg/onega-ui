import { NgModule } from '@angular/core';
import { CoreModule } from '../../../../../core/src/lib/core.module';
import { KitModule } from '../../../../../kit/src/lib/kit.module';
import { ApiLink } from '../../root/api.models';
import { CompLinks } from './comp-links';
import { CompMenu } from './comp-menu';
import { CompSticker } from './comp-sticker';
import { CompTab } from './comp-tab';
import { CompTag } from './comp-tag';

export function links(): ApiLink[] {
  return [
    { link: 'Links', component: CompLinks },
    { link: 'Menu', component: CompMenu },
    { link: 'Sticker', component: CompSticker },
    { link: 'Tab', component: CompTab },
    { link: 'Tag', component: CompTag },
  ];
}

@NgModule({
  declarations: [
    CompLinks,
    CompMenu,
    CompSticker,
    CompTab,
    CompTag,
  ],
  imports: [
    KitModule,
    CoreModule,
  ],
})
export class CompModule { }
