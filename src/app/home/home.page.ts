import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor(private router: Router) {}

  petsPage() {
    this.router.navigateByUrl('/pets');
  }

  cuidadoresPage() {
    this.router.navigateByUrl('/cuidadores');
  }

}
