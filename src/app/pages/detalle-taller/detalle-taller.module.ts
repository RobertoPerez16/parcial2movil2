import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleTallerPageRoutingModule } from './detalle-taller-routing.module';

import { DetalleTallerPage } from './detalle-taller.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleTallerPageRoutingModule
  ],
  declarations: [DetalleTallerPage]
})
export class DetalleTallerPageModule {}
