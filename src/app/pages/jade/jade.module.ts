import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JadePageRoutingModule } from './jade-routing.module';

import { JadePage } from './jade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JadePageRoutingModule
  ],
  declarations: [JadePage]
})
export class JadePageModule {}
