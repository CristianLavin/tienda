import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.page.html',
  styleUrls: ['./editar-usuario.page.scss'],
})
export class EditarUsuarioPage implements OnInit {
  usuarios: any[] = [];

  constructor(private firestore: AngularFirestore,
    private alertController: AlertController) { }

  ngOnInit() {
    this.obtenerUsuarios();
  }
  obtenerUsuarios() {
    this.firestore.collection('Usuario').snapshotChanges().subscribe((usuarios: any[]) => {
      this.usuarios = usuarios.map(usuario => {
        const data = usuario.payload.doc.data();
        const id = usuario.payload.doc.id;
        return { id, ...data };
      });
      console.log('Usuarios obtenidos:', this.usuarios);
    });
  }

  async editarUsuario(usuario: any) {
    const productoRef = this.firestore.collection('Usuario').doc(usuario.id);

    const datosActualizados = {
      nombre: usuario.nombre,
      correo: usuario.correo,
      contrasena: usuario.contrasena

    };

    try {
      await productoRef.update(datosActualizados);
      this.mostrarAlerta('Éxito', 'Usuario editado exitosamente.');
    } catch (error) {
      console.error('Error al actualizar el usuario:', error);
      this.mostrarAlerta('Error', 'Hubo un problema al editar el usuario.');
    }
  }

  async mostrarAlerta(titulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }

}
