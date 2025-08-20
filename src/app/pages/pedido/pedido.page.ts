import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from 'src/app/services/carrito.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
})
export class PedidoPage {
  pedidos: Observable<any[]> = new Observable<any[]>();

  constructor(
    private router: Router,
    private cartService: CarritoService,
    private firestore: AngularFirestore
  ) {}

  ngOnInit() {
    this.pedidos = this.firestore.collection('Pedido').valueChanges();
  }

  eliminarPedido() {
    this.cartService.eliminarPedido();
  }

  calcularTotal(cantidad: number, precio: number): number {
    return cantidad * precio;
  }

  home() {
    this.router.navigate(['/home']);
  }

  // Método para eliminar duplicados en base al nombre del producto
  obtenerPedidosUnicos(pedidos: any[]): any[] {
    const uniquePedidos = Array.from(new Set(pedidos.map(pedido => pedido.productos['0'].nombre)))
      .map(nombre => pedidos.find(pedido => pedido.productos['0'].nombre === nombre));
    return uniquePedidos;
  }
}
