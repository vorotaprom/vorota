import { Inject } from '@angular/core';
import { WINDOW } from '@ng-toolkit/universal';
import {
  Component,
  OnInit,
  forwardRef
} from '@angular/core';

import { CaruselService } from '../../shared/carusel/carusel.service';
import { Carusel } from '../../shared/carusel/carusel';

import { WOW } from '../../../../node_modules/wowjs/dist/wow';

@Component({
  selector: 'app-carusel',
  templateUrl: './carusel.component.html',
  styleUrls: ['./carusel.component.scss']
})
export class CaruselComponent implements OnInit {
  public innerHeight: String;
  public interval = 8000;
  public showIndicator = false;

  public caruselSlides: Carusel[];

  public wow: WOW;
  // private wowSubscription: Subscription;

  constructor(@Inject(WINDOW) private window: Window,
    @Inject(forwardRef(() => CaruselService))
    private caruselService: CaruselService,
  ) {
    this.innerHeight = window.innerHeight + 'px';

    const getWindow = () => {
      return window.innerHeight + 'px';
    };

    window.onresize = () => {
      this.innerHeight = getWindow();
    };
  }

  ngOnInit() {
    this.caruselService
      .gerCarusel()
      .then(result => (this.caruselSlides = result));
    this.wow = new WOW({
      live: false
    }).init();
  }
}
