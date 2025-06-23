import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetDetalhesPage } from './pet-detalhes.page';

const routes: Routes = [
  {
    path: '',
    component: PetDetalhesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetDetalhesPageRoutingModule {}
