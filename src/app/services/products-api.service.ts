import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsApiService {
  constructor() {
    console.log('***ProductsApiService');
  }
}
