import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColgantePageRoutingModule } from './colgante-routing.module';

import { ColgantePage } from './colgante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColgantePageRoutingModule
  ],
  declarations: [ColgantePage]
})
export class ColgantePageModule {}
