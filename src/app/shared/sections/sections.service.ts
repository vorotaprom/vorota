import { WINDOW } from '@ng-toolkit/universal';
import { Injectable, Inject } from '@angular/core';

import { ViewPanel } from './view-panel';
import { TypePanel } from './type-panel';
import { ColorPanelWood } from './color-panel-wood';
import { ColorPanelRal } from './color-panel-ral';
import { FacingPremium } from './facing-premium';
import { AcsessuarSections } from './acsessuar-sections';

import { ModelPriceSection } from './model-price-section';

const priceRsd01 = [
  new ModelPriceSection(
    '../../../assets/img/catalog/section/img-price-rsd-01.png',
    'Гаражные секционные ворота DoorHan RSD01 2500 х 2000',
    '450'
  ),
  new ModelPriceSection(
    '../../../assets/img/catalog/section/img-price-rsd-01.png',
    'Гаражные секционные ворота DoorHan RSD01 2500 х 2500',
    '490'
  ),
  new ModelPriceSection(
    '../../../assets/img/catalog/section/img-price-rsd-01.png',
    'Гаражные секционные ворота DoorHan RSD01 2800 х 2300',
    '480'
  ),
  new ModelPriceSection(
    '../../../assets/img/catalog/section/img-price-rsd-01.png',
    'Гаражные секционные ворота DoorHan RSD01 2800 х 2500',
    '530'
  ),
  new ModelPriceSection(
    '../../../assets/img/catalog/section/img-price-rsd-01.png',
    'Гаражные секционные ворота DoorHan RSD01 3000 х 2000',
    '490'
  ),
  new ModelPriceSection(
    '../../../assets/img/catalog/section/img-price-rsd-01.png',
    'Гаражные секционные ворота DoorHan RSD01 3000 х 2500',
    '550'
  ),
];

const priceRsd02 = [
  new ModelPriceSection(
    '../../../assets/img/catalog/section/img-price-rsd-02.png',
    'Гаражные секционные ворота DoorHan RSD02 2500 х 2000',
    '500'
  ),
  new ModelPriceSection(
    '../../../assets/img/catalog/section/img-price-rsd-02.png',
    'Гаражные секционные ворота DoorHan RSD02 2500 х 2500',
    '520'
  ),
  new ModelPriceSection(
    '../../../assets/img/catalog/section/img-price-rsd-02.png',
    'Гаражные секционные ворота DoorHan RSD02 2500 х 3000',
    '650'
  ),
  new ModelPriceSection(
    '../../../assets/img/catalog/section/img-price-rsd-02.png',
    'Гаражные секционные ворота DoorHan RSD02 3000 х 2000',
    '540'
  ),
  new ModelPriceSection(
    '../../../assets/img/catalog/section/img-price-rsd-02.png',
    'Гаражные секционные ворота DoorHan RSD02 2500 х 2500',
    '580'
  ),
  new ModelPriceSection(
    '../../../assets/img/catalog/section/img-price-rsd-02.png',
    'Гаражные секционные ворота DoorHan RSD02 3000 х 3000',
    '690'
  ),
  new ModelPriceSection(
    '../../../assets/img/catalog/section/img-price-rsd-02.png',
    'Гаражные секционные ворота DoorHan RSD02 3500 х 2000',
    '600'
  ),
  new ModelPriceSection(
    '../../../assets/img/catalog/section/img-price-rsd-02.png',
    'Гаражные секционные ворота DoorHan RSD02 3500 х 2500',
    '640'
  ),
  new ModelPriceSection(
    '../../../assets/img/catalog/section/img-price-rsd-02.png',
    'Гаражные секционные ворота DoorHan RSD02 3500 х 3000',
    '760'
  ),
  new ModelPriceSection(
    '../../../assets/img/catalog/section/img-price-rsd-02.png',
    'Гаражные секционные ворота DoorHan RSD02 4000 х 2000',
    '640'
  ),
  new ModelPriceSection(
    '../../../assets/img/catalog/section/img-price-rsd-02.png',
    'Гаражные секционные ворота DoorHan RSD02 4000 х 2500',
    '800'
  ),
  new ModelPriceSection(
    '../../../assets/img/catalog/section/img-price-rsd-02.png',
    'Гаражные секционные ворота DoorHan RSD02 4000 х 3000',
    '850'
  ),
  new ModelPriceSection(
    '../../../assets/img/catalog/section/img-price-rsd-02.png',
    'Гаражные секционные ворота DoorHan RSD02 4500 х 2000',
    '690'
  ),
  new ModelPriceSection(
    '../../../assets/img/catalog/section/img-price-rsd-02.png',
    'Гаражные секционные ворота DoorHan RSD02 4500 х 2500',
    '800'
  ),
  new ModelPriceSection(
    '../../../assets/img/catalog/section/img-price-rsd-02.png',
    'Гаражные секционные ворота DoorHan RSD02 4500 х 3000',
    '940'
  ),
  new ModelPriceSection(
    '../../../assets/img/catalog/section/img-price-rsd-02.png',
    'Гаражные секционные ворота DoorHan RSD02 5000 х 2000',
    '790'
  ),
  new ModelPriceSection(
    '../../../assets/img/catalog/section/img-price-rsd-02.png',
    'Гаражные секционные ворота DoorHan RSD02 5000 х 2500',
    '890'
  ),
  new ModelPriceSection(
    '../../../assets/img/catalog/section/img-price-rsd-02.png',
    'Гаражные секционные ворота DoorHan RSD02 5000 х 3000',
    '1090'
  ),
];

