import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-clima-hora-widget',
  templateUrl: './clima-hora-widget.component.html',
  styleUrls: ['./clima-hora-widget.component.scss'],
})
export class ClimaHoraWidgetComponent implements OnInit {
  clima: any;
  horaActual: string = ''; // Inicializa la propiedad aquí

  ngOnInit() {
    // Obtener datos de clima desde OpenWeatherMap (reemplaza 'API_KEY' y 'CIUDAD' con tus propias credenciales)
    const apiKey = 'c0042162a6359942504d6ff5ed5bcb19';
    const ciudad = 'SANTIAGO';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`;

    axios.get(url)
      .then(response => {
        this.clima = response.data;
        // Transformar la temperatura de Kelvin a Celsius y truncar hacia abajo
        this.clima.main.temp = Math.floor(this.clima.main.temp - 273.15);
      })
      .catch(error => {
        console.error('Error al obtener datos de clima', error);
      });

    // Obtener la hora actual
    this.obtenerHoraActual();
  }

  obtenerHoraActual() {
    const ahora = new Date();
    this.horaActual = ahora.toLocaleTimeString();
  }
}
