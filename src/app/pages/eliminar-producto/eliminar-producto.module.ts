import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EliminarProductoPageRoutingModule } from './eliminar-producto-routing.module';

import { EliminarProductoPage } from './eliminar-producto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EliminarProductoPageRoutingModule
  ],
  declarations: [EliminarProductoPage]
})
export class EliminarProductoPageModule {}
