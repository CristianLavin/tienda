import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PackPageRoutingModule } from './pack-routing.module';

import { PackPage } from './pack.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PackPageRoutingModule
  ],
  declarations: [PackPage]
})
export class PackPageModule {}
