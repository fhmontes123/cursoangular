import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mi-componente01',
  imports: [FormsModule],
  templateUrl: './mi-componente01.html',
  styleUrl: './mi-componente01.css',
})
export class MiComponente01 {
  public titulo = 'Mi Componente 01';
  public nombre = 'Juan Perez';
  public deshabilitar = true;
  public inputMessage = '';
  public inputNombre = '';

  constructor() {
    setTimeout(() => {
      this.deshabilitar = false;
    }, 5000); // 5 segundo de espera
  }

  clickSaludar(): void {
    console.log('Saludando a ' + this.nombre);
  }

  eventoInput(event: Event): void {
    const inputEvent = event as InputEvent;
    console.log('Evento input...', inputEvent.data);
    this.inputMessage += inputEvent.data;
  }
}
