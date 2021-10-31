import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
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

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
