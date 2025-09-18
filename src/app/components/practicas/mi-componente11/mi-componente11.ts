import { ChangeDetectionStrategy, ChangeDetectorRef, Component, signal } from '@angular/core';

@Component({
  selector: 'app-mi-componente11',
  imports: [],
  templateUrl: './mi-componente11.html',
  styleUrl: './mi-componente11.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MiComponente11 {
  // titulo = 'Espere tres segundos...';
  titulo = signal('Espere tres segundos...');

  // constructor(private cdr: ChangeDetectorRef) {
  constructor() {
    setTimeout(() => {
      this.titulo.set('Curso de Angular');
      console.log('Se ha cambiado el valor del titulo');
      // cdr.markForCheck(); // << Forzar actualizar plantilla
    }, 3000);
  }
}
