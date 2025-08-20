import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarruecosPageRoutingModule } from './marruecos-routing.module';

import { MarruecosPage } from './marruecos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarruecosPageRoutingModule
  ],
  declarations: [MarruecosPage]
})
export class MarruecosPageModule {}
