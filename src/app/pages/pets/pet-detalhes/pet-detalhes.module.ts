import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PetDetalhesPageRoutingModule } from './pet-detalhes-routing.module';

import { PetDetalhesPage } from './pet-detalhes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PetDetalhesPageRoutingModule
  ],
})
export class PetDetalhesPageModule {}
