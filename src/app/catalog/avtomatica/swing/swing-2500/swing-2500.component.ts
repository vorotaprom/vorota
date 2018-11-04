import { Component, OnInit, Inject, forwardRef, ViewChild } from '@angular/core';

import { Size, Construction, Specification } from '../../../../shared/catalog/idex';
import { Constructions, CharacteristicTechnical } from './characteristics';

import { Product } from '../../../../shared/automatica/product';

import { AutomaticaService } from '../../../../shared/automatica/automatica.service';

import {PriceSwingService} from '../../../../shared/automatica/price-swing.service';
import {PriceAutomaticaModel} from '../../../../shared/automatica/price-automatica.model';

import { ModalFromOrderSwing2500Component } from './modal-from-order-swing2500/modal-from-order-swing2500.component';

@Component({
  selector: 'app-swing-2500',
  templateUrl: './swing-2500.component.html'
})
export class Swing2500Component implements OnInit {

  public constructions: Construction[];
  public specifications: Specification[];
  public acsessuars: Product[];

  public specification = false;

  public price: PriceAutomaticaModel;
  public course: number;

  @ViewChild(ModalFromOrderSwing2500Component)
  modalFromOrderSwing2500Component: ModalFromOrderSwing2500Component;

  constructor(
    @Inject(forwardRef(() => AutomaticaService))
    public automaticaService: AutomaticaService,
    @Inject(forwardRef(() => PriceSwingService))
    public priceSwingService: PriceSwingService
  ) { }

  ngOnInit() {
    this.priceSwingService.getPriceSw2500().then(result => {
      this.price = result;
    });

    this.course = this.automaticaService.getCourse();

    this.constructions = Constructions;
    this.specifications = CharacteristicTechnical;

    this.acsessuars = this.automaticaService.getProducts([
      'transmitter2Pro',
      'transmitter4Pro',
      'photosell',
      'smartcontrol2',
      'gsm2',
      'transmitter4',
      'carTransmitter',
      'transmitterPremium',
      'command',
      'keypad',
      'keyswitch',
      'keycode',
      'dhre1',
      'dhSensorKit',
      'photosellPro',
      'sirena',
      'lampPro',
      'domo7',
      'antenna',
      'dhLockKit',
    ]);

    this.specificationShow();
  }

  specificationShow() {
    const _this = this;
    this.specifications.map(item => {
      if (item.note != null) {
        _this.specification = true;
        return;
      }
    });
  }

  showModalOrder(title) {
    this.modalFromOrderSwing2500Component.openModal(title);
  }

}
