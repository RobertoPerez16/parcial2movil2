import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultadoEncuestaPage } from './resultado-encuesta.page';

const routes: Routes = [
  {
    path: '',
    component: ResultadoEncuestaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultadoEncuestaPageRoutingModule {}
