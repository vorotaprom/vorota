import { Component, OnInit, Inject, forwardRef } from '@angular/core';

import { Size, Construction } from '../../../shared/idex';
import { CharacteristicSize, Constructions } from './characteristics';

import { ViewPanel } from '../../../shared/street/view-panel';
import { TypePanel } from '../../../shared/street/type-panel';
import { ColorPanelRal } from '../../../shared/street/color-panel';
import { Variant } from '../../../shared/street/variant';
import { FacingPremium } from '../../../shared/street/facing-premium';
import { AcsessuarStreet } from '../../../shared/street/acsessuar-street';

import { StreetService } from '../../../shared/street/street.service';

@Component({
  selector: 'app-recoiling',
  templateUrl: './recoiling.component.html',
  styleUrls: ['./recoiling.component.css']
})
export class RecoilingComponent implements OnInit {

  public viewsPanels: ViewPanel[];
  public typesPanels: TypePanel[];
  public colorsPanelsRal: ColorPanelRal[];
  public variants: Variant[];
  public facingPanels: FacingPremium[];
  public acsessuars: AcsessuarStreet[];

  public constructions: Construction[];
  public size: Size[];

  constructor(
    @Inject(forwardRef(() => StreetService))
    public streetService: StreetService
  ) {}

  ngOnInit() {
    this.viewsPanels = this.streetService.getViewsPanels([
      'board',
      'panel',
      'gofr',
    ]);
    this.typesPanels = this.streetService.getTypesPanels([
      'wood',
      'stucco'
    ]);
    this.colorsPanelsRal = this.streetService.getColorsPanelsRal([
      'white',
      'brown',
      'brownRed',
      'blue',
      'green',
      'silver',
      'red',
      'gray',
      'anthracite',
      'ivory',
      'wineRred',
      'wenge',
      'goldenOak'
    ]);
    this.variants = this.streetService.getVariants([
      'sliding01',
      'sliding02',
      'sliding03',
      'sliding04',
      'sliding05',
      'sliding06',
    ]);
    this.facingPanels = this.streetService.getFacingPremium([
      'classic01',
      'classic02',
      'classic03'
    ]);
    this.acsessuars = this.streetService.getAcsessuars([
      'frame',
      'window',
      'automaticaSliding',
      'police',
      'photoCell',
      'lamp',
      'pult',
      'keySwich'
    ]);

    this.constructions = Constructions;
    this.size = CharacteristicSize;
  }
}
