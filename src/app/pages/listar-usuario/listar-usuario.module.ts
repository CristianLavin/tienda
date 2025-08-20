import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarUsuarioPageRoutingModule } from './listar-usuario-routing.module';

import { ListarUsuarioPage } from './listar-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarUsuarioPageRoutingModule
  ],
  declarations: [ListarUsuarioPage]
})
export class ListarUsuarioPageModule {}
