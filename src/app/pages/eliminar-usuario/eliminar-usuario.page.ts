import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-eliminar-usuario',
  templateUrl: './eliminar-usuario.page.html',
  styleUrls: ['./eliminar-usuario.page.scss'],
})
export class EliminarUsuarioPage {
  correo: string = '';
  password: string = '';

  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private alertController: AlertController
  ) {}

  async eliminarUsuario() {
    try {
      const querySnapshot = await this.firestore
        .collection('Usuario', (ref) => ref.where('correo', '==', this.correo))
        .get()
        .toPromise();

      if (!querySnapshot.empty) {
        const userDocData = querySnapshot.docs[0].data() as { correo: string };
        const userEmail = userDocData.correo;

        // Check if the password is not empty
        if (this.password.trim() !== '') {
          // Re-authenticate the user before sensitive operations
          const credential = await this.afAuth.signInWithEmailAndPassword(userEmail, this.password);
          const user = credential.user;

          if (user) {
            try {
              // Delete the user after successful re-authentication
              await user.delete();

              // Eliminate the document in Firestore
              await querySnapshot.docs[0].ref.delete();
              console.log('Usuario eliminado con correo:', this.correo);

              // Show an alert indicating that the user was successfully deleted
              this.mostrarAlerta('Éxito', 'Usuario eliminado con éxito');

              // Clear the input field after deleting the user
              this.correo = '';
              this.password = ''; // Clear the password field
            } catch (deleteError) {
              console.error('Error al eliminar el usuario:', deleteError);

              // Show an alert indicating delete error
              this.mostrarAlerta('Error', 'Error al eliminar el usuario.');
            }
          } else {
            console.log('Usuario no autenticado.');

            // Show an alert indicating that the user is not authenticated
            this.mostrarAlerta('Error', 'Usuario no autenticado.');
          }
        } else {
          console.log('La contraseña no puede estar vacía.');

          // Show an alert indicating that the password cannot be empty
          this.mostrarAlerta('Error', 'La contraseña no puede estar vacía.');
        }
      } else {
        console.log('No se encontró ningún usuario con el correo proporcionado.');

        // Show an alert indicating that no user was found with the provided email
        this.mostrarAlerta('Error', 'No se encontró ningún usuario con el correo proporcionado.');
      }
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);

      // Show an alert indicating that there was an error deleting the user
      this.mostrarAlerta('Error', 'Hubo un error al eliminar el usuario.');
    }
  }

  async mostrarAlerta(titulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
