import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.page.html',
  styleUrls: ['./editar-producto.page.scss'],
})
export class EditarProductoPage implements OnInit {
  productos: any[] = [];

  constructor(private firestore: AngularFirestore,
    private alertController: AlertController) { }

    ngOnInit() {
      this.obtenerProductos();
    }
  
    obtenerProductos() {
      this.firestore.collection('Producto').snapshotChanges().subscribe(productos => {
        this.productos = productos.map(producto => {
          const data = producto.payload.doc.data() as any;
          const id = producto.payload.doc.id;
          return { id, ...data } as any;
        });
        console.log('Productos obtenidos:', this.productos);
      });
    }
  
    async editarProducto(producto: any) {
      const productoRef = this.firestore.collection('Producto').doc(producto.id);
  
      const datosActualizados = {
        nombre: producto.nombre,
        stock: producto.stock,
        tipo: producto.tipo,
        descripcion: producto.descripcion,
        imagen_url: producto.imagen_url,
        precio: producto.precio
      };
  
      try {
        await productoRef.update(datosActualizados);
        this.mostrarAlerta('Éxito', 'Producto editado exitosamente.');
      } catch (error) {
        console.error('Error al actualizar el producto:', error);
        this.mostrarAlerta('Error', 'Hubo un problema al editar el producto.');
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