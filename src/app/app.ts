import { Component } from '@angular/core';
import { Saludo } from './saludo/saludo';
import { MiComponente01 } from './mi-componente01/mi-componente01';

@Component({
  selector: 'app-root',
  imports: [Saludo, MiComponente01],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
