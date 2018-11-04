import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SwingRoutingModule } from './swing-routing.module';
import { Swing2500Component } from './swing-2500/swing-2500.component';
import { Swing3000proComponent } from './swing-3000pro/swing-3000pro.component';
import { Swing5000proComponent } from './swing-5000pro/swing-5000pro.component';
import { Arm230Component } from './arm-230/arm-230.component';
import { Arm320proComponent } from './arm-320pro/arm-320pro.component';

import { PriceSwingService } from '../../../shared/automatica/price-swing.service';
import { ModalFromOrderArm320proComponent } from './arm-320pro/modal-from-order-arm320pro/modal-from-order-arm320pro.component';
import { ModalFromOrderSwing2500Component } from './swing-2500/modal-from-order-swing2500/modal-from-order-swing2500.component';
import { ModalFromOrderSwing3000proComponent } from './swing-3000pro/modal-from-order-swing3000pro/modal-from-order-swing3000pro.component';
import { ModalFromOrderSwing5000proComponent } from './swing-5000pro/modal-from-order-swing5000pro/modal-from-order-swing5000pro.component';

@NgModule({
  imports: [
    CommonModule,
    SwingRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    Swing2500Component,
    Swing3000proComponent,
    Swing5000proComponent,
    Arm230Component,
    Arm320proComponent,
    ModalFromOrderArm320proComponent,
    ModalFromOrderSwing2500Component,
    ModalFromOrderSwing3000proComponent,
    ModalFromOrderSwing5000proComponent,
  ],
  providers: [PriceSwingService]
})
export class SwingModule { }
