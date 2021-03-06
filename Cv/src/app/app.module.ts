import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Page3 } from '../pages/page3/page3';
import { Page4 } from '../pages/page4/page4';
import { Perfil } from '../providers/perfil';
import { Escolaridade } from '../providers/escolaridade';
import { Objetivo } from '../providers/objetivo';
import { Experiencia } from '../providers/experiencia';


@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    Page3,
    Page4
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    Page3,
    Page4
  ],
  providers: [
    [Perfil],
    [Escolaridade],
    [Objetivo],
    [Experiencia]
  ]
})
export class AppModule {}
