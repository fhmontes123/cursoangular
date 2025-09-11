import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mi-componente08',
  imports: [],
  templateUrl: './mi-componente08.html',
  styleUrl: './mi-componente08.css',
})
export class MiComponente08 {
  private readonly _router = inject(Router);

  navigateToComponente01(): void {
    this._router.navigate(['/dashboard/micomponente01']);
  }

  navigateToComponente02(): void {
    this._router.navigateByUrl('/dashboard/micomponente02');
  }
}
