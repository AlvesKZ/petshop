import { Component, OnInit } from '@angular/core';
import { AlertController, IonicModule, LoadingController, ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Pet, PetService } from '../../../services/pet.service'
import { ActivatedRoute, Router } from '@angular/router';

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
  pet: Pet = {
    nome: '',
    especie: '',
    raca: '',
    idade: 0,
    observacoes: undefined,
  };

  petId: string | null = null;
  novoPet: boolean = true;

  constructor(private route: ActivatedRoute, private petService: PetService, private router: Router,
    private loadingController: LoadingController, private toastController: ToastController) { }

  ngOnInit() {
    this.petId = this.route.snapshot.paramMap.get('id');
    if (this.petId) {
      this.novoPet = false;
      this.carregaPet();
    }
  }

  async carregaPet() {
  const carregamento = await this.loadingController.create({
    message: 'Carregando pet...',
  });

  await carregamento.present();

  this.petService.getPet(this.petId!).subscribe(res => {
    carregamento.dismiss();

    if (res) {
      this.pet = res;
    } else {
      this.presentToast('Pet não encontrado!', 'danger');
      this.router.navigateByUrl('/pets');
    }
  }, err => {
    carregamento.dismiss();
    this.presentToast('Erro ao carregar pet.', 'danger');
    this.router.navigateByUrl('/pets');
  });
}
  

  async salvarPet() {
    const carregamento = await this.loadingController.create({
      message: 'Salvando pet...',
    });
    await carregamento.present();

    if (this.novoPet) {
      this.petService.addPet(this.pet).then(() => {
        carregamento.dismiss();
        this.presentToast('Pet adicionado com sucesso!', 'success');
        this.router.navigateByUrl('/pets');
      }, err => {
        carregamento.dismiss();
        this.presentToast('Erro ao adicionar pet.', 'danger');
      });
    } else {
      this.petService.updatePet(this.pet).then(() => {
        carregamento.dismiss();
        this.presentToast('Pet atualizado com sucesso!', 'success');
        this.router.navigateByUrl('/pets');
      }, err => {
        carregamento.dismiss();
        this.presentToast('Erro ao atualizar pet', 'danger');
      });
    }
  }

  async presentToast(mensagem: string, cor: string = 'primary') {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 200,
      color: cor,
    });

    toast.present();
  }

}
