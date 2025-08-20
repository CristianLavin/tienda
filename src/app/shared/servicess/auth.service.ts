import { NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Injectable, InjectionToken, Inject } from '@angular/core';

export const LOGGED_IN_USER_EMAIL = new InjectionToken<string>('loggedInUserEmail');

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInUserEmail: string="";
  userData: any;
  
  constructor(
    private firebaseAuthenticationService: AngularFireAuth,
    private router: Router,
    private ngZone: NgZone,
    @Inject(LOGGED_IN_USER_EMAIL) loggedInUserEmail: string
  ) { this.loggedInUserEmail = loggedInUserEmail;
    // OBSERVA el estado de la autenticación - guarda el usuario en localStorage (iniciar sesión) y configura el nulo al cerrar sesión
    this.firebaseAuthenticationService.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
      } else {
        localStorage.setItem('user', 'null');
      }
    })

  }

  // iniciar sesión con correo electrónico y contraseña
  async logInWithEmailAndPassword(email: string, password: string) {
    try {
      const userCredential = await this.firebaseAuthenticationService.signInWithEmailAndPassword(email, password);
      this.userData = userCredential.user;
      this.observeUserState();
    } catch (error) {
      alert(error);
    }
  }
  
  // registrarse con correo electrónico y contraseña
  async signUpWithEmailAndPassword(email: string, password: string) {
    try {
      const userCredential = await this.firebaseAuthenticationService.createUserWithEmailAndPassword(email, password);
      this.userData = userCredential.user;
      this.observeUserState();
    } catch (error) {
      alert(error);
    }
  }

  observeUserState() {
    this.firebaseAuthenticationService.authState.subscribe((userState) => {
      userState && this.ngZone.run(() => this.router.navigate(['home']))
    })
  }

  // Devuelve verdadero cuando el usuario está conectado
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null;
  }

  // Cerrar sesión
  async logOut() {
    await this.firebaseAuthenticationService.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }

  setLoggedInUserEmail(email: string) {
    this.loggedInUserEmail = email;
  }

  getLoggedInUserEmail(): string {
    return this.loggedInUserEmail;
  }
 
}

