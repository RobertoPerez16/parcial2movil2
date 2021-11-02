import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProximosPacientesPage } from './proximos-pacientes.page';

const routes: Routes = [
  {
    path: '',
    component: ProximosPacientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProximosPacientesPageRoutingModule {}
