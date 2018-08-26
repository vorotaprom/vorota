import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SectionsRoutingModule } from './sections-routing.module';
import { SectionsComponent } from './sections.component';
import { StandartComponent } from './standart/standart.component';
import { StretchingComponent } from './stretching/stretching.component';
import { TorsionalComponent } from './torsional/torsional.component';
import { IndustrialComponent } from './industrial/industrial.component';
import { PanoramaComponent } from './panorama/panorama.component';
import { MadalFormOrderStretchingComponent } from './stretching/madal-form-order-stretching/madal-form-order-stretching.component';
import { MadalFormOrderTorsionalComponent } from './torsional/madal-form-order-torsional/madal-form-order-torsional.component';
import { MadalFormOrderIndustrialComponent } from './industrial/madal-form-order-industrial/madal-form-order-industrial.component';


@NgModule({
  imports: [
    CommonModule,
    SectionsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SectionsComponent,
    StandartComponent,
    StretchingComponent,
    TorsionalComponent,
    IndustrialComponent,
    PanoramaComponent,
    MadalFormOrderStretchingComponent,
    MadalFormOrderTorsionalComponent,
    MadalFormOrderIndustrialComponent,
  ]
})
export class SectionsModule { }
