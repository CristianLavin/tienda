import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OlvidoContraPage } from './olvido-contra.page';

const routes: Routes = [
  {
    path: '',
    component: OlvidoContraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OlvidoContraPageRoutingModule {}
