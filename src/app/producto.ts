export class Producto {
    id: string ='';
    nombre: string ='';
    precio: number =0;
    imageUrl: string='';
    cantidad: number=1;
    stock: number=99;
    total: number = this.precio * this.cantidad;
    
    constructor() {
      this.total = this.precio * this.cantidad;
      
    }
  }