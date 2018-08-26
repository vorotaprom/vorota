import { Component, OnInit, Inject, forwardRef, ViewChild } from '@angular/core';

import { Size, Construction } from '../../../shared/catalog/idex';
import { CharacteristicSize, Constructions } from './characteristics';

import { ViewPanel } from '../../../shared/sections/view-panel';
import { TypePanel } from '../../../shared/sections/type-panel';
import { ColorPanelWood } from '../../../shared/sections/color-panel-wood';
import { ColorPanelRal } from '../../../shared/sections/color-panel-ral';
import { AcsessuarSections } from '../../../shared/sections/acsessuar-sections';

import { MadalFormOrderStretchingComponent } from './madal-form-order-stretching/madal-form-order-stretching.component';

import { SectionsService } from '../../../shared/sections/sections.service';
import { ModelPriceSection } from '../../../shared/sections/model-price-section';

@Component({
  selector: 'app-stretching',
  templateUrl: './stretching.component.html',
  styleUrls: ['./stretching.component.css']
})
export class StretchingComponent implements OnInit {

  public viewsPanels: ViewPanel[];
  public typesPanels: TypePanel[];
  public colorsPanelsWood: ColorPanelWood[];
  public colorsPanelsRal: ColorPanelRal[];
  public acsessuars: AcsessuarSections[];

  public priceRsd01: ModelPriceSection[];

  public constructions: Construction[];
  public size: Size[];

  @ViewChild(MadalFormOrderStretchingComponent)
  madalFormOrderStretching: MadalFormOrderStretchingComponent;

  constructor(
    @Inject(forwardRef(() => SectionsService))
    public sectionsService: SectionsService
  ) {}

  ngOnInit() {
    this.sectionsService.getPriceRsd01().then(result => this.priceRsd01 = result);

    this.viewsPanels = this.sectionsService.getViewsPanels([
      'gofr',
      'wave',
      'strip',
      'tLine',
      'smooth',
      'panel',
    ]);
    this.typesPanels = this.sectionsService.getTypesPanels([
      'wood',
      'stucco',
      'smooth',
    ]);
    this.colorsPanelsWood = this.sectionsService.getColorsPanelsWood([
      'darkOak',
      'goldenOak',
      'mahagony',
      'satinGrey',
      'wenge',
    ]);
    this.colorsPanelsRal = this.sectionsService.getColorsPanelsRal([
      'white',
      'brown',
      'blue',
      'green',
      'silver',
      'red',
      'gray',
      'anthracite',
      'black',
      'ral'
    ]);
    this.acsessuars = this.sectionsService.getAcsessuarsSections([
      'valve',
      'lock',
      'windowMinPromBlack',
      'windowMaxPromBlack',
      'windowWhite',
      'windowBrown',
      'windowWhiteCross',
      'windowBrownCross',
      'windowWhiteRomb',
      'windowBrownRomb'
    ]);

    this.constructions = Constructions;
    this.size = CharacteristicSize;
  }

  showModalOrder(title) {
    this.madalFormOrderStretching.openModal(title);
  }
}
