import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StylesComponent } from 'projects/website/src/pages/styles/styles.component';
import { HomeComponent } from '../pages/home/home.component';
import { IconsComponent } from '../pages/icons/icons.component';
import { KitComponent } from '../pages/kit/kit.component';
import { LicenseComponent } from '../pages/license/license.component';

const routes: Routes = [
  { path:'', component: HomeComponent, title: '@Onega-UI | Home' },
  { path:'icons', component: IconsComponent, title: '@Onega-UI | Icons' },
  { path:'styles', component: StylesComponent, title: '@Onega-UI | Styles' },
  { path:'kit', component: KitComponent, title: '@Onega-UI | UI Kit' },
  { path:'license', component: LicenseComponent, title: '@Onega-UI | License' },
  { path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
