import { Component } from '@angular/core';

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
export class Saludo {}
