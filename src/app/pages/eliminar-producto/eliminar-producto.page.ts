import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-eliminar-producto',
  templateUrl: './eliminar-producto.page.html',
  styleUrls: ['./eliminar-producto.page.scss'],
})
export class EliminarProductoPage {

  nombre: string = '';

  constructor(private firestore: AngularFirestore,
    private alertController: AlertController) { }

  async eliminarProducto() {
    try {
      // Busca un documento con el campo 'nombre' igual al valor proporcionado.
      const querySnapshot = await this.firestore.collection('Producto', ref => ref.where('nombre', '==', this.nombre)).get().toPromise();

      if (!querySnapshot.empty) {
        // Obtén la referencia al primer documento que coincide con la consulta.
        const productRef = querySnapshot.docs[0].ref;

        // Elimina el documento.
        await productRef.delete();
        console.log('Producto eliminado con nombre:', this.nombre);

        // Muestra un alerta indicando que el producto fue eliminado con éxito.
        this.mostrarAlerta('Éxito', 'Producto eliminado con éxito');

        // Limpia el campo de entrada después de eliminar el producto.
        this.nombre = '';
      } else {
        console.log('No se encontró ningún producto con el nombre proporcionado.');

        // Muestra un alerta indicando que no se encontró el producto.
        this.mostrarAlerta('Error', 'No se encontró ningún producto con el nombre proporcionado.');
      }
    } catch (error) {
      console.error('Error al eliminar el producto:', error);

      // Muestra un alerta indicando que hubo un error.
      this.mostrarAlerta('Error', 'Hubo un error al eliminar el producto.');
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
