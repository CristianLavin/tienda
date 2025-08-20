import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Validators, AbstractControl } from '@angular/forms';
import { AuthService } from 'src/app/shared/servicess/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  formularioR: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private firestore: AngularFirestore,
    private alertController: AlertController
  ) {
    this.formularioR = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      correo: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          this.containsLetter(),
          this.containsNumber(),
          this.containsSpecialCharacter(),
        ],
      ],
      confirmPassword: new FormControl('', [Validators.required]),
    });

    // Agregar validación personalizada para comparar contraseñas
    const confirmPasswordControl = this.formularioR.get('confirmPassword');
    if (confirmPasswordControl) { // Verificar si es null
      confirmPasswordControl.setValidators([
        Validators.required,
        this.passwordsMatch.bind(this),
      ]);
    }
  }
  signUp(email: string, password: string) {
    this.authService.signUpWithEmailAndPassword(email, password)
      .then(() => {
  
        // Obtener datos del formulario
        const nombreControl = this.formularioR.get('nombre');
        const correoControl = this.formularioR.get('correo');
        const contrasenaControl = this.formularioR.get('password');
  
        // Verificar si los controles del formulario no son nulos
        if (nombreControl && correoControl && contrasenaControl) {
          const nombre = nombreControl.value;
          const correo = correoControl.value;
          const contrasena = contrasenaControl.value;
  
          // Crear un objeto con los datos del usuario
          const userData = {
            nombre: nombre,
            correo: correo,
            contrasena: contrasena,
            // Otros campos si es necesario
          };
  
          // Guardar datos del usuario en la colección "Usuario" de Firebase
          this.firestore.collection('Usuario').add(userData)
            .then((docRef) => {
              console.log('Datos del usuario guardados en Firebase con ID:', docRef.id);
  
              // Mostrar un mensaje de éxito con AlertController
              this.showSuccessAlert();
            })
            .catch((error) => {
              console.error('Error al guardar datos del usuario en Firebase:', error);
            });
        }
      })
      .catch((error) => {
        console.error('Error al registrar usuario:', error);
      });
  }
  
  async showSuccessAlert() {
    const alert = await this.alertController.create({
      header: 'Registro Exitoso',
      message: 'El usuario se ha registrado correctamente.',
      buttons: ['OK']
    });
  
    await alert.present();
  }
  
  

  ngOnInit() { }

  // Funciones de validación personalizadas
  containsLetter() {
    return (control: AbstractControl) => {
      if (!/[A-Za-z]/.test(control.value)) {
        return { noLetter: true };
      }
      return null;
    };
  }

  containsNumber() {
    return (control: AbstractControl) => {
      if (!/\d/.test(control.value)) {
        return { noNumber: true };
      }
      return null;
    };
  }

  containsSpecialCharacter() {
    return (control: AbstractControl) => {
      if (!/[@$!%*#?&.-_]/.test(control.value)) {
        return { noSpecialCharacter: true };
      }
      return null;
    };
  }

  passwordsMatch(control: AbstractControl): { [key: string]: boolean } | null {
    const passwordControl = this.formularioR.get('password');
    if (passwordControl) { // Verificar si es null
      const password = passwordControl.value;
      const confirmPassword = control.value;

      if (password !== confirmPassword) {
        return { passwordsNotMatch: true };
      }
    }

    return null;
  }


  submitForm() {
    if (this.formularioR.valid) {

    }


  }
  login() {
    this.router.navigate(['/login']);
  }
}
