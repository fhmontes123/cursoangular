import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mi-componente05-hijo',
  imports: [],
  template: `
    <div style="background: #beeeff; padding: 20px;">
      <h3>Datos del Componente Hijo</h3>
      <p>Nombre: {{ nombre }}</p>
      <p>Edad: {{ edad }}</p>
      <p>Activo: {{ esActivo }}</p>
    </div>
  `,
  styleUrl: './mi-componente05-hijo.css',
})
export class MiComponente05Hijo {
  // Propiedades que reciben datos desde el componente padre
  @Input() nombre: string = '';
  @Input() edad: number = 0;
  @Input() esActivo: boolean = false;
}
