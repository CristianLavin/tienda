import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FicusPageRoutingModule } from './ficus-routing.module';

import { FicusPage } from './ficus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FicusPageRoutingModule
  ],
  declarations: [FicusPage]
})
export class FicusPageModule {}
