import { ChangeDetectorRef, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ProductsApiService } from '../../../services/products-api.service';
import { Subscription } from 'rxjs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../../../services/models/product.interface';

@Component({
  selector: 'app-products',
  imports: [MatSidenavModule, MatCardModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit, OnDestroy {
  private readonly _productsApiService = inject(ProductsApiService);
  private _subcription!: Subscription;

  products: Product[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this._subcription = this._productsApiService.getProducts().subscribe((data) => {
      console.log(data);
      this.products = data;
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy(): void {
    if (this._subcription) {
      this._subcription.unsubscribe();
    }
  }
}
