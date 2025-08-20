import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  constructor(private router: Router,
  ) { }

  login() {
    this.router.navigate(['/login']);
  }
  carrito() {
    this.router.navigate(['/carrito']);
  }
  perfil() {
    this.router.navigate(['/perfil']);
  }
  pedido() {
    this.router.navigate(['/pedido']);
  }
}

