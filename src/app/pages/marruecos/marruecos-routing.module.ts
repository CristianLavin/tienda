import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarruecosPage } from './marruecos.page';

const routes: Routes = [
  {
    path: '',
    component: MarruecosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarruecosPageRoutingModule {}
