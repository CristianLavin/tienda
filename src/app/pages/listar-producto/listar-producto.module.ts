import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarProductoPageRoutingModule } from './listar-producto-routing.module';

import { ListarProductoPage } from './listar-producto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarProductoPageRoutingModule
  ],
  declarations: [ListarProductoPage]
})
export class ListarProductoPageModule {}
