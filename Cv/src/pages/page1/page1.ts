import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Perfil } from '../../providers/perfil';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  
  nome;
  idade;
  nascimento; 
  estadoCivil;
  nacionalidade;

  constructor(
  public navCtrl: NavController,
  public Perfil: Perfil){

  this.nome =this.Perfil.getName() 
  this.idade=this.Perfil.getIdade()
  this.nascimento=this.Perfil.getNascimento() 
  this.estadoCivil=this.Perfil.getEstadoCivil()
  this.nacionalidade=this.Perfil.getNacionalidade()
    
  }

}
