import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AuthService, LOGGED_IN_USER_EMAIL } from 'src/app/shared/servicess/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FlagService } from 'src/app/flag.service'
import 'firebase/app';
import { forwardRef } from '@angular/core';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
     IonicModule.forRoot(), 
     AppRoutingModule, 
     ReactiveFormsModule,
     AngularFireAuthModule,
     AngularFireStorageModule,
     AngularFireDatabaseModule,
     AngularFirestoreModule,
     HttpClientModule,
     FormsModule
    ],
     
     providers: [
      AuthService,
      { provide: LOGGED_IN_USER_EMAIL, useValue: '' },
      { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
      FlagService
      // ... otros servicios y proveedores aquí
    ],
  bootstrap: [AppComponent],
})
export class AppModule {
  
}

