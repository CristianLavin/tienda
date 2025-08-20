import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor( private alertService: AlertController ) { }


  async showAlert( msg:string, title:string, subTitle:string ){
    let alert = await this.alertService.create({ cssClass:"alertClass", message:msg, header:title, subHeader:subTitle, buttons:['Aceptar'] })
    await alert.present();
    return alert;
  }

}