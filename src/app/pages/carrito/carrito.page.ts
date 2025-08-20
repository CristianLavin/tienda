import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { CarritoService } from 'src/app/services/carrito.service';
import { Producto } from 'src/app/producto';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  itemsInCart: Producto[] = [];

  constructor(
    private alertController: AlertController,
    private cartService: CarritoService,
    

  ) { }

  ngOnInit() {
    this.loadItemsInCart();
  }

  loadItemsInCart() {
    this.cartService.ObtenerProducto().subscribe((data: any) => {
      this.itemsInCart = data.map((e: any) => {
        const producto = e.payload.doc.data() as Producto;
        producto.id = e.payload.doc.id;
        return producto;
      });


    });
  }

  addToCart(producto: Producto) {
    this.cartService.agregarProducto(producto);
    this.loadItemsInCart();

  }

  removeToCart(idProducto: string) {
    this.cartService.eliminarProducto(idProducto);
    this.loadItemsInCart();
  }

  vaciarCarrito() {
    // Llama al servicio para eliminar todos los productos del carrito
    this.cartService.vaciarCarrito();
    // Luego, actualiza la lista de productos en el carrito
    this.loadItemsInCart();
  }

  calcularTotal(): number {
    let total = 0;
    for (const item of this.itemsInCart) {
      total += item.precio * item.cantidad;
    }
    return total;
  }
  aumentarCantidad(item: Producto) {
    this.cartService.aumentarCantidad(item.id); // Llama al método del servicio
    this.loadItemsInCart(); // Actualiza la lista de productos en el carrito
  }

  disminuirCantidad(item: Producto) {
    this.cartService.disminuirCantidad(item.id); // Llama al método del servicio
    this.loadItemsInCart(); // Actualiza la lista de productos en el carrito
  }
  // Función para agregar un pedido
  aceptarPedido() {
    this.cartService.aceptarPedido();
  }
  
  async mostrarMensajeCompraExitosa() {
    const alert = await this.alertController.create({
      header: 'Compra Exitosa',
      message: 'Su compra se ha realizado exitosamente.',
      buttons: ['OK']
    });

    await alert.present();
  }
  actualizarStockClick(idProducto: string) {
    this.cartService.actualizarStock(idProducto);
  }

  realizarPago() {
    // Realizar acciones para cada elemento en el carrito
    for (const item of this.itemsInCart) {
      // Actualizar el stock para cada elemento
      this.actualizarStockClick(item.id);
    }
  
    // Después de procesar todos los elementos, mostrar la alerta y aceptar el pedido
    this.mostrarMensajeCompraExitosa();
    this.aceptarPedido();
  }
  
}


