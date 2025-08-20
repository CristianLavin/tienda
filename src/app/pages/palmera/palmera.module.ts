import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PalmeraPageRoutingModule } from './palmera-routing.module';

import { PalmeraPage } from './palmera.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PalmeraPageRoutingModule
  ],
  declarations: [PalmeraPage]
})
export class PalmeraPageModule {}
