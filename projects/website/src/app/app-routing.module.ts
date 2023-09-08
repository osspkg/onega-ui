import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StylesComponent } from 'projects/website/src/pages/styles/styles.component';
import { HomeComponent } from '../pages/home/home.component';
import { IconsComponent } from '../pages/icons/icons.component';

const routes: Routes = [
  { path:'', component: HomeComponent, title: '@Onega-UI | Home' },
  { path:'icons', component: IconsComponent, title: '@Onega-UI | Icons' },
  { path:'styles', component: StylesComponent, title: '@Onega-UI | Styles' },
  { path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
