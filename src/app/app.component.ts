import { WINDOW } from '@ng-toolkit/universal';
import { Component , Inject} from '@angular/core';
import { MetaService } from 'ng2-meta';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public afterLine = false;
  public mainLine = false;
  public beforeLine = false;
  public dropMenuShow = false;

  public headerBg = false;

  public triger = true;
 constructor(
   @Inject(WINDOW) private window: Window,
   private metaService: MetaService
  ) {}


  public showMenu() {
    if (this.triger) {
      this.afterLine = true;
      this.mainLine = true;
      this.beforeLine = true;
      this.dropMenuShow = true;
      this.headerBg = true;
      this.triger = false;
    } else {
      this.afterLine = false;
      this.mainLine = false;
      this.beforeLine = false;
      this.dropMenuShow = false;
      this.headerBg = false;
      this.triger = true;
    }
  }
  public onResize(event) {
    if (this.window.innerWidth >= 991) {
      this.afterLine = false;
      this.mainLine = false;
      this.beforeLine = false;
      this.dropMenuShow = false;
      this.headerBg = false;

      this.triger = true;
    }
  }
  public onClosedMenu() {
    this.afterLine = false;
      this.mainLine = false;
      this.beforeLine = false;
      this.dropMenuShow = false;
      this.headerBg = false;

      this.triger = true;
  }
}

