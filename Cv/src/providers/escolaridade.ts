import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class Escolaridade {

f1 = "Ensino fundamental"
f2= "Curso Informatica"
f3="Curso Profissionalizante"
f4="Analise de Sistemas"




  constructor(public http: Http) {
    console.log('Hello Escolaridade Provider');
  }

  getF1() {
    return this.f1;

  }
  getF2() {
    return this.f2;

  }
  getF3() {
    return this.f3;

  }
  getF4() {
    return this.f4;

  }


}
