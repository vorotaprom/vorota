import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SectionsRoutingModule } from './sections-routing.module';
import { Se800proComponent } from './se-800pro/se-800pro.component';
import { Se1000proComponent } from './se-1000pro/se-1000pro.component';
import { Se1200Component } from './se-1200/se-1200.component';
import { Shaft20Component } from './shaft-20/shaft-20.component';
import { Shaft30Component } from './shaft-30/shaft-30.component';
import { Shaft50Component } from './shaft-50/shaft-50.component';
import { Shaft50proComponent } from './shaft-50pro/shaft-50pro.component';
import { Shaft60Component } from './shaft-60/shaft-60.component';
import { Shaft120Component } from './shaft-120/shaft-120.component';

import {PriceSectionsService} from '../../../shared/automatica/price-sections.service';

import { ModalFormOrderSe800proComponent } from './se-800pro/modal-form-order-se800pro/modal-form-order-se800pro.component';
import { ModalFromOrderSe1000proComponent } from './se-1000pro/modal-from-order-se1000pro/modal-from-order-se1000pro.component';
import { ModalFromOrderSe1200Component } from './se-1200/modal-from-order-se1200/modal-from-order-se1200.component';
import { ModalFromOrderShaft20Component } from './shaft-20/modal-from-order-shaft20/modal-from-order-shaft20.component';
import { ModalFromOrderShaft30Component } from './shaft-30/modal-from-order-shaft30/modal-from-order-shaft30.component';
import { ModalFromOrderShaft50Component } from './shaft-50/modal-from-order-shaft50/modal-from-order-shaft50.component';
import { ModalFromOrderShaft50proComponent } from './shaft-50pro/modal-from-order-shaft50pro/modal-from-order-shaft50pro.component';
import { ModalFromOrderShaft60Component } from './shaft-60/modal-from-order-shaft60/modal-from-order-shaft60.component';
import { ModalFromOrderShaft120Component } from './shaft-120/modal-from-order-shaft120/modal-from-order-shaft120.component';
@NgModule({
  imports: [
    CommonModule,
    SectionsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    Se800proComponent,
    Se1000proComponent,
    Se1200Component,
    Shaft20Component,
    Shaft30Component,
    Shaft50Component,
    Shaft50proComponent,
    Shaft60Component,
    Shaft120Component,
    ModalFormOrderSe800proComponent,
    ModalFromOrderSe1000proComponent,
    ModalFromOrderSe1200Component,
    ModalFromOrderShaft20Component,
    ModalFromOrderShaft30Component,
    ModalFromOrderShaft50Component,
    ModalFromOrderShaft50proComponent,
    ModalFromOrderShaft60Component,
    ModalFromOrderShaft120Component,
  ],
  providers: [PriceSectionsService]
})
export class SectionsModule { }
