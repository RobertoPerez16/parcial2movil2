import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearPacientePageRoutingModule } from './crear-paciente-routing.module';

import { CrearPacientePage } from './crear-paciente.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      CrearPacientePageRoutingModule,
      ReactiveFormsModule,
  ],
  declarations: [CrearPacientePage]
})
export class CrearPacientePageModule {}
