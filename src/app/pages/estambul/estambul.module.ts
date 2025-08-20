import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstambulPageRoutingModule } from './estambul-routing.module';

import { EstambulPage } from './estambul.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstambulPageRoutingModule
  ],
  declarations: [EstambulPage]
})
export class EstambulPageModule {}
