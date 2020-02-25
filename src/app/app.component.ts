import { Component } from '@angular/core';
import { resolve } from 'dns';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeEs);
registerLocaleData(localeFr);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre = 'Frank';
  // arreglo = [1, 2, 3, 4, 5, 6, 7 , 8 , 9, 10];
  nombre2: string = 'fraNK BErnalES';
  personajes: string[] = ['Ironman', 'Spiderman', 'Thor', 'Loki', 'Groot'];
  PI: number = Math.PI;
  porcentaje: number = 0.234;
  salario: number = 10000;
  fecha: Date = new Date();
  activar : boolean = true;

  idioma: string = 'en';
  videoUrl: string = 'https://www.youtobe.com/embed/-CBKW-90VxQ';


  valorPromesa = new Promise<string>(( resolve ) => {

    setTimeout(() => {
      resolve('llego la data')
    }, 4500);

  });

  // propiedad-objeto

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  }


}
