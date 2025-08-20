import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstambulPage } from './estambul.page';

const routes: Routes = [
  {
    path: '',
    component: EstambulPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstambulPageRoutingModule {}
