import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarProductoPage } from './listar-producto.page';

const routes: Routes = [
  {
    path: '',
    component: ListarProductoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarProductoPageRoutingModule {}
