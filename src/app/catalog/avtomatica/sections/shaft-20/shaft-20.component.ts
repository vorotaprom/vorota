import { Component, OnInit, Inject, forwardRef, ViewChild } from '@angular/core';

import { Size, Construction, Specification } from '../../../../shared/catalog/idex';
import { Constructions, CharacteristicTechnical } from './characteristics';

import { Product } from '../../../../shared/automatica/product';

import { AutomaticaService } from '../../../../shared/automatica/automatica.service';
import {PriceSectionsService} from '../../../../shared/automatica/price-sections.service';
import {PriceAutomaticaModel} from '../../../../shared/automatica/price-automatica.model';

import { ModalFromOrderShaft20Component } from './modal-from-order-shaft20/modal-from-order-shaft20.component';

@Component({
  selector: 'app-shaft-20',
  templateUrl: './shaft-20.component.html',
  styleUrls: ['./shaft-20.component.css']
})
export class Shaft20Component implements OnInit {

  public constructions: Construction[];
  public specifications: Specification[];
  public acsessuars: Product[];

  public specification = false;

  public price: PriceAutomaticaModel;
  public course: number;

  @ViewChild(ModalFromOrderShaft20Component)
  modalFromOrderShaft20Component: ModalFromOrderShaft20Component;

  constructor(
    @Inject(forwardRef(() => AutomaticaService))
    public automaticaService: AutomaticaService,
    @Inject(forwardRef(() => PriceSectionsService))
    public priceSectionsService: PriceSectionsService
  ) { }

  ngOnInit() {
    this.priceSectionsService.getPriceSection20().then(result => {
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
    this.modalFromOrderShaft20Component.openModal(title);
  }
}
