import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GredaPage } from './greda.page';

const routes: Routes = [
  {
    path: '',
    component: GredaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GredaPageRoutingModule {}
