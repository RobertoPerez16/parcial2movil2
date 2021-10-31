import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearTallerPage } from './crear-taller.page';

const routes: Routes = [
  {
    path: '',
    component: CrearTallerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearTallerPageRoutingModule {}
