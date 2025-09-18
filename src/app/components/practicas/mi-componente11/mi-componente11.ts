import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-mi-componente11',
  imports: [],
  templateUrl: './mi-componente11.html',
  styleUrl: './mi-componente11.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MiComponente11 {
  titulo = 'Espere tres segundos...';

  constructor(private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.titulo = 'Curso de Angular';
      console.log('Se ha cambiado el valor del titulo');
      cdr.markForCheck(); // << Forzar actualizar plantilla
    }, 3000);
  }
}
