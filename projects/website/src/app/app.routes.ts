import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { IconsComponent } from '../pages/icons/icons.component';
import { KitComponent } from '../pages/kit/kit.component';
import { LicenseComponent } from '../pages/license/license.component';
import { Page404Component } from '../pages/page404/page404.component';
import { StylesComponent } from '../pages/styles/styles.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: '@Onega-UI | Home' },
  { path: 'icons', component: IconsComponent, title: '@Onega-UI | Icons' },
  { path: 'styles', component: StylesComponent, title: '@Onega-UI | Styles' },
  { path: 'styles/:id', component: StylesComponent, title: '@Onega-UI | Styles' },
  { path: 'kit', component: KitComponent, title: '@Onega-UI | UI Kit' },
  { path: 'kit/:id', component: KitComponent, title: '@Onega-UI | UI Kit' },
  { path: 'license', component: LicenseComponent, title: '@Onega-UI | License' },
  { path: '**', component: Page404Component, pathMatch: 'full' },
];
