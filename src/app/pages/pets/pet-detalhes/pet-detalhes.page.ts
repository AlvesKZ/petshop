import { Component, OnInit } from '@angular/core';
import { AlertController, IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pet-detalhes',
  templateUrl: './pet-detalhes.page.html',
  styleUrls: ['./pet-detalhes.page.scss'],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ],
  standalone: true,
})
export class PetDetalhesPage implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

}
