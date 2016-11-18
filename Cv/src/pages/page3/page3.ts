import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Objetivo } from '../../providers/objetivo';

@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html'
})
export class Page3 {
obj;

  constructor(
  public navCtrl: NavController,
  public Objetivo: Objetivo){
    this.obj= this.Objetivo.getObj();
  }

}
