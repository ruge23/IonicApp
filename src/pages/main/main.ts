import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})

export class MainPage {
  
  time ;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToHome(){
    const animationsOptions = {
      animation : 'md-transition',
      duration: 1000,
    }
     this.time = setTimeout(() => {
      this.navCtrl.push(HomePage, {}, animationsOptions)
    }, 500)
  }

}
