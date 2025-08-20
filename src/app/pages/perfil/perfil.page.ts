import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource, CameraPhoto } from '@capacitor/camera';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/shared/servicess/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  public userProfileImage = '';
  loggedInUserEmail = '';
  loggedInUserName = '';
  newPassword = '';
  formularioR: FormGroup = this.formBuilder.group({}); // Inicializo formularioR aquí

  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    private firestore: AngularFirestore,
    private afAuth: AngularFireAuth,
    private alertController: AlertController,
    private formBuilder: FormBuilder
  ) {
    this.loggedInUserEmail = this.authService.getLoggedInUserEmail();
    this.getUserNameFromDatabase();
    this.initForm();
  }

  ngOnInit() {
    this.userProfileImage = localStorage.getItem('userProfileImage') || '';
  }

  goToHome() {
    this.navCtrl.navigateBack('/home');
  }

  async takePhoto() {
    try {
      const capturedPhoto: CameraPhoto = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
        correctOrientation: true
      });

      if (capturedPhoto.dataUrl) {
        // Guardar la imagen en localStorage
        localStorage.setItem('userProfileImage', capturedPhoto.dataUrl);

        // Actualizar la propiedad userProfileImage en el componente
        this.userProfileImage = capturedPhoto.dataUrl;
      } else {
        console.error('La foto capturada no tiene un URL de datos (dataUrl).');
      }
    } catch (error) {
      console.error('Error al capturar la foto:', error);
    }
  }

  // Función para convertir una cadena base64 a un blob
  b64toBlob(b64Data: string, contentType: string): Blob {
    contentType = contentType || '';
    const sliceSize = 512;
    const byteCharacters = atob(b64Data);
    const byteArrays: Uint8Array[] = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    return new Blob(byteArrays, { type: contentType });
  }


  getUserNameFromDatabase() {
    this.firestore
      .collection('Usuario')
      .ref.where('correo', '==', this.loggedInUserEmail)
      .get()
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          const usuarioEncontrado: any = querySnapshot.docs[0].data();
          this.loggedInUserName = usuarioEncontrado.nombre;
        } else {
          console.error(`No se encontró ningún usuario con el correo electrónico ${this.loggedInUserEmail}`);
        }
      })
      .catch((error) => {
        console.error('Error al obtener datos de Firebase:', error);
      });
  }

  async changePassword() {
    try {
      const user = await this.afAuth.currentUser;

      if (user) {
        await user.updatePassword(this.formularioR.get('password')?.value);
        this.presentSuccessAlert();
      } else {
        console.error('No hay usuario autenticado');
      }
    } catch (error) {
      console.error('Error al cambiar la contraseña:', error);
    }
  }

  async presentSuccessAlert() {
    const alert = await this.alertController.create({
      header: 'Éxito',
      message: 'Contraseña actualizada con éxito',
      buttons: ['OK'],
    });
    alert.present();
  }

  private initForm() {
    this.formularioR = this.formBuilder.group({
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
    });
  }

  private containsLetter() {
    return (control: AbstractControl) => {
      return /[A-Za-z]/.test(control.value) ? null : { noLetter: true };
    };
  }

  private containsNumber() {
    return (control: AbstractControl) => {
      return /\d/.test(control.value) ? null : { noNumber: true };
    };
  }

  private containsSpecialCharacter() {
    return (control: AbstractControl) => {
      return /[@$!%*#?&.-_]/.test(control.value) ? null : { noSpecialCharacter: true };
    };
  }
  submitForm() {
    if (this.formularioR.valid) {
    }

  }
}