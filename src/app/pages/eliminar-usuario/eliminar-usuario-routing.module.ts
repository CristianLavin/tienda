import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EliminarUsuarioPage } from './eliminar-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: EliminarUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EliminarUsuarioPageRoutingModule {}
