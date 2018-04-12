import { Component} from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { MainPage } from '../main/main';

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
  time;
  
  next(){
    this.slides.slideNext(1500, true);
  }

  prev(){
    this.slides.slidePrev(1500, true);
  }

  redirectToMainPage(){
    console.log('aqui', this.slides.isEnd())
    if(this.slides.isEnd()){
      this.time = setTimeout(()=>{
        this.navCtrl.push(MainPage);
      }, 10000) 
    }else{
      clearTimeout(this.time);
    }
  }
}


      
