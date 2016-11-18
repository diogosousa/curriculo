import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Perfil provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Perfil {

name = "Diogo Laureano de Sousa"
idade= "26 anos"
nascimento="18/03/1990"
estadoCivil="Solteiro"
nacionalidade="Brasileiro"



  constructor(public http: Http) {
    console.log('Hello Perfil Provider');
  }

  getName() {
    return this.name;

  }

    getIdade() {
    return this.idade;

  }

    getNascimento() {
    return this.nascimento;

  }

    getEstadoCivil() {
    return this.estadoCivil;

  }
    getNacionalidade() {
    return this.nacionalidade;

  }

}
