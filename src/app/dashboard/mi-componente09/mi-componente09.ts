import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mi-componente09',
  imports: [],
  templateUrl: './mi-componente09.html',
  styleUrl: './mi-componente09.css',
})
export class MiComponente09 implements OnInit, OnDestroy {
  public nombre: string = '';
  public edad: number = 0;

  private _activatedRoute = inject(ActivatedRoute);
  private sub?: Subscription;

  ngOnInit(): void {
    this.sub = this._activatedRoute.paramMap.subscribe((params) => {
      this.nombre = params.get('param_nombre') ?? '';
      this.edad = Number(params.get('param_edad'));
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
