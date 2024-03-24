import { NgModule } from '@angular/core';
import { KitModule } from '../../../../../kit/src/lib/kit.module';
import { ApiLink } from '../../root/api.models';
import { StyleAnimation } from './style-animation';
import { StyleArea } from './style-area';
import { StyleBackgroundColor } from './style-background-color';
import { StyleBlockquote } from './style-blockquote';
import { StyleBorderRadius } from './style-border-radius';
import { StyleBox } from './style-box';
import { StyleGrids } from './style-grids';
import { StyleHTMLElements } from './style-html-elements';
import { StyleLayout } from './style-layout';
import { StyleList } from './style-list';
import { StyleOpacity } from './style-opacity';
import { StyleOverflow } from './style-overflow';
import { StylePosition } from './style-position';
import { StyleResponsive } from './style-responsive';
import { StyleShadow } from './style-shadow';
import { StyleSizing } from './style-sizing';
import { StyleSpacing } from './style-spacing';
import { StyleTypography } from './style-typography';
import { StyleZIndex } from './style-z-index';

export function links(): ApiLink[] {
  return [
    { link: 'Animation', component: StyleAnimation },
    { link: 'Area', component: StyleArea },
    { link: 'Background Color', component: StyleBackgroundColor },
    { link: 'Blockquote', component: StyleBlockquote },
    { link: 'Border Radius', component: StyleBorderRadius },
    { link: 'Box', component: StyleBox },
    { link: 'Grids', component: StyleGrids },
    { link: 'HTML Elements', component: StyleHTMLElements },
    { link: 'Layout', component: StyleLayout },
    { link: 'List', component: StyleList },
    { link: 'Opacity', component: StyleOpacity },
    { link: 'Overflow', component: StyleOverflow },
    { link: 'Position', component: StylePosition },
    { link: 'Responsive', component: StyleResponsive },
    { link: 'Shadow', component: StyleShadow },
    { link: 'Sizing', component: StyleSizing },
    { link: 'Spacing', component: StyleSpacing },
    { link: 'Typography', component: StyleTypography },
    { link: 'Z Index', component: StyleZIndex },
  ];
}

@NgModule({
  declarations: [
    StyleAnimation,
    StyleArea,
    StyleBackgroundColor,
    StyleBlockquote,
    StyleBorderRadius,
    StyleBox,
    StyleGrids,
    StyleHTMLElements,
    StyleLayout,
    StyleList,
    StyleOpacity,
    StyleOverflow,
    StylePosition,
    StyleResponsive,
    StyleShadow,
    StyleSizing,
    StyleSpacing,
    StyleTypography,
    StyleZIndex,
  ],
  imports: [
    KitModule,
  ],
})
export class StyleModule { }
