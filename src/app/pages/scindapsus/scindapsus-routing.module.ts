import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScindapsusPage } from './scindapsus.page';

const routes: Routes = [
  {
    path: '',
    component: ScindapsusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScindapsusPageRoutingModule {}
