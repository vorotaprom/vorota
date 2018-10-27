import {Injectable} from '@angular/core';

import {ComplectAutomaticModel} from './comlect-automatic.model';
import {PriceAutomaticaModel} from './price-automatica.model';

const sw2500 = new PriceAutomaticaModel(
  '../../../assets/img/catalog/price-automatica/swing/SW-2500KIT.jpg',
  'Комплект привода doorhan SW-2500KIT',
  266,
  [
    new ComplectAutomaticModel(
      'Комплект базовый привода SW-2500BASE',
      'комп.'
    ),
    new ComplectAutomaticModel(
      'Плата управления PCB-SW',
      '1 шт.'
    ),
    new ComplectAutomaticModel(
      'Лампа сигнальная с антенной 220В',
      '1 шт.'
    ),
    new ComplectAutomaticModel(
      'Фотоэлементы новые, дальность 40м',
      '1 шт.'
    ),
  ]
);
const sw3000 = new PriceAutomaticaModel(
  '../../../assets/img/catalog/price-automatica/swing/SW-3000PROKIT.jpg',
  'Комплект привода doorhan SW-3000PROKIT',
  385,
  [
    new ComplectAutomaticModel(
      'Электропривод для распашных ворот Swing-3000PRO',
      '2 шт.'
    ),
    new ComplectAutomaticModel(
      'Плата управления PCB-SW',
      '1 шт.'
    ),
    new ComplectAutomaticModel(
      'Лампа сигнальная с антенной 220В (DOORHAN)',
      '1 шт.'
    ),
    new ComplectAutomaticModel(
      'Фотоэлементы новые, дальность 40м (DOORHAN)',
      '1 шт.'
    ),
  ]
);
const sw5000 = new PriceAutomaticaModel(
  '../../../assets/img/catalog/price-automatica/swing/SW-5000PROKIT.jpg',
  'Комплект привода doorhan SW-5000PROKIT',
  398,
  [
    new ComplectAutomaticModel(
      'Электропривод для распашных ворот Swing-5000PRO',
      '2 шт.'
    ),
    new ComplectAutomaticModel(
      'Плата управления PCB-SW',
      '1 шт.'
    ),
    new ComplectAutomaticModel(
      'Лампа сигнальная с антенной 220В',
      '1 шт.'
    ),
    new ComplectAutomaticModel(
      'Фотоэлементы новые, дальность 40м',
      '1 шт.'
    ),
  ]
);
const arm320 = new PriceAutomaticaModel(
  '../../../assets/img/catalog/price-automatica/swing/ARM-320PRO-KIT.jpg',
  'Комплект привода doorhan ARM-320PRO KIT',
  358,
  [
    new ComplectAutomaticModel(
      'Электропривод рычажный ARM-320',
      '2 шт.'
    ),
    new ComplectAutomaticModel(
      'Плата управления PCB-SW',
      '1 шт.'
    ),
    new ComplectAutomaticModel(
      'Лампа сигнальная с антенной 220В',
      '1 шт.'
    ),
    new ComplectAutomaticModel(
      'Фотоэлементы новые, дальность 40м',
      '1 шт.'
    ),
  ]
);


const sw2500Promise = Promise.resolve(sw2500);
const sw3000Promise = Promise.resolve(sw3000);
const sw5000Promise = Promise.resolve(sw5000);
const arm320Promise = Promise.resolve(arm320);

@Injectable()
export class PriceSwingService {
  getPriceSw2500(): Promise<PriceAutomaticaModel> {
    return sw2500Promise;
  }
  getPriceSw3000(): Promise<PriceAutomaticaModel> {
    return sw3000Promise;
  }
  getPriceSw5000(): Promise<PriceAutomaticaModel> {
    return sw5000Promise;
  }
  getPriceArm320(): Promise<PriceAutomaticaModel> {
    return arm320Promise;
  }
}
