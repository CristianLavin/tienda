export class Pedido {
    id: string ='';
    nombre: string ='';
    precio: number =0;
    imageUrl: string='';
    cantidad: number=1;
    total: number = this.precio * this.cantidad;
    fecha: Date = new Date();
    
    constructor() {
      this.total = this.precio * this.cantidad;
      
    }
  }