const priceIsd01 = [
  new ModelPriceSection(
    '../../../assets/img/catalog/section/img-price-isd-01.png',
    'Гаражные секционные ворота DoorHan RSD01 3500 х 3500',
    '940'
  ),
  new ModelPriceSection(
    '../../../assets/img/catalog/section/img-price-isd-01.png',
    'Гаражные секционные ворота DoorHan RSD01 4000 х 3500',
    '1050'
  ),
  new ModelPriceSection(
    '../../../assets/img/catalog/section/img-price-isd-01.png',
    'Гаражные секционные ворота DoorHan RSD01 4500 х 4000',
    '1300'
  ),
  new ModelPriceSection(
    '../../../assets/img/catalog/section/img-price-isd-01.png',
    'Гаражные секционные ворота DoorHan RSD01 4500 х 4500',
    '1440'
  ),
];

const priceRsd02Promise = Promise.resolve(priceRsd02);
const priceRsd01Promise = Promise.resolve(priceRsd01);
const priceIsd01Promise = Promise.resolve(priceIsd01);

@Injectable()
export class SectionsService {

  // View Panel
  viewsPapels = {
    gofr: new ViewPanel('../../../../assets/img/catalog/section/complectation/view-gofr.jpg', 'Доска'),
    wave: new ViewPanel('../../../../assets/img/catalog/section/complectation/view-wave.jpg', 'Волна'),
    strip: new ViewPanel('../../../../assets/img/catalog/section/complectation/view-sharp-strip.jpg', 'Широкая полоса'),
    tLine: new ViewPanel('../../../../assets/img/catalog/section/complectation/view-t-line.jpg', 't-line'),
    smooth: new ViewPanel('../../../../assets/img/catalog/section/complectation/view-smooth.jpg', 'Гладкая'),
    panel: new ViewPanel('../../../../assets/img/catalog/section/complectation/view-panel.jpg', 'Филенка'),
  };

  // Type Panel
  typePanel = {
    wood: new TypePanel('../../../../assets/img/catalog/section/complectation/type-wood.jpg', 'Под дерево'),
    stucco: new TypePanel('../../../../assets/img/catalog/section/complectation/type-stucco.jpg', 'Stucco'),
    smooth: new TypePanel('../../../../assets/img/catalog/section/complectation/type-smooth.jpg', 'Гладкая')
  };

  // Color Panel Wood
  colorPanelWood = {
    darkOak: new ColorPanelWood('../../../../assets/img/catalog/section/complectation/color-dark-oak.jpg', 'Темный дуб'),
    goldenOak: new ColorPanelWood('../../../../assets/img/catalog/section/complectation/color-golden-oak.jpg', 'Золтой дуб'),
    mahagony: new ColorPanelWood('../../../../assets/img/catalog/section/complectation/color-mahagony.jpg', 'Махагон'),
    satinGrey: new ColorPanelWood('../../../../assets/img/catalog/section/complectation/color-satin-grey.jpg', 'Satin gray'),
    wenge: new ColorPanelWood('../../../../assets/img/catalog/section/complectation/color-wenge.jpg', 'Венге')
  };

  // Clor Panel Ral
  colorPanelRal = {
    white: new ColorPanelRal(
      '../../../assets/img/catalog/section/complectation/color-white.jpg',
      'RAL 9010 Белый'),
    brown: new ColorPanelRal(
      '../../../assets/img/catalog/section/complectation/color-brown.jpg',
      'RAL 8014 Коричневый'),
    blue: new ColorPanelRal(
      '../../../assets/img/catalog/section/complectation/color-blue.jpg',
      'RAL 5005 Синий'),
    green: new ColorPanelRal(
      '../../../assets/img/catalog/section/complectation/color-green.jpg',
      'RAL 6005 Зеленый'),
    silver: new ColorPanelRal(
      '../../../assets/img/catalog/section/complectation/color-silver.jpg',
      'RAL 9006 Серебро'),
    red: new ColorPanelRal(
      '../../../assets/img/catalog/section/complectation/color-red.jpg',
      'RAL 3000 Красный'),
    gray: new ColorPanelRal(
      '../../../assets/img/catalog/section/complectation/color-gray.jpg',
      'RAL 9007 Серый'),
    anthracite: new ColorPanelRal(
      '../../../assets/img/catalog/section/complectation/color-anthracite.jpg',
      'RAL 7016 Антрацыт'),
    black: new ColorPanelRal(
      '../../../assets/img/catalog/section/complectation/color-black.jpg',
      'RAL 9005 Черный'),
    ral: new ColorPanelRal(
      '../../../assets/img/catalog/section/complectation/color-all-ral.jpg',
      'Нестандартный цвет по карте RAL (наценка)')
  };

