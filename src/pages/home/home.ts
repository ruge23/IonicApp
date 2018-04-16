import { Component} from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { MainPage } from '../main/main';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  animations: [
    trigger ('elementState', [
      state('transparent', style({
        opacity : 0,
      })),
      state('opaque', style({
        opacity: 1,
      })),
      transition('opaque => transparent', animate ('2000ms ease-in')),
      transition('transparent => opaque', animate('2000ms ease-in'))  
    ]),
    trigger('elementState1', [
      state('transparent', style({
        opacity: 0,
      })),
      state('opaque', style({
        opacity:1,
      })),
      transition('opaque => transparent', animate ('2000ms ease-in')),
      transition('transparent => opaque', animate('2000ms ease-in'))
    ]),
    trigger('elementState2', [
      state('transparent', style({
        opacity: 0,
      })),
      state('opaque', style({
        opacity:1,
      })),
      transition('opaque => transparent', animate ('2000ms ease-in')),
      transition('transparent => opaque', animate('2000ms ease-in'))
    ]),
    trigger('elementState2', [
      state('transparent', style({
        opacity: 0,
      })),
      state('opaque', style({
        opacity:1,
      })),
      transition('opaque => transparent', animate ('2000ms ease-in')),
      transition('transparent => opaque', animate('2000ms ease-in'))
    ]),
    trigger('elementState3', [
      state('transparent', style({
        opacity: 0,
      })),
      state('opaque', style({
        opacity:1,
      })),
      transition('opaque => transparent', animate ('2000ms ease-in')),
      transition('transparent => opaque', animate('2000ms ease-in'))
    ]),
    trigger('elementState4', [
      state('transparent', style({
        opacity: 0,
      })),
      state('opaque', style({
        opacity:1,
      })),
      transition('opaque => transparent', animate ('2000ms ease-in')),
      transition('transparent => opaque', animate('2000ms ease-in'))
    ]),
    trigger('elementState5', [
      state('transparent', style({
        opacity: 0,
      })),
      state('opaque', style({
        opacity:1,
      })),
      transition('opaque => transparent', animate ('2000ms ease-in')),
      transition('transparent => opaque', animate('2000ms ease-in'))
    ]),
    trigger('elementState6', [
      state('transparent', style({
        opacity: 0,
      })),
      state('opaque', style({
        opacity:1,
      })),
      transition('opaque => transparent', animate ('2000ms ease-in')),
      transition('transparent => opaque', animate('2000ms ease-in'))
    ]),
    trigger('elementState7', [
      state('transparent', style({
        opacity: 0,
      })),
      state('opaque', style({
        opacity:1,
      })),
      transition('opaque => transparent', animate ('2000ms ease-in')),
      transition('transparent => opaque', animate('2000ms ease-in'))
    ]),
    trigger('elementState8', [
      state('transparent', style({
        opacity: 0,
      })),
      state('opaque', style({
        opacity:1,
      })),
      transition('opaque => transparent', animate ('2000ms ease-in')),
      transition('transparent => opaque', animate('2000ms ease-in'))
    ]),
    trigger('elementState9', [
      state('transparent', style({
        opacity: 0,
      })),
      state('opaque', style({
        opacity:1,
      })),
      transition('opaque => transparent', animate ('2000ms ease-in')),
      transition('transparent => opaque', animate('2000ms ease-in'))
    ]),
  ]
})

export class HomePage {

  state = 'transparent';
  state1 = 'transparent';
  state2 = 'transparent';
  state3 = 'transparent';
  state4 = 'transparent';
  state5 = 'transparent';
  state6 = 'transparent';
  state7 = 'transparent';
  state8 = 'transparent';
  state9 = 'transparent';

  @ViewChild(Slides) slides: Slides;

  ngAfterViewInit(){
    console.log('estas es!');
    this.slides.freeMode = true;
    
    setTimeout(() =>{
      this.state = 'opaque'
    },500)

    setTimeout(()=> {
      this.state1= 'opaque'
    },3000)
  }

  constructor(public navCtrl: NavController) {

  }

  time;
  
  next(){
    this.slides.slideNext(1000);
  }

  prev(){
    this.slides.slidePrev(1000);
  }

  goToMain(){
    const animationOptions = {
      animation : 'md-transition',
      duration: 1000,
    }
    this.navCtrl.push(MainPage, {}, animationOptions);
  }
  
  animationSlides(){  
    if(this.slides.getActiveIndex() === 0){
      setTimeout(() =>{
        this.state = 'opaque'
      },500)
  
      setTimeout(()=> {
        this.state1= 'opaque'
      },5000)
    }else{
      this.state = 'transparent';
      this.state1 = 'transparent';
    }
    if(this.slides.getActiveIndex() === 1){
      setTimeout(() => {
        this.state2 = 'opaque';
      },1500)
    }else{
      this.state2 = 'transparent';
    }
    if(this.slides.getActiveIndex() === 2){
      setTimeout(()=>{
        this.state3 = 'opaque';
      },1000)
      setTimeout(()=>{
        this.state4 = 'opaque';
      },2000)
      setTimeout(()=>{
        this.state5 = 'opaque';
      },3000)
    }else{
      this.state3 = 'transparent';
      this.state4 = 'transparent';
      this.state5 = 'transparent';
    }
    if(this.slides.getActiveIndex() === 3){
      setTimeout(()=>{
        this.state7 = 'opaque';
      },1000)
      setTimeout(()=>{
        this.state6 = 'opaque';
      },2000)
    }else{
      this.state6 = 'transparent';
      this.state7 = 'transparent';
    }
    if(this.slides.getActiveIndex() === 4){
      setTimeout(()=>{
        this.state9 = 'opaque';
      },1000)
      setTimeout(()=>{
        this.state8 = 'opaque';
      },2000)
    }else{
      this.state8 = 'transparent';
      this.state9 = 'transparent';
    }
  }

  changeSlide(){   
    setTimeout(()=>{
      this.animationSlides();
    },1000)
  }

  redirectToMainPage(){
    this.animationSlides();

    if(this.slides.isEnd()){
      this.time = setTimeout(()=>{
        this.goToMain();
      }, 15000) 
    }else{
      clearTimeout(this.time);
    }
  }
}



      
