import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearTallerPageRoutingModule } from './crear-taller-routing.module';

import { CrearTallerPage } from './crear-taller.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearTallerPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CrearTallerPage]
})
export class CrearTallerPageModule {}
