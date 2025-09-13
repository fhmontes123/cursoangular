import { Component } from '@angular/core';
import { MiComponente06Hijo } from '../mi-componente06-hijo/mi-componente06-hijo';

@Component({
  selector: 'app-mi-componente06-padre',
  imports: [MiComponente06Hijo],
  template: `
    <div style="background: #e2ffdf; padding: 20px;">
      <h3>Componente Padre</h3>
      <p>Mensaje recibido: {{ mensaje }}</p>
      <app-mi-componente06-hijo
        (saludo)="recibirSaludo($event)"
        (despedida)="recibirDespedida($event)"
      />
    </div>
  `,
  styleUrl: './mi-componente06-padre.css',
})
export class MiComponente06Padre {
  mensaje: string = '';

  recibirSaludo(mensaje: string) {
    this.mensaje = mensaje;
    console.log('Saludo recibido: ', this.mensaje);
  }

  recibirDespedida(mensaje: string) {
    this.mensaje = mensaje;
    console.log('Despedida recibida: ', this.mensaje);
  }
}
