import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';
import { GalerieComponent } from '../galerie/galerie.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { MenuComponent } from '../menu/menucard.component';
import { ReservationComponent } from '../reservation/reservation.component';

const routes: Routes = [ 
  { path: 'reservation', component: ReservationComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'galerie', component: GalerieComponent },
  { path: 'home', component: HomeComponent },
  { path: 'menus', component: MenuComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'}
  ,];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

