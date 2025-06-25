import { Component, OnInit } from '@angular/core';
import { AlertController, IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';
import { Pet, PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.page.html',
  styleUrls: ['./pets.page.scss'],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ],
  standalone: true,
})
export class PetsPage implements OnInit {
  pets: Pet[] = [];

  constructor(
    private router: Router,
    private petService: PetService,
    private alertContoller: AlertController,
  ) { }

  ngOnInit() {
    this.petService.getPets().subscribe(res => {
      this.pets = res;
    });
  }

  addPet() {
    this.router.navigateByUrl(`/pets/pet-detalhes/`);
  }

  editPet(pet: Pet) {
    this.router.navigateByUrl(`/pets/pet-detalhes/${pet.id}`);
  }

  deletePet(id: string | undefined) {
    if (!id) return;

    const alert = this.alertContoller.create({
      header: 'Confirmar exclusão',
      message: 'Tem certeza que deseja excluir este pet?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Excluir',
          handler: () => {
            this.petService.deletePet(id);
          }
        }
      ],
    });
  }
}
