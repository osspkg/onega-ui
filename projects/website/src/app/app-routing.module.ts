import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { IconsComponent } from '../pages/icons/icons.component';

const routes: Routes = [
  { path:'', component: HomeComponent, title: '@Onega-UI | Home' },
  { path:'icons', component: IconsComponent, title: '@Onega-UI | Icons' },
  { path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
