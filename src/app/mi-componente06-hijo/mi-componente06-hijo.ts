import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mi-componente06-hijo',
  imports: [],
  template: `
    <div style="background: #beeeff; padding: 20px;">
      <h3>Componente Hijo</h3>
      <button (click)="enviarSaludo()">Saludar al Padre</button>
      <button (click)="enviarDespedida()">Despedirse</button>
    </div>
  `,
  styleUrl: './mi-componente06-hijo.css',
})
export class MiComponente06Hijo {
  @Output() saludo = new EventEmitter<string>();
  @Output() despedida = new EventEmitter<string>();

  enviarSaludo() {
    this.saludo.emit('Hola desde hijo!');
  }

  enviarDespedida() {
    this.despedida.emit('Chau!');
  }
}
