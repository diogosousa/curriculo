import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class Objetivo {

obj = "Ajudar no desenvolvimento da empresa, adquirindo experiencia, auxiliando na agragação de valores e me disponibilizar as necessidades referentes a função contrada"

  constructor(public http: Http) {
    console.log('Hello Objetivo Provider');
  }

  getObj() {
    return this.obj;

  }


}
