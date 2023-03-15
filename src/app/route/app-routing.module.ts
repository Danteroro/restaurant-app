import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';
import { DetailplatComponent } from '../detailplat/detailplat.component';
import { EditPlatComponent } from '../edit-plat/edit-plat.component';
import { HomeComponent } from '../home/home.component';
import { HoraireComponent } from '../horaire/horaire.component';
import { LoginComponent } from '../login/login.component';
import { MenuComponent } from '../menu/menucard.component';
import { ModalComponent } from '../modal/modal.component';
import { PlatFormComponent } from '../plat-form/plat-form.component';
import { ReservationComponent } from '../reservation/reservation.component';

const routes: Routes = [ 
  { path: 'reservation', component: ReservationComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'plat/:id', component: DetailplatComponent },
  { path: 'edit/plat/:id', component: EditPlatComponent },
  { path: 'platform', component: PlatFormComponent },
  { path: 'modal', component: ModalComponent },
  { path: 'login', component: LoginComponent },
  { path: 'horaire', component: HoraireComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomeComponent },
  { path: 'menus', component: MenuComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'}
  ,];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

