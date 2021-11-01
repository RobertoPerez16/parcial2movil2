import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EncuestaEstresPageRoutingModule } from './encuesta-estres-routing.module';

import { EncuestaEstresPage } from './encuesta-estres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EncuestaEstresPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EncuestaEstresPage]
})
export class EncuestaEstresPageModule {}
