import { Component, inject } from '@angular/core';
import { ProductsApiService } from '../../../services/products-api.service';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  private readonly _productsApiService = inject(ProductsApiService);
}
