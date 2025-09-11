import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  imports: [],
  // templateUrl: './saludo.html',
  // styleUrl: './saludo.css',
  // Backtils => ALT + 96
  template: `
    <div>
      <h2>Componente Saludo</h2>
    </div>
  `,
  styles: `
    div { background: blue; }
    h2 { color: white}
  `,
})
export class Saludo implements OnInit, OnDestroy {
  constructor() {
    console.log('Componente Saludo > constructor()');
  }

  ngOnInit(): void {
    console.log('Componente Saludo > ngOnInit()');
  }

  ngOnDestroy(): void {
    console.log('Componente Saludo > ngOnDestroy()');
  }
}
