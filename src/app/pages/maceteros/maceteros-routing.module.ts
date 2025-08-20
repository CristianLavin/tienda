import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaceterosPage } from './maceteros.page';

const routes: Routes = [
  {
    path: '',
    component: MaceterosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaceterosPageRoutingModule {}
