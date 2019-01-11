import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-slider-advantages',
  templateUrl: './slider-advantages.component.html',
  styleUrls: ['./slider-advantages.component.scss']
})
export class SliderAdvantagesComponent implements OnInit {

  constructor(@Inject(DOCUMENT) public document: Document) {}

  ngOnInit() {
    this.startSlide();
  }

  public startSlide() {
    setInterval(() => {
      let slides: any;
      let currentWidthSlide;
      slides = this.document.querySelectorAll('.slide-item');
      currentWidthSlide = slides[0].clientWidth;
      slides[0]['style'].marginLeft = `-${currentWidthSlide}px`;
      setTimeout(() => {
        slides[0].parentNode.appendChild(slides[0]);
        slides[0]['style'].marginLeft = 0;
      }, 2000);
    }, 5000);
  }
}
