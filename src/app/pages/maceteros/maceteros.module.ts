import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaceterosPageRoutingModule } from './maceteros-routing.module';

import { MaceterosPage } from './maceteros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaceterosPageRoutingModule
  ],
  declarations: [MaceterosPage]
})
export class MaceterosPageModule {}
