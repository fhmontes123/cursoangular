import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  computed,
  signal,
} from '@angular/core';

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
  contador = signal(0);
  multiplicarPorTres = computed(() => this.contador() * 3);
  // effect()
  // toSignal(observable)

  // constructor(private cdr: ChangeDetectorRef) {
  constructor() {
    setTimeout(() => {
      // this.titulo = 'Curso de Angular';
      this.titulo.set('Curso de Angular');
      console.log('Se ha cambiado el valor del titulo');
      // cdr.markForCheck(); // << Forzar actualizar plantilla
    }, 3000);
  }

  incrementarConSet(): void {
    this.contador.set(this.contador() + 1);
  }

  incrementarConUpdate(): void {
    this.contador.update((valor) => valor + 1);
  }
}
