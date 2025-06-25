import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuidadoresPage } from './cuidadores.page';

const routes: Routes = [
  {
    path: '',
    component: CuidadoresPage
  },
  {
    path: 'cuidador-detalhes',
    loadChildren: () => import('./cuidador-detalhes/cuidador-detalhes.module').then(m => m.CuidadorDetalhesPageModule)
  },
  {
    path: 'cuidador-detalhes/:id',
    loadChildren: () => import('./cuidador-detalhes/cuidador-detalhes.module').then(m => m.CuidadorDetalhesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuidadoresPageRoutingModule {}
