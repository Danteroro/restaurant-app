import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';
import { GalerieComponent } from '../galerie/galerie.component';
import { FooterComponent } from '../header-footer/footer.component';
import { HeaderComponent } from '../header-footer/header.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { MenuComponent } from '../menu/menu.component';
import { ReservationComponent } from '../reservation/reservation.component';

const routes: Routes = [ 
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'reservation', component: ReservationComponent },
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

