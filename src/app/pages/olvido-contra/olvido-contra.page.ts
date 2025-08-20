import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-olvido-contra',
  templateUrl: './olvido-contra.page.html',
  styleUrls: ['./olvido-contra.page.scss'],
})
export class OlvidoContraPage {
  formulario: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder, 
    private auth: AngularFireAuth,
    private alertController: AlertController) {
    this.formulario = this.formBuilder.group({
      correo: ['', [Validators.required, Validators.email]]
    });
  }
  
  
  successMessage: string = '';
  errorMessage: string = '';

  async resetPassword(email: string) {
    if (email) {
      try {
        await this.auth.sendPasswordResetEmail(email);
        this.presentSuccessAlert('Se ha enviado un correo de recuperación de contraseña. Revise su bandeja de entrada.');
      } catch (error) {
        console.error('Error al enviar el correo de recuperación de contraseña:', error);
        this.presentErrorAlert('Ocurrió un error al enviar el correo de recuperación de contraseña. Asegúrese de que la dirección de correo electrónico sea válida.');
      }
    } else {
      this.presentErrorAlert('Por favor, ingrese una dirección de correo electrónico válida.');
    }
  }
  
  async presentSuccessAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Su contraseña ha sido restablecida con éxito.',
      message: message,
      buttons: ['OK']
    });
  
    await alert.present();
  }
  
  async presentErrorAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: message,
      buttons: ['OK']
    });
  
    await alert.present();
  }
  

  submitForm() {
    // Tu función para manejar el envío del formulario
  }

  login() {
    this.router.navigate(['/login']);
  }

  

}

