import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MainPage } from '../main/main';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  skipMsg: String = "Skip";

  constructor(public navCtrl: NavController) {

  }

  skip(){
    this.navCtrl.push(MainPage);
  }

}
