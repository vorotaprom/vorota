import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CatalogService } from '../../shared/catalog/catalog.service';
import { Catalog } from '../../shared/catalog/catalog';

@Component({
  selector: 'app-home-cotalog',
  templateUrl: './home-cotalog.component.html',
  styleUrls: ['./home-cotalog.component.css']
})
export class HomeCotalogComponent implements OnInit {

  homeCatalog: Catalog[];

  constructor(
    @Inject(forwardRef(() => Router))
    private router: Router,
    @Inject(forwardRef(() => ActivatedRoute))
    private activatedRouter: ActivatedRoute,
    @Inject(forwardRef(() => CatalogService))
    private catalogService: CatalogService
  ) { }

  ngOnInit() {
    this.catalogService.getCatalog().then(result => this.homeCatalog = result);
  }

  public onSelect() {
    document.documentElement.scrollTop = 0;
  }
}
