import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header-footer/header.component';
import { FooterComponent } from './header-footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menucard.component';
import { AppRoutingModule } from './route/app-routing.module';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ReservationComponent } from './reservation/reservation.component';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { PlatComponent } from './plat/plat.component';
import { HoraireComponent } from './horaire/horaire.component';
import { DetailplatComponent } from './detailplat/detailplat.component';
import { PlatFormComponent } from './plat-form/plat-form.component';
import { AddPlatComponent } from './add-plat/add-plat.component';
import { EditPlatComponent } from './edit-plat/edit-plat.component';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    ContactComponent,
    LoginComponent,
    ReservationComponent,
    ModalComponent,
    PlatComponent,
    HoraireComponent,
    DetailplatComponent,
    PlatFormComponent,
    AddPlatComponent,
    EditPlatComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false}),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

