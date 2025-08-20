import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PalmeraPage } from './palmera.page';

const routes: Routes = [
  {
    path: '',
    component: PalmeraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PalmeraPageRoutingModule {}
