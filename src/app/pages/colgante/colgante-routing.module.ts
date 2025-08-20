import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColgantePage } from './colgante.page';

const routes: Routes = [
  {
    path: '',
    component: ColgantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColgantePageRoutingModule {}
