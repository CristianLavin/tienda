import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EliminarProductoPage } from './eliminar-producto.page';

const routes: Routes = [
  {
    path: '',
    component: EliminarProductoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EliminarProductoPageRoutingModule {}
