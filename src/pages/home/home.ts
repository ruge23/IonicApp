import { Component} from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
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
