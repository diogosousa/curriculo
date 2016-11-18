import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Escolaridade } from '../../providers/escolaridade';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {
  f1;
  f2;
  f3;
  f4;

  constructor(
  public navCtrl: NavController,
  public Escolaridade: Escolaridade){

  this.f1 =this.Escolaridade.getF1() 
  this.f2=this.Escolaridade.getF2()
  this.f3=this.Escolaridade.getF3() 
  this.f4=this.Escolaridade.getF4()
  
}
}