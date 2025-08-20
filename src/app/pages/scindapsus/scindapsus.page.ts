import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CarritoService } from 'src/app/services/carrito.service'; // Importa el servicio
import { Producto } from 'src/app/producto';

@Component({
  selector: 'app-scindapsus',
  templateUrl: './scindapsus.page.html',
  styleUrls: ['./scindapsus.page.scss'],
})
export class ScindapsusPage {
  Nombre: string = '';
  Imagen: string = '';
  Precio: number = 0;
  Descripcion: string = '';
  Cantidad: number = 1;
  Total: number=this.Precio * this.Cantidad;
  Stock: number = 99;
  constructor(private router: Router,private firestore: AngularFirestore,private cartService: CarritoService) { 
   
  }
  ngOnInit() {
    // **Scindapsus**
    // Realiza una consulta para obtener el documento específico
    this.firestore
      .collection('Producto')
      .doc('0Vklj18NCuvbCC1PVW4D') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Nombre = data.nombre; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });

      this.firestore
      .collection('Producto')
      .doc('0Vklj18NCuvbCC1PVW4D') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Imagen = data.imagen_url; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });

      

      this.firestore
      .collection('Producto')
      .doc('0Vklj18NCuvbCC1PVW4D') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Precio = data.precio; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });

      this.firestore
      .collection('Producto')
      .doc('0Vklj18NCuvbCC1PVW4D') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Descripcion = data.descripcion; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });

      this.firestore
      .collection('Producto')
      .doc('0Vklj18NCuvbCC1PVW4D') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Stock = data.stock; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });
    }
  carrito() {
    const producto: Producto = {
      id: '0Vklj18NCuvbCC1PVW4D', // ID del producto, asegúrate de obtenerlo de alguna manera
      nombre: this.Nombre,
      precio: this.Precio,
      imageUrl: this.Imagen,
      cantidad: this.Cantidad,
      total: this.Total,
      stock: this.Stock    
    };
  
    this.cartService.agregarProducto(producto);
    this.router.navigate(['/carrito']);
  }
}
