import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from '../header-footer/footer.component';
import { HeaderComponent } from '../header-footer/header.component';
import { HomeComponent } from '../home/home.component';
import { MenuComponent } from '../menu/menu.component';

const routes: Routes = [ 
  { path: '/header', component: HeaderComponent,},
  { path: '/footer', component: FooterComponent,},
  { path: '/home', component: HomeComponent,},
  { path: '/menus', component: MenuComponent,},
  { path: '', redirectTo: '/header', pathMatch: 'full'}
  ,];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }