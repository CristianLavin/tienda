import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AuthService, LOGGED_IN_USER_EMAIL } from 'src/app/shared/servicess/auth.service';
import { RouteReuseStrategy } from '@angular/router';
import { IonicRouteStrategy } from '@ionic/angular';


describe('AppComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AngularFirestoreModule,
        AngularFireModule.initializeApp(environment.firebaseConfig), // Provide your Firebase configuration here
      ],
      providers: [
        AuthService,
        { provide: LOGGED_IN_USER_EMAIL, useValue: '' },
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        // ... otros servicios y proveedores aquí
      ],
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });
  

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
