import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-mi-componente08',
  imports: [RouterLink],
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

  redirectToComponente09(): void {
    // PATHPARAMS
    this._router.navigate(['/dashboard/micomponente09', 'Alex', 20]);
  }

  redirectToComponente10(): void {
    // QUERYPARAMS
    this._router.navigate(['/dashboard/micomponente10'], {
      queryParams: { param_nombre: 'Jhon', param_edad: 25 },
    });
  }
}
