import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Experiencia } from '../../providers/experiencia';

@Component({
  selector: 'page-page4',
  templateUrl: 'page4.html'
})
export class Page4 {

empresa;
funcao;
admissao;

  constructor(
  public navCtrl: NavController,
  public Experiencia:Experiencia){
    this.empresa= this.Experiencia.getEmpresa();
    this.funcao= this.Experiencia.getFuncao();
    this.admissao= this.Experiencia.getAdmissao();
  }

}
