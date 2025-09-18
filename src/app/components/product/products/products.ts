import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ProductsApiService } from '../../../services/products-api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit, OnDestroy {
  private readonly _productsApiService = inject(ProductsApiService);
  private _subcription!: Subscription;

  ngOnInit(): void {
    this._subcription = this._productsApiService
      .getProducts()
      .subscribe((data) => console.log(data));
  }

  ngOnDestroy(): void {
    if (this._subcription) {
      this._subcription.unsubscribe();
    }
  }
}
