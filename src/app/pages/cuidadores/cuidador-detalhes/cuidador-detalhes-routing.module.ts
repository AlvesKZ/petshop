import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuidadorDetalhesPage } from './cuidador-detalhes.page';

const routes: Routes = [
  {
    path: '',
    component: CuidadorDetalhesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuidadorDetalhesPageRoutingModule {}
