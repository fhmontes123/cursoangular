import { Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-mi-componente02',
  imports: [],
  templateUrl: './mi-componente02.html',
  styleUrl: './mi-componente02.css',
})
export class MiComponente02 implements OnChanges, OnInit, DoCheck, OnDestroy {
  public titulo;
  public nombre: string;
  public edad: number;
  public esCasado: boolean;
  public fechaNac: Date;
  public comodin: any;
  public frutas: Array<string>;

  constructor() {
    console.log('MiComponente02 --> constructor()');
    this.titulo = 'Mi Componente 02';
    this.nombre = 'Pedro';
    this.edad = 10;
    this.esCasado = false;
    this.fechaNac = new Date();
    this.comodin = 100;
    this.frutas = ['Limon', 'Manzanas', 'Fresa'];
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('MiComponente02 --> ngOnChanges()');
    // Obtener datos componentes padre hijo
  }

  ngOnInit(): void {
    console.log('MiComponente02 --> ngOnInit()');
    // Obtener datos desde un API Rest
  }

  ngDoCheck(): void {
    console.log('MiComponente02 --> ngDoCheck()');
    // Operaciones sencillas, nada pesado/complejo.
  }

  ngOnDestroy(): void {
    console.log('MiComponente02 --> ngOnDestroy()');
    // Operaciones para liberar recursos.
  }

  // Otras funciones
}
