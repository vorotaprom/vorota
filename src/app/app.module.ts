import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { CatalogModule } from './catalog/catalog.module';

import { CatalogServise } from './shared/catalog.servise';
import { SectionsModule } from './catalog/sections/sections.module';
import { AntiFireModule } from './catalog/anti-fire/anti-fire.module';
import { AvtomaticaModule } from './catalog/avtomatica/avtomatica.module';
import { BarrierModule } from './catalog/barrier/barrier.module';
import { RampAndTableModule } from './catalog/ramp-and-table/ramp-and-table.module';
import { RolletModule } from './catalog/rollet/rollet.module';
import { SpeedRollModule } from './catalog/speed-roll/speed-roll.module';
import { StreetModule } from './catalog/street/street.module';
import { TransshipmentModule } from './catalog/transshipment/transshipment.module';



@NgModule({
  declarations: [
    AppComponent,
    ContactComponent
  ],
  imports: [
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
    TransshipmentModule
  ],
  providers: [CatalogServise],
  bootstrap: [AppComponent]
})
export class AppModule { }
