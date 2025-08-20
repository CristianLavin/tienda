import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-maceteros',
  templateUrl: './maceteros.page.html',
  styleUrls: ['./maceteros.page.scss'],
})
export class MaceterosPage {
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
    // **Bora**
    // Realiza una consulta para obtener el documento específico
    this.firestore
      .collection('Producto')
      .doc('kIZvscSIg2ObyYearIHQ') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Nombre = data.nombre; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });

    this.firestore
      .collection('Producto')
      .doc('kIZvscSIg2ObyYearIHQ') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Imagen = data.imagen_url; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });

    this.firestore
      .collection('Producto')
      .doc('kIZvscSIg2ObyYearIHQ') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Stock = data.stock; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar

      });

    this.firestore
      .collection('Producto')
      .doc('kIZvscSIg2ObyYearIHQ') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Precio = data.precio; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });

    this.firestore
      .collection('Producto')
      .doc('kIZvscSIg2ObyYearIHQ') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Cantidad = data.cantidad; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });
    // **Nordico**
    // Realiza una consulta para obtener el documento específico
    this.firestore
      .collection('Producto')
      .doc('Lt9ie7KEnFzY90L6L1Fz') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Nombre2 = data.nombre; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });

    this.firestore
      .collection('Producto')
      .doc('Lt9ie7KEnFzY90L6L1Fz') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Imagen2 = data.imagen_url; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });

    this.firestore
      .collection('Producto')
      .doc('Lt9ie7KEnFzY90L6L1Fz') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Precio2 = data.precio; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });
    this.firestore
      .collection('Producto')
      .doc('Lt9ie7KEnFzY90L6L1Fz') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Stock2 = data.stock; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });
    this.firestore
      .collection('Producto')
      .doc('Lt9ie7KEnFzY90L6L1Fz') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Cantidad2 = data.cantidad; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });

    // **Marruecos**
    // Realiza una consulta para obtener el documento específico
    this.firestore
      .collection('Producto')
      .doc('cvAxMKms2dwsKWPoXQ1Q') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Nombre3 = data.nombre; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });

    this.firestore
      .collection('Producto')
      .doc('cvAxMKms2dwsKWPoXQ1Q') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Imagen3 = data.imagen_url; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });

    this.firestore
      .collection('Producto')
      .doc('cvAxMKms2dwsKWPoXQ1Q') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Precio3 = data.precio; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });

    this.firestore
      .collection('Producto')
      .doc('cvAxMKms2dwsKWPoXQ1Q') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Stock3 = data.stock; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });
    this.firestore
      .collection('Producto')
      .doc('cvAxMKms2dwsKWPoXQ1Q') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Cantidad3 = data.cantidad; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });

    // **Greda**
    // Realiza una consulta para obtener el documento específico
    this.firestore
      .collection('Producto')
      .doc('NFzMbBlx5PRiOtw7j0s0') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Nombre4 = data.nombre; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });

    this.firestore
      .collection('Producto')
      .doc('NFzMbBlx5PRiOtw7j0s0') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Imagen4 = data.imagen_url; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });


    this.firestore
      .collection('Producto')
      .doc('NFzMbBlx5PRiOtw7j0s0') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Precio4 = data.precio; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });

    this.firestore
      .collection('Producto')
      .doc('NFzMbBlx5PRiOtw7j0s0') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Stock4 = data.stock; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });
    this.firestore
      .collection('Producto')
      .doc('NFzMbBlx5PRiOtw7j0s0') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Cantidad4 = data.cantidad; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });


    // **Danes**
    // Realiza una consulta para obtener el documento específico
    this.firestore
      .collection('Producto')
      .doc('zNYAWjeZHnUi2O9qWpEE') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Nombre5 = data.nombre; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });

    this.firestore
      .collection('Producto')
      .doc('zNYAWjeZHnUi2O9qWpEE') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Imagen5 = data.imagen_url; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });

    this.firestore
      .collection('Producto')
      .doc('zNYAWjeZHnUi2O9qWpEE') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Precio5 = data.precio; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });

    this.firestore
      .collection('Producto')
      .doc('zNYAWjeZHnUi2O9qWpEE') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Stock5 = data.stock; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });
    this.firestore
      .collection('Producto')
      .doc('zNYAWjeZHnUi2O9qWpEE') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Cantidad5 = data.cantidad; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });

    // **Colgante**
    // Realiza una consulta para obtener el documento específico
    this.firestore
      .collection('Producto')
      .doc('ORSOt3LmWDFLiSYpKyPO') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Nombre6 = data.nombre; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });

    this.firestore
      .collection('Producto')
      .doc('ORSOt3LmWDFLiSYpKyPO') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Imagen6 = data.imagen_url; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });

    this.firestore
      .collection('Producto')
      .doc('ORSOt3LmWDFLiSYpKyPO') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Precio6 = data.precio; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });

    this.firestore
      .collection('Producto')
      .doc('ORSOt3LmWDFLiSYpKyPO') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Stock6 = data.stock; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });
    this.firestore
      .collection('Producto')
      .doc('ORSOt3LmWDFLiSYpKyPO') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Cantidad6 = data.cantidad; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });
    // **Pack Nordico**
    // Realiza una consulta para obtener el documento específico
    this.firestore
      .collection('Producto')
      .doc('G4GWo7B0v9NScW2KDgyg') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Nombre7 = data.nombre; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });

    this.firestore
      .collection('Producto')
      .doc('G4GWo7B0v9NScW2KDgyg') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Imagen7 = data.imagen_url; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });

    this.firestore
      .collection('Producto')
      .doc('G4GWo7B0v9NScW2KDgyg') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Precio7 = data.precio; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });

    this.firestore
      .collection('Producto')
      .doc('G4GWo7B0v9NScW2KDgyg') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Stock7 = data.stock; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });
    this.firestore
      .collection('Producto')
      .doc('G4GWo7B0v9NScW2KDgyg') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Cantidad7 = data.cantidad; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });
    // **Estambul**
    // Realiza una consulta para obtener el documento específico
    this.firestore
      .collection('Producto')
      .doc('pPrRMQClYezlnMU3T2Zd') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Nombre8 = data.nombre; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });

    this.firestore
      .collection('Producto')
      .doc('pPrRMQClYezlnMU3T2Zd') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Imagen8 = data.imagen_url; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });

    this.firestore
      .collection('Producto')
      .doc('pPrRMQClYezlnMU3T2Zd') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Precio8 = data.precio; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });
    this.firestore
      .collection('Producto')
      .doc('pPrRMQClYezlnMU3T2Zd') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Stock8 = data.stock; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });
    this.firestore
      .collection('Producto')
      .doc('pPrRMQClYezlnMU3T2Zd') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Cantidad8 = data.cantidad; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });
  }
  perfil() {
    this.router.navigate(['/perfil']);
  }
  carrito() {
    this.router.navigate(['/carrito']);
  }
  detalle8() {
    this.router.navigate(['/nordico']);
  }
  detalle9() {
    this.router.navigate(['/bora']);
  }
  detalle10() {
    this.router.navigate(['/marruecos']);
  }
  detalle11() {
    this.router.navigate(['/greda']);
  }
  detalle12() {
    this.router.navigate(['/danes']);
  }
  detalle13() {
    this.router.navigate(['/colgante']);
  }
  detalle14() {
    this.router.navigate(['/pack']);
  }
  detalle15() {
    this.router.navigate(['/estambul']);
  }
  pedido() {
    this.router.navigate(['/pedido']);
  }

}
