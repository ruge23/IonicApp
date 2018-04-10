import { Component, trigger, transition, style, state, animate, keyframes } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  /*
  animations:[
    trigger('bounce', [
      state('*', style({
          transform: 'translateX(0)'
      })),
      transition('* => rightSwipe', animate('700ms ease-out', keyframes([
        style({transform: 'translateX(0)', offset: 0}),
        style({transform: 'translateX(-65px)',  offset: 0.3}),
        style({transform: 'translateX(0)',     offset: 1.0})
      ]))),
      transition('* => leftSwipe', animate('700ms ease-out', keyframes([
        style({transform: 'translateX(0)', offset: 0}),
        style({transform: 'translateX(65px)',  offset: 0.3}),
        style({transform: 'translateX(0)',     offset: 1.0})
      ])))
    ])
  ]
  */
})
export class HomePage {

  @ViewChild(Slides) slides: Slides;
  /*
  skipMsg: String = 'Skip';
  state : String = 'x';
  */
  constructor(public navCtrl: NavController) {

  }
  currentIndex = 0;

  onSlideChanged() {
    this.currentIndex = this.slides.getActiveIndex();
    console.log('Slide changed! Current index is', this.currentIndex);
  }
  next(){
    this.slides.slideNext();
  }

  prev(){
    this.slides.slidePrev();
  }

}
