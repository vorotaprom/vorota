import {ComplectAutomaticModel} from './comlect-automatic.model';

export class PriceAutomaticaModel {
  constructor (
    public img: string,
    public title: string,
    public price: number,
    public complect: Array<ComplectAutomaticModel>
  ) {}
}
