import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MiComponente05Hijo } from '../mi-componente05-hijo/mi-componente05-hijo';
import { Usuario } from '../../../models/usuario.model';

@Component({
  selector: 'app-mi-componente05-padre',
  imports: [CommonModule, MiComponente05Hijo],
  template: `
    <div style="background: #e2ffdf; padding: 20px;">
      <h3>Componente Padre</h3>
      <p>{{ usuario | json }}</p>
      <app-mi-componente05-hijo
        [nombre]="usuario.nombre"
        [edad]="usuario.edad"
        [esActivo]="usuario.esActivo"
      />
    </div>
  `,
  styleUrl: './mi-componente05-padre.css',
})
export class MiComponente05Padre {
  usuario: Usuario;

  constructor() {
    this.usuario = {
      nombre: 'Maria Gomez',
      edad: 20,
      esActivo: true,
    };
  }
}