  // Facinf Premium
  facingPremium = {
    classic01: new TypePanel(
      '../../../assets/img/catalog/section/complectation/facing-classic-01.jpg',
      'Premium Classic, рисунок смещен влево, цвета «золотой дуб» и «темный орех»'
    ),
    classic02: new TypePanel(
      '../../../assets/img/catalog/section/complectation/facing-classic-02.jpg',
      'Premium Classic, рисунок смещен вправо, цвета «золотой дуб» и «темный орех»'),
    classic03: new TypePanel(
      '../../../assets/img/catalog/section/complectation/facing-classic-03.jpg',
      'Premium Classic, цвета «золотой дуб» и «темный орех»'),
    classic04: new TypePanel(
      '../../../assets/img/catalog/section/complectation/facing-classic-04.jpg',
      'Premium Classic, цвета «золотой дуб», RAL 9003, RAL 8014'),
    country01: new TypePanel(
      '../../../assets/img/catalog/section/complectation/facing-country-01.jpg',
      'Premium Country, цвета «золотой дуб» и «темный орех»'),
    country02: new TypePanel(
      '../../../assets/img/catalog/section/complectation/facing-country-02.jpg',
      'Premium Country, цвета «золотой дуб» и «темный орех»'),
    country03: new TypePanel(
      '../../../assets/img/catalog/section/complectation/facing-country-03.jpg',
      'Premium Country, цвета «золотой дуб» и «темный орех»'),
    country04: new TypePanel(
      '../../../assets/img/catalog/section/complectation/facing-country-04.jpg',
      'Premium Country, цвета «золотой дуб» и «темный орех»'),
    hiTech01: new TypePanel(
      '../../../assets/img/catalog/section/complectation/facing-hi-tech-01.jpg',
      'Premium Hi-Tech, облицовка молдингами'),
    hiTech02: new TypePanel(
      '../../../assets/img/catalog/section/complectation/facing-hi-tech-02.jpg',
      'Premium Hi-Tech, облицовка молдингами'),
    hiTech03: new TypePanel(
      '../../../assets/img/catalog/section/complectation/facing-hi-tech-03.jpg',
      'Premium Hi-Tech, облицовка молдингами'),
    hiTech04: new TypePanel(
      '../../../assets/img/catalog/section/complectation/facing-hi-tech-04.jpg',
      'Premium Hi-Tech, облицовка молдингами'),
  };

