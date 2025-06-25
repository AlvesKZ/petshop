import { Component, OnInit } from '@angular/core';
import { AlertController, IonicModule, LoadingController, ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cuidador, CuidadorService } from '../../../services/cuidador.service'; // Você precisa criar este serviço
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cuidador-detalhes',
  templateUrl: './cuidador-detalhes.page.html',
  styleUrls: ['./cuidador-detalhes.page.scss'],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ],
  standalone: true,
})
export class CuidadorDetalhesPage implements OnInit {
  cuidador: Cuidador = {
    nome: '',
    telefone: '',
    experiencia: NaN,
    especialidades: '',
  };

  cuidadorId: string | null = null;
  novoCuidador: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private cuidadorService: CuidadorService,
    private router: Router,
    private loadingController: LoadingController,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.cuidadorId = this.route.snapshot.paramMap.get('id');
    if (this.cuidadorId) {
      this.novoCuidador = false;
      this.carregaCuidador();
    }
  }

  async carregaCuidador() {
    const carregamento = await this.loadingController.create({
      message: 'Carregando cuidador...',
    });
    await carregamento.present();

    this.cuidadorService.getCuidador(this.cuidadorId!).subscribe(res => {
      carregamento.dismiss();
      if (res) {
        this.cuidador = res;
      } else {
        this.presentToast('Cuidador não encontrado!', 'danger');
        this.router.navigateByUrl('/cuidadores');
      }
    }, err => {
      carregamento.dismiss();
      this.presentToast('Erro ao carregar cuidador.', 'danger');
      this.router.navigateByUrl('/cuidadores');
    });
  }

  async salvarCuidador() {
    const carregamento = await this.loadingController.create({
      message: 'Salvando cuidador...',
    });
    await carregamento.present();

    if (this.novoCuidador) {
      this.cuidadorService.addCuidador(this.cuidador).then(() => {
        carregamento.dismiss();
        this.presentToast('Cuidador adicionado com sucesso!', 'success');
        this.router.navigateByUrl('/cuidadores');
      }, err => {
        carregamento.dismiss();
        this.presentToast('Erro ao adicionar cuidador.', 'danger');
      });
    } else {
      this.cuidadorService.updateCuidador(this.cuidador).then(() => {
        carregamento.dismiss();
        this.presentToast('Cuidador atualizado com sucesso!', 'success');
        this.router.navigateByUrl('/cuidadores');
      }, err => {
        carregamento.dismiss();
        this.presentToast('Erro ao atualizar cuidador', 'danger');
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
