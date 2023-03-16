import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { FormsModule } from '@angular/forms';
import { RestaurantService } from './restaurant.service';
import { LoaderComponent } from './loader/loader.component';
import { HeaderComponent } from './header-footer/header.component';
import { FooterComponent } from './header-footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ModalComponent } from './modal/modal.component';
import { MenuComponent } from './menu/menucard.component';
import { PlatComponent } from './plat/plat.component';
import { HoraireComponent } from './horaire/horaire.component';
import { DetailplatComponent } from './detailplat/detailplat.component';
import { PlatFormComponent } from './plat-form/plat-form.component';
import { AddPlatComponent } from './add-plat/add-plat.component';
import { EditPlatComponent } from './edit-plat/edit-plat.component';


const restauRoutes: Routes = [

  { path: 'reservation', component: ReservationComponent},
  { path: 'menu', component: MenuComponent },
  { path: 'plat/add', component: AddPlatComponent },
  { path: 'plat/:id', component: DetailplatComponent },
  { path: 'edit/plat/:id', component: EditPlatComponent, canActivate: [AuthGuard]},
  { path: 'platform', component: PlatFormComponent },
  { path: 'modal', component: ModalComponent},
  { path: 'horaire', component: HoraireComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'home', component: HomeComponent },
  { path: 'menus', component: MenuComponent}

];



@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    ContactComponent,
    ReservationComponent,
    ModalComponent,
    PlatComponent,
    HoraireComponent,
    DetailplatComponent,
    PlatFormComponent,
    AddPlatComponent,
    EditPlatComponent,
    HeaderComponent,
    FooterComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(restauRoutes),
  ],
  providers: [RestaurantService]
})
export class RestaurantModule { }
