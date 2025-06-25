import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuidadorDetalhesPageRoutingModule } from './cuidador-detalhes-routing.module';

import { CuidadorDetalhesPage } from './cuidador-detalhes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuidadorDetalhesPageRoutingModule
  ],
})
export class CuidadorDetalhesPageModule {}
