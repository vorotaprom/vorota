import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { CarouselModule, ModalModule } from 'ngx-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { CatalogModule } from './catalog/catalog.module';

import { CatalogService } from './shared/catalog/catalog.service';
import { SectionsService } from './shared/sections/sections.service';
import { StreetService } from './shared/street/street.service';
import { AntiFireService } from './shared/anti-fire/anti-fire.service';
import { AutomaticaService } from './shared/automatica/automatica.service';
import { RolletService } from './shared/rollet/rollet.service';
import { SpeedRollService } from './shared/speed-roll/speed-roll.service';
import { TransshipmentService } from './shared/transshipment/transshipment.service';
import { RampAndTableService } from './shared/ramp-and-table/ramp-and-table.service';
import { CaruselService } from './shared/carusel/carusel.service';
import { GalleryService } from './shared/gallery/gallery.service';
import { FeadBackService } from './shared/queries/fead-back.service';

import { SectionsModule } from './catalog/sections/sections.module';
import { AntiFireModule } from './catalog/anti-fire/anti-fire.module';
import { AvtomaticaModule } from './catalog/avtomatica/avtomatica.module';
import { BarrierModule } from './catalog/barrier/barrier.module';
import { RampAndTableModule } from './catalog/ramp-and-table/ramp-and-table.module';
import { RolletModule } from './catalog/rollet/rollet.module';
import { SpeedRollModule } from './catalog/speed-roll/speed-roll.module';
import { StreetModule } from './catalog/street/street.module';
import { TransshipmentModule } from './catalog/transshipment/transshipment.module';

import { SectionsModule as AvtomaticSectionModule } from './catalog/avtomatica/sections/sections.module';
import { SlidingModule  } from './catalog/avtomatica/sliding/sliding.module';
import { SwingModule } from './catalog/avtomatica/swing/swing.module';

import { AluminiumModule } from './catalog/rollet/aluminium/aluminium.module';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CaruselComponent } from './home/carusel/carusel.component';
import { ModalFeadBackComponent } from './modal-fead-back/modal-fead-back.component';
import { PaymentComponent } from './payment/payment.component';
import { HomeCotalogComponent } from './home/home-cotalog/home-cotalog.component';
import { SliderAdvantagesComponent } from './home/slider-advantages/slider-advantages.component';



@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    GalleryComponent,
    CaruselComponent,
    ModalFeadBackComponent,
    PaymentComponent,
    HomeCotalogComponent,
    SliderAdvantagesComponent,
  ],
  imports: [
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    HttpModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    CatalogModule,
    SectionsModule,
    AntiFireModule,
    AvtomaticaModule,
    BarrierModule,
    RampAndTableModule,
    RolletModule,
    SpeedRollModule,
    StreetModule,
    TransshipmentModule,
    AvtomaticSectionModule,
    SlidingModule,
    SwingModule,
    AluminiumModule
  ],
  providers: [
    CatalogService,
    SectionsService,
    StreetService,
    AntiFireService,
    AutomaticaService,
    RolletService,
    SpeedRollService,
    TransshipmentService,
    RampAndTableService,
    CaruselService,
    GalleryService,
    FeadBackService,
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
