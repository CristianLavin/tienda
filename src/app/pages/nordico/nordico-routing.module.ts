import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NordicoPage } from './nordico.page';

const routes: Routes = [
  {
    path: '',
    component: NordicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NordicoPageRoutingModule {}
