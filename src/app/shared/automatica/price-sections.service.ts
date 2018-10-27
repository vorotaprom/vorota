import {Injectable} from '@angular/core';

import {ComplectAutomaticModel} from './comlect-automatic.model';
import {PriceAutomaticaModel} from './price-automatica.model';

const se800 = new PriceAutomaticaModel(
  '../../../assets/img/catalog/price-automatica/section/SE-800.jpg',
  'Комплект привода DoorHan SE-800PRO',
  93,
  [
    new ComplectAutomaticModel(
      'Привод для секционных ворот SE-800 PRO',
      '1 шт.'
    ),
    new ComplectAutomaticModel(
      'Рейка с цепью длиной 3300 мм',
      '1 шт.'
    ),
    new ComplectAutomaticModel(
      'Встроенный радиоприемник 433 МГц',
      '1 шт.'
    ),
    new ComplectAutomaticModel(
      'Пульт дистанционного управления черного цвета Transmitter-2 PRO BLACK',
      '1 шт.'
    ),
  ]
);

const se1000 = new PriceAutomaticaModel(
  '../../../assets/img/catalog/price-automatica/section/SE-1000.jpg',
  'Комплект привода doorhan SE-1000PRO',
  111,
  [
    new ComplectAutomaticModel(
      'Электропривод для секционных ворот SE-1000 PRO',
      '1 шт.'
    ),
    new ComplectAutomaticModel(
      'Рейка с цепью длиной 3600 мм',
      '1 шт.'
    ),
    new ComplectAutomaticModel(
      'Встроенный радиоприемник 433 МГц',
      '1 шт.'
    ),
    new ComplectAutomaticModel(
      'Пульт дистанционного управления черного цвета Transmitter-2 PRO BLACK',
      '1 шт.'
    ),
  ]
);
const se1200 = new PriceAutomaticaModel(
  '../../../assets/img/catalog/price-automatica/section/SE-1200.jpg',
  'Комплект привода doorhan SE-1200',
  122,
  [
    new ComplectAutomaticModel(
      'Электропривод для секционных ворот SE-1200',
      '1 шт.'
    ),
    new ComplectAutomaticModel(
      'Рейка с цепью длиной 4600',
      '1 шт.'
    ),
    new ComplectAutomaticModel(
      'Встроенный приемник 433 МГц',
      '1 шт.'
    ),
    new ComplectAutomaticModel(
      'Пульт дистанционного управления 4-канальный',
      '1 шт.'
    ),
  ]
);
const sh20 = new PriceAutomaticaModel(
  '../../../assets/img/catalog/price-automatica/section/Shaft-20.jpg',
  'Комплект вального привода doorhan Shaft-20KIT',
  159,
  [
    new ComplectAutomaticModel(
      'Электропривод SHAFT-20 со встроенным блоком управления и приемником',
      '1 шт.'
    ),
    new ComplectAutomaticModel(
      'Кронштейн крепления',
      '1 шт.'
    ),
    new ComplectAutomaticModel(
      'Кнопочная панель дистанционного управления',
      '1 шт.'
    ),
  ]
);
const sh50 = new PriceAutomaticaModel(
  '../../../assets/img/catalog/price-automatica/section/Shaft-50.jpg',
  'Комплект вального привода doorhan Shaft-50KIT',
  299,
  [
    new ComplectAutomaticModel(
      'Электропривод Shaft-50KIT',
      '1 шт.'
    ),
    new ComplectAutomaticModel(
      'Удлинитель цепи до 8 м',
      '1 шт.'
    ),
    new ComplectAutomaticModel(
      'Пост управления трехпозиционный',
      '1 шт.'
    ),
    new ComplectAutomaticModel(
      'Комплект крепежа',
      'компл'
    ),
  ]
);
const sh50Pro = new PriceAutomaticaModel(
  '../../../assets/img/catalog/price-automatica/section/Shaft-50PRO.jpg',
  'Комплект привода doorhan для промышленных ворот Shaft-50PROKIT',
  415,
  [
    new ComplectAutomaticModel(
      'Электропривод Shaft-50PRO c выносным блоком управления',
      '1 шт.'
    ),
    new ComplectAutomaticModel(
      'Удлинитель цепи до 8 м',
      '1 шт.'
    ),
    new ComplectAutomaticModel(
      'Пост управления трехпозиционный',
      '1 шт.'
    ),
    new ComplectAutomaticModel(
      'Комплект крепежа',
      'компл'
    ),
  ]
);
const sh30 = new PriceAutomaticaModel(
  '../../../assets/img/catalog/price-automatica/section/Shaft-30.jpg',
  'Комплект привода doorhan для промышленных ворот Shaft-30 IP65KIT',
  272,
  [
    new ComplectAutomaticModel(
      'Электропривод Shaft-30 IP65 со встроенным приемником на 60 пультов',
      '1 шт.'
    ),
    new ComplectAutomaticModel(
      'Удлинитель цепи до 8 м',
      '1 шт.'
    ),
    new ComplectAutomaticModel(
      'Пост управления трехпозиционный',
      '1 шт.'
    ),
    new ComplectAutomaticModel(
      'Комплект крепежа',
      'компл'
    ),
  ]
);
const sh60 = new PriceAutomaticaModel(
  '../../../assets/img/catalog/price-automatica/section/Shaft-60.jpg',
  'Комплект привода doorhan для промышленных ворот Shaft-60 IP65KIT',
  305,
  [
    new ComplectAutomaticModel(
      'Электропривод Shaft-60 IP65',
      '1 шт.'
    ),
    new ComplectAutomaticModel(
      'Удлинитель цепи до 8 м',
      '1 шт.'
    ),
    new ComplectAutomaticModel(
      'Пост управления трехпозиционный',
      '1 шт.'
    ),
    new ComplectAutomaticModel(
      'Комплект крепежа',
      'компл'
    ),
  ]
);
const sh120 = new PriceAutomaticaModel(
  '../../../assets/img/catalog/price-automatica/section/Shaft-120.jpg',
  'Комплект привода doorhan для промышленных ворот Shaft-120KIT',
  422,
  [
    new ComplectAutomaticModel(
      'Электропривод SHAFT-120 со встроенным блоком управления',
      '1 шт.'
    ),
    new ComplectAutomaticModel(
      'Удлинитель цепи до 12 м',
      '1 шт.'
    ),
    new ComplectAutomaticModel(
      'Пост управления трехпозиционный',
      '1 шт.'
    ),
    new ComplectAutomaticModel(
      'Комплект крепежа',
      'компл'
    ),
  ]
);

