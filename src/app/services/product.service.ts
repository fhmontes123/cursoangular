import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './models/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly URL = 'https://fakestoreapi.com/products';
  _http = inject(HttpClient);

  // Listar Productos
  getAll(): Observable<Product[]> {
    return this._http.get<Product[]>(this.URL);
  }

  // Crear Productos
  create(product: Partial<Product>): Observable<Product> {
    return this._http.post<Product>(this.URL, product);
  }

  // Obtener producto por id
  getById(id: number): Observable<Product> {
    return this._http.get<Product>(`${this.URL}/${id}`);
  }

  // Actualizar producto
  update(id: number, product: Partial<Product>): Observable<Product> {
    return this._http.put<Product>(`${this.URL}/${id}`, product);
  }

  // Eliminar producto
  delete(id: number): Observable<any> {
    return this._http.delete(`${this.URL}/${id}`);
  }
}
