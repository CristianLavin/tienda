import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NordicoPageRoutingModule } from './nordico-routing.module';

import { NordicoPage } from './nordico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NordicoPageRoutingModule
  ],
  declarations: [NordicoPage]
})
export class NordicoPageModule {}
