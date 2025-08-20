import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Producto } from '../producto';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor(private firestore: AngularFirestore) { }
  agregarProducto(producto: Producto) {
    const productoData = Object.assign({}, producto);
    this.firestore.collection('carrito').add(productoData);
  }

  ObtenerProducto() {
    // Esto te permitirá obtener todos los productos en el carrito.
    return this.firestore.collection('carrito').snapshotChanges();
  }

  ObtenerPedido() {

    return this.firestore.collection('Pedido').snapshotChanges();
  }

  eliminarProducto(idProducto: string) {
    // Lógica para eliminar un producto por su id
    this.firestore.doc('carrito/' + idProducto).delete();
  }

  vaciarCarrito() {
    // Consulta todos los documentos en la colección 'carrito' y elimínalos uno por uno.
    this.firestore.collection('carrito').get().subscribe(snapshot => {
      snapshot.forEach(doc => {
        this.firestore.doc('carrito/' + doc.id).delete();
      });
    });
  }
  eliminarPedido() {
    // Consulta todos los documentos en la colección 'carrito' y elimínalos uno por uno.
    this.firestore.collection('Pedido').get().subscribe(snapshot => {
      snapshot.forEach(doc => {
        this.firestore.doc('Pedido/' + doc.id).delete();
      });
    });
  }

  aumentarCantidad(idProducto: string) {
    // Recupera el producto por su id
    const productoRef = this.firestore.collection('carrito').doc(idProducto);

    productoRef.get().subscribe((doc) => {
      if (doc.exists) {
        const producto = doc.data() as Producto;
        // Aumenta la cantidad
        producto.cantidad += 1;
        producto.total = producto.precio * producto.cantidad;

        // Actualiza el producto en la base de datos
        productoRef.update(producto);
      }
    });
  }

  disminuirCantidad(idProducto: string) {
    // Recupera el producto por su id
    const productoRef = this.firestore.collection('carrito').doc(idProducto);

    productoRef.get().subscribe((doc) => {
      if (doc.exists) {
        const producto = doc.data() as Producto;
        // Disminuye la cantidad si es mayor que 1
        if (producto.cantidad > 1) {
          producto.cantidad -= 1;
          producto.total = producto.precio * producto.cantidad;


          // Actualiza el producto en la base de datos
          productoRef.update(producto);
        }
      }
    });
  }
  aceptarPedido() {
    // Obtener los productos en el carrito
    this.ObtenerProducto().subscribe((productos: any[]) => {
      // Verificar si hay productos antes de crear el pedido
      if (productos.length > 0) {
        // Crear un objeto para representar el pedido
        const pedido: any = {
          productos: productos.map(producto => ({
            id: producto.payload.doc.id,
            nombre: producto.payload.doc.data().nombre,
            precio: producto.payload.doc.data().precio,
            cantidad: producto.payload.doc.data().cantidad,
            imageUrl: producto.payload.doc.data().imageUrl,
            fecha: new Date()
          }))
        };

        // Agregar el pedido a la colección "Pedido"
        this.firestore.collection('Pedido').add(pedido).then(() => {

        }).catch(error => {
          console.error('Error al agregar el pedido:', error);
        });
      } else {
        console.warn('No hay productos en el carrito.');
      }
    });
  }

  actualizarStock(idProducto: string) {
    // Recupera el producto del carrito por su id
    const carritoRef = this.firestore.collection('carrito').doc(idProducto);
  
    carritoRef.get().subscribe((docCarrito) => {
      if (docCarrito.exists) {
        const productoCarrito = docCarrito.data() as Producto;
        
        // Recupera el producto de la colección "Producto" por su nombre
        this.firestore.collection('Producto', ref => ref.where('nombre', '==', productoCarrito.nombre))
          .get()
          .subscribe(querySnapshot => {
            if (!querySnapshot.empty) {
              const productoProducto = querySnapshot.docs[0].data() as Producto;
  
              if (productoCarrito.cantidad > 0 && productoProducto.stock >= productoCarrito.cantidad) {
                productoProducto.stock -= productoCarrito.cantidad;
  
                // Actualiza el stock del producto en la colección "Producto"
                this.firestore.collection('Producto').doc(querySnapshot.docs[0].id).update(productoProducto);
              } else {
                console.error('Error: No hay suficiente stock disponible.');
              }
            } else {
              console.error('Error: No se encontró el producto en la colección "Producto".');
            }
          });
      }
    });
  }
  
}