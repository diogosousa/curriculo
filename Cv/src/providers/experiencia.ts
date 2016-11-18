import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class Experiencia {

empresa = "Ofner"
funcao= "Faturista"
admissao="01/05/2010"





  constructor(public http: Http) {
    console.log('Hello Escolaridade Provider');
  }

  getEmpresa() {
    return this.empresa;

  }
  getFuncao() {
    return this.funcao;

  }
  getAdmissao() {
    return this.admissao;

  }


}
