import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JadePage } from './jade.page';

const routes: Routes = [
  {
    path: '',
    component: JadePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JadePageRoutingModule {}
