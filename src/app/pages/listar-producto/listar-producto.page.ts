import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.page.html',
  styleUrls: ['./listar-producto.page.scss'],
})
export class ListarProductoPage implements OnInit {
  productos: any[] = [];
  constructor(private firestore: AngularFirestore
    ) { }
  ngOnInit() {
    this.firestore
      .collection('Producto')
      .valueChanges()
      .subscribe((productos) => {
        this.productos = productos;
      });
  }

 }
