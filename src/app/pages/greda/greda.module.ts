import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GredaPageRoutingModule } from './greda-routing.module';

import { GredaPage } from './greda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GredaPageRoutingModule
  ],
  declarations: [GredaPage]
})
export class GredaPageModule {}