  // Acsessuar Section
  acsessuars = {
    valve: new AcsessuarSections(
      '../../../assets/img/catalog/section/complectation/acsessuar-valve.jpg',
      'Механическая задвижка',
      'Позволяет запирать ворота изнутри помещения. Отличается простотой и надежностью.'
    ),
    lock: new AcsessuarSections(
      '../../../assets/img/catalog/section/complectation/acsessuar-lock.jpg',
      'Механический замок',
      'Позволяет блокировать полотно ворот в закрытом положении как изнутри помещения, так и со стороны улицы.'
    ),
    windowMinPromBlack: new AcsessuarSections(
      '../../../assets/img/catalog/section/complectation/window-607-202-black.jpg',
      'Окно акриловое 607х202, черное (арт. DH85602)',
      'Специальная конструкция обеспечивает плотное прилегание к полотну ворот,'
      + 'что защищает его от промерзания и теплопотери. Окантовка черного цвета.'
    ),
    windowMaxPromBlack: new AcsessuarSections(
      '../../../assets/img/catalog/section/complectation/window-635-330-black.jpg',
      'Окно акриловое 635х330, черное',
      'Специальная конструкция обеспечивает плотное прилегание к полотну ворот,'
      + 'что защищает его от промерзания и теплопотери. Окантовка черного цвета.'
    ),
    windowWhite: new AcsessuarSections(
      '../../../assets/img/catalog/section/complectation/window-452-302-white.jpg',
      'Окно акриловое 452х302, белое (арт. DH85626)',
      'Специальная конструкция обеспечивает плотное прилегание к полотну ворот,'
      + 'что защищает его от промерзания и теплопотери. Окантовка белого цвета.'
    ),
    windowBrown: new AcsessuarSections(
      '../../../assets/img/catalog/section/complectation/window-452-302-brown.jpg',
      'Окно акриловое 452х302, коричневое (арт. DH85631)',
      'Специальная конструкция обеспечивает плотное прилегание к полотну ворот,'
      + 'что защищает его от промерзания и теплопотери. Окантовка коричневого цвета.'
    ),
    windowWhiteCross: new AcsessuarSections(
      '../../../assets/img/catalog/section/complectation/window-452-302-white-cross.jpg',
      'Окно акриловое 452х302, белое с раскладкой «крест» (арт. DH85627)',
      'Специальная конструкция обеспечивает плотное прилегание к полотну ворот,'
      + 'что защищает его от промерзания и теплопотери. Стилистическая вставка в форме креста.'
      + 'Окантовка белого цвета.'
    ),
    windowBrownCross: new AcsessuarSections(
      '../../../assets/img/catalog/section/complectation/window-452-302-brown-cross.jpg',
      'Окно акриловое 452х302, коричневое с раскладкой «крест» (арт. DH85628)',
      'Специальная конструкция обеспечивает плотное прилегание к полотну ворот,'
      + 'что защищает его от промерзания и теплопотери. Стилистическая вставка в форме креста.'
      + 'Окантовка коричневого цвета.'
    ),
    windowWhiteRomb: new AcsessuarSections(
      '../../../assets/img/catalog/section/complectation/window-452-302-white-romb.jpg',
      'Окно акриловое 452х302, белое с раскладкой «ромб» (арт. DH85629)',
      'Специальная конструкция обеспечивает плотное прилегание к полотну ворот,'
      + 'что защищает его от промерзания и теплопотери. Стилистическая вставка в форме ромба. Окантовка белого цвета.'
    ),
    windowBrownRomb: new AcsessuarSections(
      '../../../assets/img/catalog/section/complectation/window-452-302-brown-romb.jpg',
      'Окно акриловое 452х302, коричневое с раскладкой «ромб» (арт. DH85629)',
      'Специальная конструкция обеспечивает плотное прилегание к полотну ворот,'
      + 'что защищает его от промерзания и теплопотери. Стилистическая вставка в форме ромба.'
      + 'Окантовка коричневого цвета.'
    ),
    wicket: new AcsessuarSections(
      '../../../assets/img/catalog/section/complectation/wicket.jpg',
      'Калитка',
      'Имеет усовершенствованную конструкцию, отличается высокой прочностью и эстетичным внешним видом.'
      + 'Минимальная высота щита — 2 130 мм.'
    )
  };

  constructor(
     @Inject(WINDOW) private window: Window
  ) {}


  getPriceRsd01(): Promise<ModelPriceSection[]> {
    return priceRsd01Promise;
  }

  getPriceRsd02(): Promise<ModelPriceSection[]> {
    return priceRsd02Promise;
  }
  getPriceIsd01(): Promise<ModelPriceSection[]> {
    return priceIsd01Promise;
  }

  getViewsPanels(index): ViewPanel[] {
    const obj: ViewPanel[] = [];

    index.forEach(element => {
      for (const item in this.viewsPapels) {
        if (element === item) {
          obj.push(this.viewsPapels[element]);
        }
      }
    });

    return obj;
  }

  getTypesPanels(index): TypePanel[] {
    const obj: TypePanel[] = [];

    index.forEach(element => {
      for (const item in this.typePanel) {
        if (element === item) {
          obj.push(this.typePanel[element]);
        }
      }
    });

    return obj;
  }

  getColorsPanelsWood(index): ColorPanelWood[] {
    const obj: ColorPanelWood[] = [];

    index.forEach(element => {
      for (const item in this.colorPanelWood) {
        if (element === item) {
          obj.push(this.colorPanelWood[element]);
        }
      }
    });

    return obj;
  }

  getColorsPanelsRal(index): ColorPanelRal[] {
    const obj: ColorPanelRal[] = [];

    index.forEach(element => {
      for (const item in this.colorPanelRal) {
        if (element === item) {
          obj.push(this.colorPanelRal[element]);
        }
      }
    });

    return obj;
  }

  getFacingPremium(index): FacingPremium[] {
    const obj: FacingPremium[] = [];

    index.forEach(element => {
      for (const item in this.facingPremium) {
        if (element === item) {
          obj.push(this.facingPremium[element]);
        }
      }
    });

    return obj;
  }

  getAcsessuarsSections(index): AcsessuarSections[] {
    const obj: AcsessuarSections[] = [];

    index.forEach(element => {
      for (const item in this.acsessuars) {
        if (element === item) {
          obj.push(this.acsessuars[element]);
        }
      }
    });

    return obj;
  }
}
