import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mi-componente10',
  imports: [],
  templateUrl: './mi-componente10.html',
  styleUrl: './mi-componente10.css',
})
export class MiComponente10 implements OnInit {
  public nombre: string = '';
  public edad: number = 0;

  private _activatedRoute = inject(ActivatedRoute);
  private sub?: Subscription;

  ngOnInit(): void {
    this.sub = this._activatedRoute.queryParamMap.subscribe((params) => {
      this.nombre = params.get('param_nombre') ?? '';
      this.edad = Number(params.get('param_edad'));
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
