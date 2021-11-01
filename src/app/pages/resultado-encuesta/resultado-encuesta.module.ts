import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultadoEncuestaPageRoutingModule } from './resultado-encuesta-routing.module';

import { ResultadoEncuestaPage } from './resultado-encuesta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultadoEncuestaPageRoutingModule
  ],
  declarations: [ResultadoEncuestaPage]
})
export class ResultadoEncuestaPageModule {}
