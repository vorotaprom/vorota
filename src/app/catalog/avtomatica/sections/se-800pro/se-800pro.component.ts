import { Component, OnInit, Inject, forwardRef } from '@angular/core';

import { Size, Construction, Specification } from '../../../../shared/catalog/idex';
import { Constructions, CharacteristicTechnical } from './characteristics';

import { Product } from '../../../../shared/automatica/product';

import { AutomaticaService } from '../../../../shared/automatica/automatica.service';
import {PriceSectionsService} from '../../../../shared/automatica/price-sections.service';
import {PriceAutomaticaModel} from '../../../../shared/automatica/price-automatica.model';


@Component({
  selector: 'app-se-800pro',
  templateUrl: './se-800pro.component.html',
  styleUrls: ['./se-800pro.component.scss']
})
export class Se800proComponent implements OnInit {

  public constructions: Construction[];
  public specifications: Specification[];
  public acsessuars: Product[];

  public specification = false;

  public price: PriceAutomaticaModel;
  public course: number;

  constructor(
    @Inject(forwardRef(() => AutomaticaService))
    public automaticaService: AutomaticaService,
    @Inject(forwardRef(() => PriceSectionsService))
    public priceSectionsService: PriceSectionsService
  ) { }

  ngOnInit() {
    this.priceSectionsService.getPriceSection800().then(result => {
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
      'sk3600',
      'lock',
      'lockN',
      'lockMini'
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
}
