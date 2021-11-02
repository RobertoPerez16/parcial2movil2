import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home/home',
    pathMatch: 'full'
  },
  {
    path: 'crear-paciente',
    loadChildren: () => import('./pages/crear-paciente/crear-paciente.module').then( m => m.CrearPacientePageModule)
  },
  {
    path: 'crear-taller',
    loadChildren: () => import('./pages/crear-taller/crear-taller.module').then( m => m.CrearTallerPageModule)
  },
  {
    path: 'detalle-taller/:id',
    loadChildren: () => import('./pages/detalle-taller/detalle-taller.module').then( m => m.DetalleTallerPageModule)
  },
  {
    path: 'encuesta-estres',
    loadChildren: () => import('./pages/encuesta-estres/encuesta-estres.module').then( m => m.EncuestaEstresPageModule)
  },
  {
    path: 'resultado-encuesta/:datos',
    loadChildren: () => import('./pages/resultado-encuesta/resultado-encuesta.module').then( m => m.ResultadoEncuestaPageModule)
  },
  {
    path: 'proximos-pacientes',
    loadChildren: () => import('./pages/proximos-pacientes/proximos-pacientes.module').then( m => m.ProximosPacientesPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
