import { Component } from '@angular/core';

@Component({
  selector: 'app-mi-componente01',
  imports: [],
  templateUrl: './mi-componente01.html',
  styleUrl: './mi-componente01.css',
})
export class MiComponente01 {
  public titulo = 'Mi Componente 01';
  public nombre = 'Juan Perez';
  public deshabilitar = true;

  constructor() {
    setTimeout(() => {
      this.deshabilitar = false;
    }, 5000); // 5 segundo de espera
  }
}
