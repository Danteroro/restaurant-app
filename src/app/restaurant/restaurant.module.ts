import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { FormsModule } from '@angular/forms';
import { RestaurantService } from './restaurant.service';
import { LoaderComponent } from './loader/loader.component';
import { HeaderComponent } from '../header-footer/header.component';
import { FooterComponent } from '../header-footer/footer.component';
import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../contact/contact.component';
import { MenuComponent } from './menu/menucard.component';
import { HoraireComponent } from '../horaire/horaire.component';
import { DetailplatComponent } from './detailplat/detailplat.component';
import { PlatFormComponent } from './plat-form/plat-form.component';
import { AddPlatComponent } from './add-plat/add-plat.component';
import { EditPlatComponent } from './edit-plat/edit-plat.component';
import { InscrptionComponent } from './inscrption/inscrption.component';
import { CarteComponent } from './carte/carte.component';
import { EntreeDetailComponent } from './entree-detail/entree-detail.component';
import { PlatDetailComponent } from './plat-detail/plat-detail.component';
import { DessertDetailComponent } from './dessert-detail/dessert-detail.component';
import { HoraireEditComponent } from '../horaire/horaire-edit/horaire-edit.component';


const restauRoutes: Routes = [

  { path: 'inscription', component: InscrptionComponent},
  { path: 'carte', component: CarteComponent},
  { path: 'entrees', component: EntreeDetailComponent },
  { path: 'plats', component: PlatDetailComponent },
  { path: 'desserts', component: DessertDetailComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'plat/add', component: AddPlatComponent },
  { path: 'plat/:id', component: DetailplatComponent },
  { path: 'edit/plat/:id', component: EditPlatComponent},
  { path: 'horaire/edit', component: HoraireEditComponent},
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
    HoraireComponent,
    DetailplatComponent,
    PlatFormComponent,
    AddPlatComponent,
    EditPlatComponent,
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    InscrptionComponent,
    CarteComponent,
    EntreeDetailComponent,
    PlatDetailComponent,
    DessertDetailComponent,
    HoraireEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(restauRoutes),
  ],
  providers: [RestaurantService]
})
export class RestaurantModule { }
