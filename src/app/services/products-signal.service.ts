import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Product } from './models/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsSignalService {
  _httpClient = inject(HttpClient);
  private readonly URL = 'https://fakestoreapi.com/products';

  products = signal<Product[]>([]);

  getProducts(): void {
    this._httpClient.get<Product[]>(this.URL).subscribe({
      next: (data) => this.products.set(data),
      error: (err) => console.log('Error cargando productos', err),
    });
  }
}
