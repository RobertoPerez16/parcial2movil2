import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleTallerPage } from './detalle-taller.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleTallerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleTallerPageRoutingModule {}
