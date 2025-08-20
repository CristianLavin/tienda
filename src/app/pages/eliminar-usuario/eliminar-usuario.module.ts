import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EliminarUsuarioPageRoutingModule } from './eliminar-usuario-routing.module';

import { EliminarUsuarioPage } from './eliminar-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EliminarUsuarioPageRoutingModule
  ],
  declarations: [EliminarUsuarioPage]
})
export class EliminarUsuarioPageModule {}
