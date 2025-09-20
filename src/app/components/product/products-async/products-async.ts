import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ProductsApiService } from '../../../services/products-api.service';
import { Observable } from 'rxjs';
import { Product } from '../../../services/models/product.interface';

@Component({
  selector: 'app-products-async',
  imports: [MatSidenavModule, MatCardModule, AsyncPipe],
  templateUrl: './products-async.html',
  styleUrl: './products-async.css',
})
export class ProductsAsync {
  private readonly _productsApiService = inject(ProductsApiService);
  products: Observable<Product[]> = this._productsApiService.getProducts();
}
