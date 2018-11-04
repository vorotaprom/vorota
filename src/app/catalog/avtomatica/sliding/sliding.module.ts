import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SlidingRoutingModule } from './sliding-routing.module';
import { Sliding500Component } from './sliding-500/sliding-500.component';
import { Sliding800Component } from './sliding-800/sliding-800.component';
import { Sliding1300proComponent } from './sliding-1300pro/sliding-1300pro.component';
import { Sliding2100proComponent } from './sliding-2100pro/sliding-2100pro.component';

import { PriceSlidingService } from '../../../shared/automatica/price-sliding.service';

import { ModalFromOrderSliding500Component } from './sliding-500/modal-from-order-sliding500/modal-from-order-sliding500.component';
import { ModalFromOrderSliding800Component } from './sliding-800/modal-from-order-sliding800/modal-from-order-sliding800.component';
import { ModalFromOrderSliding1300proComponent } from './sliding-1300pro/modal-from-order-sliding1300pro/modal-from-order-sliding1300pro.component';
import { ModalFromOrderSliding2100proComponent } from './sliding-2100pro/modal-from-order-sliding2100pro/modal-from-order-sliding2100pro.component';


@NgModule({
  imports: [
    CommonModule,
    SlidingRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    Sliding500Component,
    Sliding800Component,
    Sliding1300proComponent,
    Sliding2100proComponent,
    ModalFromOrderSliding500Component,
    ModalFromOrderSliding800Component,
    ModalFromOrderSliding1300proComponent,
    ModalFromOrderSliding2100proComponent
  ],
  providers: [PriceSlidingService]
})
export class SlidingModule { }
