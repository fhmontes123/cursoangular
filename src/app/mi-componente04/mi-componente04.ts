import { CommonModule, registerLocaleData } from '@angular/common';
import { Component, LOCALE_ID } from '@angular/core';
import localeEsBo from '@angular/common/locales/es-BO';

registerLocaleData(localeEsBo);

@Component({
  selector: 'app-mi-componente04',
  imports: [CommonModule],
  providers: [{ provide: LOCALE_ID, useValue: 'es-BO' }],
  templateUrl: './mi-componente04.html',
  styleUrl: './mi-componente04.css',
})
export class MiComponente04 {
  nombreCompleto = 'Juan Perez Gonzales';
  sueldo = 45675.4695;
  avancePorcentaje = 0.45;
  domicilio = { zona: 'Miraflores', calle: 'Av. America', nro: 123 };
}
