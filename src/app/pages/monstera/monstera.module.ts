import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonsteraPageRoutingModule } from './monstera-routing.module';

import { MonsteraPage } from './monstera.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonsteraPageRoutingModule
  ],
  declarations: [MonsteraPage]
})
export class MonsteraPageModule {}
