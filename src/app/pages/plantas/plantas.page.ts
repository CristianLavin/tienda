import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-plantas',
  templateUrl: './plantas.page.html',
  styleUrls: ['./plantas.page.scss'],
})
export class PlantasPage {

  Nombre: string = '';
  Imagen: string = '';
  Precio: number = 0;
  Nombre2: string = '';
  Imagen2: string = '';
  Precio2: number = 0;
  Nombre3: string = '';
  Imagen3: string = '';
  Precio3: number = 0;
  Nombre4: string = '';
  Imagen4: string = '';
  Precio4: number = 0;
  Nombre5: string = '';
  Imagen5: string = '';
  Precio5: number = 0;
  Nombre6: string = '';
  Imagen6: string = '';
  Precio6: number = 0;
  Nombre7: string = '';
  Imagen7: string = '';
  Precio7: number = 0;
  Nombre8: string = '';
  Imagen8: string = '';
  Precio8: number = 0;
  Stock: number = 0;
  Stock2: number = 0;
  Stock3: number = 0;
  Stock4: number = 0;
  Stock5: number = 0;
  Stock6: number = 0;
  Stock7: number = 0;
  Stock8: number = 0;
  Cantidad: number = 1;
  Cantidad2: number = 1;
  Cantidad3: number = 1;
  Cantidad4: number = 1;
  Cantidad5: number = 1;
  Cantidad6: number = 1;
  Cantidad7: number = 1;
  Cantidad8: number = 1;

  constructor(private router: Router, private firestore: AngularFirestore) {

  }

  ngOnInit() {
    // **Aralia**
    // Realiza una consulta para obtener el documento específico
    this.firestore
      .collection('Producto')
      .doc('NfGw7R8fLwpQGGlA7wnc') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Nombre = data.nombre; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });

    this.firestore
      .collection('Producto')
      .doc('NfGw7R8fLwpQGGlA7wnc') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Imagen = data.imagen_url; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });

    this.firestore
      .collection('Producto')
      .doc('NfGw7R8fLwpQGGlA7wnc') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Precio = data.precio; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });
    this.firestore
      .collection('Producto')
      .doc('NfGw7R8fLwpQGGlA7wnc') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Stock = data.stock; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });
    // **Palmera**
    // Realiza una consulta para obtener el documento específico
    this.firestore
      .collection('Producto')
      .doc('ZoPWQc9ZS7IfvEW9pM6b') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Nombre2 = data.nombre; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });

    this.firestore
      .collection('Producto')
      .doc('ZoPWQc9ZS7IfvEW9pM6b') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Imagen2 = data.imagen_url; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });

    this.firestore
      .collection('Producto')
      .doc('ZoPWQc9ZS7IfvEW9pM6b') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Precio2 = data.precio; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });
    this.firestore
      .collection('Producto')
      .doc('ZoPWQc9ZS7IfvEW9pM6b') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Stock2 = data.stock; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });
    // **Monstera**
    // Realiza una consulta para obtener el documento específico
    this.firestore
      .collection('Producto')
      .doc('mYQvbPnqBACVIkI0d9Y9') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Nombre3 = data.nombre; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });

    this.firestore
      .collection('Producto')
      .doc('mYQvbPnqBACVIkI0d9Y9') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Imagen3 = data.imagen_url; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });

    this.firestore
      .collection('Producto')
      .doc('mYQvbPnqBACVIkI0d9Y9') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Precio3 = data.precio; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });
    this.firestore
      .collection('Producto')
      .doc('mYQvbPnqBACVIkI0d9Y9') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Stock3 = data.stock; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });
    // **Cheflera**
    // Realiza una consulta para obtener el documento específico
    this.firestore
      .collection('Producto')
      .doc('7LxNmhkaxyZC7pkq8XHk') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Nombre4 = data.nombre; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });

    this.firestore
      .collection('Producto')
      .doc('7LxNmhkaxyZC7pkq8XHk') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Imagen4 = data.imagen_url; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });

    this.firestore
      .collection('Producto')
      .doc('7LxNmhkaxyZC7pkq8XHk') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Precio4 = data.precio; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });
    this.firestore
      .collection('Producto')
      .doc('7LxNmhkaxyZC7pkq8XHk') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Stock4 = data.stock; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });
    // **Scindapsus**
    // Realiza una consulta para obtener el documento específico
    this.firestore
      .collection('Producto')
      .doc('0Vklj18NCuvbCC1PVW4D') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Nombre5 = data.nombre; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });

    this.firestore
      .collection('Producto')
      .doc('0Vklj18NCuvbCC1PVW4D') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Imagen5 = data.imagen_url; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });

    this.firestore
      .collection('Producto')
      .doc('0Vklj18NCuvbCC1PVW4D') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Precio5 = data.precio; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });
    this.firestore
      .collection('Producto')
      .doc('0Vklj18NCuvbCC1PVW4D') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Stock5 = data.stock; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });
    // **Jade**
    // Realiza una consulta para obtener el documento específico
    this.firestore
      .collection('Producto')
      .doc('qzOUB2jQbeHGQICm7q6u') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Nombre6 = data.nombre; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });

    this.firestore
      .collection('Producto')
      .doc('qzOUB2jQbeHGQICm7q6u') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Imagen6 = data.imagen_url; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });

    this.firestore
      .collection('Producto')
      .doc('qzOUB2jQbeHGQICm7q6u') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Precio6 = data.precio; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });
    this.firestore
      .collection('Producto')
      .doc('qzOUB2jQbeHGQICm7q6u') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Stock6 = data.stock; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });

    // **Ficus**
    // Realiza una consulta para obtener el documento específico
    this.firestore
      .collection('Producto')
      .doc('ncapvNgTRl76nQiR0VjJ') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Nombre7 = data.nombre; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });

    this.firestore
      .collection('Producto')
      .doc('ncapvNgTRl76nQiR0VjJ') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Imagen7 = data.imagen_url; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });

    this.firestore
      .collection('Producto')
      .doc('ncapvNgTRl76nQiR0VjJ') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Precio7 = data.precio; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });
    this.firestore
      .collection('Producto')
      .doc('ncapvNgTRl76nQiR0VjJ') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Stock7 = data.stock; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });

    // **Helecho**
    // Realiza una consulta para obtener el documento específico
    this.firestore
      .collection('Producto')
      .doc('mne9hIswzbvhWzTbATlg') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Nombre8 = data.nombre; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });

    this.firestore
      .collection('Producto')
      .doc('mne9hIswzbvhWzTbATlg') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Imagen8 = data.imagen_url; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });

    this.firestore
      .collection('Producto')
      .doc('mne9hIswzbvhWzTbATlg') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Precio8 = data.precio; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });
    this.firestore
      .collection('Producto')
      .doc('mne9hIswzbvhWzTbATlg') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Stock8 = data.stock; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });
  }

  perfil() {
    this.router.navigate(['/perfil']);
  }
  carrito() {
    this.router.navigate(['/carrito']);
  }
  detalle() {
    this.router.navigate(['/palmera']);
  }
  detalle1() {
    this.router.navigate(['/monstera']);
  }
  detalle2() {
    this.router.navigate(['/cheflera']);
  }
  detalle3() {
    this.router.navigate(['/scindapsus']);
  }
  detalle4() {
    this.router.navigate(['/jade']);
  }
  detalle5() {
    this.router.navigate(['/ficus']);
  }
  detalle6() {
    this.router.navigate(['/aralia']);
  }
  detalle7() {
    this.router.navigate(['/helecho']);
  }
  pedido() {
    this.router.navigate(['/pedido']);
  }
}
