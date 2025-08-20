import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelechoPage } from './helecho.page';

const routes: Routes = [
  {
    path: '',
    component: HelechoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelechoPageRoutingModule {}
