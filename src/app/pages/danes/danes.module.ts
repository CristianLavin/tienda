import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { IonicModule } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { DanesPageRoutingModule } from './danes-routing.module';

import { DanesPage } from './danes.page';

@NgModule({
  imports: [AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    CommonModule,
    FormsModule,
    IonicModule,
    DanesPageRoutingModule,
    
  ],
  declarations: [DanesPage]
})
export class DanesPageModule {}
