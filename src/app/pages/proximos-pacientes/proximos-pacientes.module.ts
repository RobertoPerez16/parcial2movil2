import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProximosPacientesPageRoutingModule } from './proximos-pacientes-routing.module';

import { ProximosPacientesPage } from './proximos-pacientes.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProximosPacientesPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ProximosPacientesPage]
})
export class ProximosPacientesPageModule {}