const se800Promise = Promise.resolve(se800);
const se1000Promise = Promise.resolve(se1000);
const se1200Promise = Promise.resolve(se1200);
const sh20Promise = Promise.resolve(sh20);
const sh50Promise = Promise.resolve(sh50);
const sh50ProPromise = Promise.resolve(sh50Pro);
const sh30Promise = Promise.resolve(sh30);
const sh60Promise = Promise.resolve(sh60);
const sh120Promise = Promise.resolve(sh120);

@Injectable()
export class PriceSectionsService {
  getPriceSection800(): Promise<PriceAutomaticaModel> {
    return se800Promise;
  }
  getPriceSection1000(): Promise<PriceAutomaticaModel> {
    return se1000Promise;
  }
  getPriceSection1200(): Promise<PriceAutomaticaModel> {
    return se1200Promise;
  }
  getPriceSection20(): Promise<PriceAutomaticaModel> {
    return sh20Promise;
  }
  getPriceSection50(): Promise<PriceAutomaticaModel> {
    return sh50Promise;
  }
  getPriceSection50Pro(): Promise<PriceAutomaticaModel> {
    return sh50ProPromise;
  }
  getPriceSection30(): Promise<PriceAutomaticaModel> {
    return sh30Promise;
  }
  getPriceSection60(): Promise<PriceAutomaticaModel> {
    return sh60Promise;
  }
  getPriceSection120(): Promise<PriceAutomaticaModel> {
    return sh120Promise;
  }
}
