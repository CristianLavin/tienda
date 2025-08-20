import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage {

  constructor(private router: Router) { }

  home() {
    this.router.navigate(['/home']);
  }
  eliminarusuario() {
    this.router.navigate(['/eliminar-usuario']);
  }
  agregarusuario() {
    this.router.navigate(['/agregar-usuario']);
  }
  agregarproducto() {
    this.router.navigate(['/agregar-producto']);
  }
  eliminarproducto() {
    this.router.navigate(['/eliminar-producto']);
  }
  listarproducto() {
    this.router.navigate(['/listar-producto']);
  }
  listarusuario() {
    this.router.navigate(['/listar-usuario']);
  }
editarproducto(){
  this.router.navigate(['/editar-producto']);
}
editarusuario(){
  this.router.navigate(['/editar-usuario']);
}
}
