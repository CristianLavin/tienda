import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AraliaPageRoutingModule } from './aralia-routing.module';

import { AraliaPage } from './aralia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AraliaPageRoutingModule
  ],
  declarations: [AraliaPage]
})
export class AraliaPageModule {}
