import { Component, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ProductsApiService } from '../../../services/products-api.service';
import { ProductsSignalService } from '../../../services/products-signal.service';

@Component({
  selector: 'app-products-signal',
  imports: [MatSidenavModule, MatCardModule],
  templateUrl: './products-signal.html',
  styleUrl: './products-signal.css',
})
export class ProductsSignal implements OnInit {
  private readonly _productsApiService = inject(ProductsSignalService);

  products = this._productsApiService.products;

  ngOnInit(): void {
    this._productsApiService.getProducts();
  }
}
