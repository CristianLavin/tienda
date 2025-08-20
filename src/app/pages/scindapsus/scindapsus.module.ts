import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScindapsusPageRoutingModule } from './scindapsus-routing.module';

import { ScindapsusPage } from './scindapsus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScindapsusPageRoutingModule
    
  ],
  declarations: [ScindapsusPage]
})
export class ScindapsusPageModule {}
