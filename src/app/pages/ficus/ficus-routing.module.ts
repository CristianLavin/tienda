import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FicusPage } from './ficus.page';

const routes: Routes = [
  {
    path: '',
    component: FicusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FicusPageRoutingModule {}
