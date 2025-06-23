import { Component, OnInit } from '@angular/core';
import { AlertController, IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';
import { Cuidador, CuidadorService } from 'src/app/services/cuidador.service';

@Component({
  selector: 'app-cuidadores',
  templateUrl: './cuidadores.page.html',
  styleUrls: ['./cuidadores.page.scss'],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ],
  standalone: true,
})
export class CuidadoresPage implements OnInit {
  cuidadores: Cuidador[] = [];

  constructor(
    private router: Router,
    private cuidadorSevice: CuidadorService,
    private alertContoller: AlertController,
  ) { }

  ngOnInit() {
    this.cuidadorSevice.getCuidadores().subscribe(res => {
      this.cuidadores = res;
    });
  }

  addCuidador() {
    this.router.navigateByUrl(`/cuidadores/cuidadoresDetalhe/`);
  }

  editCuidador(cuidador: Cuidador) {
    this.router.navigateByUrl(`/cuidadores/cuidadoresDetalhe/${cuidador.id}`);
  }

  deleteCuidador(id: string | undefined) {
    if (!id) return;

    const alert = this.alertContoller.create({
      header: 'Confirmar exclusão',
      message: 'Tem certeza que deseja excluir este cuidador?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Excluir',
          handler: () => {
            this.cuidadorSevice.deleteCuidador(id);
          }
        }
      ],
    });
  }
}
