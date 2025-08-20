import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HelechoPageRoutingModule } from './helecho-routing.module';

import { HelechoPage } from './helecho.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelechoPageRoutingModule
  ],
  declarations: [HelechoPage]
})
export class HelechoPageModule {}
