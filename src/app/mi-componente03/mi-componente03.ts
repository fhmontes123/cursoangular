import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Saludo } from '../saludo/saludo';

@Component({
  selector: 'app-mi-componente03',
  imports: [CommonModule, Saludo], // <-  ngClass / ngStyle
  templateUrl: './mi-componente03.html',
  styleUrl: './mi-componente03.css',
})
export class MiComponente03 {
  isActive = false;
  hasError = false;
  status = 'PENDING';

  textColor = 'black';
  fontSize = 16;
  bgColor = '#f0f0f0';
  paddingSize = 10;

  score = 75;

  toggleActive() {
    this.isActive = !this.isActive;
  }

  toggleError() {
    this.hasError = !this.hasError;
  }

  toggleStatus() {
    if (this.status !== 'COMPLETED') {
      this.status = 'COMPLETED';
    } else {
      this.status = 'PENDING';
    }
  }

  changeColor(color: string): void {
    this.textColor = color;
  }

  increaseSize() {
    this.fontSize += 2;
  }
}
