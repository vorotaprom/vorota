import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit, Inject, forwardRef, ViewChild } from '@angular/core';

import { Size, Construction } from '../../../shared/catalog/idex';
import { CharacteristicSize, Constructions } from './characteristics';

import { ViewPanel } from '../../../shared/sections/view-panel';
import { TypePanel } from '../../../shared/sections/type-panel';
import { ColorPanelWood } from '../../../shared/sections/color-panel-wood';
import { ColorPanelRal } from '../../../shared/sections/color-panel-ral';
import { FacingPremium } from '../../../shared/sections/facing-premium';
import { AcsessuarSections } from '../../../shared/sections/acsessuar-sections';

import { MadalFormOrderTorsionalComponent } from './madal-form-order-torsional/madal-form-order-torsional.component';

import { SectionsService } from '../../../shared/sections/sections.service';
import { ModelPriceSection } from '../../../shared/sections/model-price-section';

@Component({
  selector: 'app-torsional',
  templateUrl: './torsional.component.html',
  styleUrls: ['./torsional.component.css']
})
export class TorsionalComponent implements OnInit {

  public viewsPanels: ViewPanel[];
  public typesPanels: TypePanel[];
  public colorsPanelsWood: ColorPanelWood[];
  public colorsPanelsRal: ColorPanelRal[];
  public facingPanels: FacingPremium[];
  public acsessuars: AcsessuarSections[];

  public priceRsd02: ModelPriceSection[];

  public constructions: Construction[];
  public size: Size[];

  @ViewChild(MadalFormOrderTorsionalComponent)
  madalFormOrderTorsional: MadalFormOrderTorsionalComponent;

  constructor(@Inject(WINDOW) private window: Window,
    @Inject(forwardRef(() => SectionsService))
    public sectionsService: SectionsService,
  ) {}

  ngOnInit() {
    this.sectionsService.getPriceRsd02().then(result => this.priceRsd02 = result);

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
    this.facingPanels = this.sectionsService.getFacingPremium([
      'classic01',
      'classic02',
      'classic03',
      'classic04',
      'country01',
      'country02',
      'country03',
      'country04',
      'hiTech01',
      'hiTech02',
      'hiTech03',
      'hiTech04',
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
      'windowBrownRomb',
      'wicket'
    ]);

    this.constructions = Constructions;
    this.size = CharacteristicSize;
  }

  showModalOrder(title) {
    this.madalFormOrderTorsional.openModal(title);
  }
}
