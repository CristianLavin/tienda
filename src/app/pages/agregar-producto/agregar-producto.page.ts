import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: 'agregar-producto.page.html',
  styleUrls: ['agregar-producto.page.scss'],
})
export class AgregarProductoPage {
  nombre: string = "";
  precio: number = 0;
  imagen: string = "";
  descripcion: string = "";
  stock: number = 0;
  tipo: string = "";
  constructor(private firestore: AngularFirestore,
    private alertController: AlertController) { }
  async agregarProducto() {
    console.log('Agregando producto:', this.nombre, this.precio, this.imagen, this.descripcion, this.stock, this.tipo);

    try {
      await this.firestore.collection('Producto').add({
        nombre: this.nombre,
        precio: this.precio,
        imagen: this.imagen,
        descripcion: this.descripcion,
        stock: this.stock,
        tipo: this.tipo
      });

      this.mostrarAlerta('Éxito', 'Producto agregado con éxito.');
    } catch (error) {
      console.error('Error al agregar el producto: ', error);
      this.mostrarAlerta('Error', 'Hubo un error al agregar el producto.');
    }
  }

  async mostrarAlerta(titulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }

}
