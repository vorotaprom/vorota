import {Injectable} from '@angular/core';

import {ComplectAutomaticModel} from './comlect-automatic.model';
import {PriceAutomaticaModel} from './price-automatica.model';

const sl500 = new PriceAutomaticaModel(
  '../../../assets/img/catalog/price-automatica/sliding/Комплект-привода-SLIDING-500.jpg',
  'Комплект привода doorhan SLIDING-500',
  193,
  [
    new ComplectAutomaticModel(
      'Электропривод SLIDING-300 со встроенным бл. упр. и с встр. приемн.',
      '1 шт.'
    ),
    new ComplectAutomaticModel(
      'Рейка зубчатая RACK-8 L=1 метр 30х8',
      '4 шт.'
    ),
    new ComplectAutomaticModel(
      'Лампа сигнальная 220В со встроенной антенной',
      '1 шт.'
    ),
    new ComplectAutomaticModel(
      'Фотоэлементы новые, дальность 40м',
      '1 шт.'
    ),
  ]
);
const sl800 = new PriceAutomaticaModel(
  '../../../assets/img/catalog/price-automatica/sliding/Комплект-привода-SLIDING-800.jpg',
  'Комплект привода doorhan SLIDING-800',
  201,
  [
    new ComplectAutomaticModel(
      'Электропривод SLIDING-800 со встроенным бл. упр. и с встр. приемн.',
      '1 шт.'
    ),
    new ComplectAutomaticModel(
      'Рейка зубчатая RACK-8 L=1 метр 30х8',
      '4 шт.'
    ),
    new ComplectAutomaticModel(
      'Лампа сигнальная 220В со встроенной антенной',
      '1 шт.'
    ),
    new ComplectAutomaticModel(
      'Фотоэлементы новые, дальность 40м',
      '1 шт.'
    ),
  ]
);
const sl1300 = new PriceAutomaticaModel(
  '../../../assets/img/catalog/price-automatica/sliding/Комплект-привода-SLIDING-1300.jpg',
  'Комплект привода doorhan SLIDING-1300',
  220,
  [
    new ComplectAutomaticModel(
      'Электропривод SLIDING-1300 со встроенным бл. упр. и с встр. приемн.',
      '1 шт.'
    ),
    new ComplectAutomaticModel(
      'Зубчатая рейка 30х12 M4 1м',
      '4 шт.'
    ),
    new ComplectAutomaticModel(
      'Лампа сигнальная 220В со встроенной антенной',
      '1 шт.'
    ),
    new ComplectAutomaticModel(
      'Фотоэлементы новые, дальность 40м',
      '1 шт.'
    ),
  ]
);
const sl2100 = new PriceAutomaticaModel(
  '../../../assets/img/catalog/price-automatica/sliding/Комплект-привода-SLIDING-2100.jpg',
  'Комплект привода doorhan SLIDING-2100',
  266,
  [
    new ComplectAutomaticModel(
      'Электропривод SLIDING-2100 со встроенным бл. упр. и с встр. приемн.',
      '1 шт.'
    ),
    new ComplectAutomaticModel(
      'Зубчатая рейка 30х12 M4 1м',
      '4 шт.'
    ),
    new ComplectAutomaticModel(
      'Лампа сигнальная 220В со встроенной антенной',
      '1 шт.'
    ),
    new ComplectAutomaticModel(
      'Фотоэлементы новые, дальность 40м',
      '1 шт.'
    ),
  ]
);

const sl500Promise = Promise.resolve(sl500);
const sl800Promise = Promise.resolve(sl800);
const sl1300Promise = Promise.resolve(sl1300);
const sl2100Promise = Promise.resolve(sl2100);

@Injectable()
export class PriceSlidingService {
  getPriceSl500(): Promise<PriceAutomaticaModel> {
    return sl500Promise;
  }
  getPriceSl800(): Promise<PriceAutomaticaModel> {
    return sl800Promise;
  }
  getPriceSl1300(): Promise<PriceAutomaticaModel> {
    return sl1300Promise;
  }
  getPriceSl2100(): Promise<PriceAutomaticaModel> {
    return sl2100Promise;
  }
}
