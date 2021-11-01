import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EncuestaEstresPage } from './encuesta-estres.page';

const routes: Routes = [
  {
    path: '',
    component: EncuestaEstresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EncuestaEstresPageRoutingModule {}
