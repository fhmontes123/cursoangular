import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from './models/product.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsApiService {
  _httpClient = inject(HttpClient);
  private readonly URL_PRODUCTS = 'https://fakestoreapi.com/products';

  constructor() {
    console.log('***ProductsApiService');
  }

  getProducts(): Observable<Product[]> {
    return this._httpClient.get<Product[]>(this.URL_PRODUCTS);
  }
}
