import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoraPageRoutingModule } from './bora-routing.module';

import { BoraPage } from './bora.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoraPageRoutingModule
  ],
  declarations: [BoraPage]
})
export class BoraPageModule {}
