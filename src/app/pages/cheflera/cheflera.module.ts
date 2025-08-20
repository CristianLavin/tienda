import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChefleraPageRoutingModule } from './cheflera-routing.module';

import { ChefleraPage } from './cheflera.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChefleraPageRoutingModule
  ],
  declarations: [ChefleraPage]
})
export class ChefleraPageModule {}
