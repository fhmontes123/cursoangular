import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../services/models/product.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products-crud',
  imports: [
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
    FormsModule,
  ],
  templateUrl: './products-crud.html',
  styleUrl: './products-crud.css',
})
export class ProductsCrud implements OnInit {
  private readonly _service = inject(ProductService);
  private readonly snackBar = inject(MatSnackBar);
  private _subcription!: Subscription;

  products: Product[] = [];
  displayedColumns: string[] = ['id', 'title', 'category', 'price', 'actions'];

  newProduct: Partial<Product> = {
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
  };

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this._subcription = this._service.getAll().subscribe((data) => {
      this.products = data;
      this.cdr.detectChanges();
    });
  }

  addProduct(): void {
    this._service.create(this.newProduct).subscribe({
      next: (res) => {
        // Limpiar el formulario
        this.newProduct = { title: '', price: 0, description: '', category: '', image: '' };

        // Recargar listado
        this.loadProducts();

        // Mostrar mensaje al usuario
        this.snackBar.open('Producto creado correctamente', 'Cerrar', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });

        console.log('Respuesta del backend:', res);
      },
      error: (err) => {
        this.snackBar.open('Error al crear el producto', 'Cerrar', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
        console.error('Error al crear producto:', err);
      },
    });
  }

  deleteProduct(id: number): void {
    this._service.delete(id).subscribe({
      next: () => {
        this.loadProducts();

        this.snackBar.open('Producto eliminado correctamente', 'Cerrar', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
      },
      error: (err) => {
        this.snackBar.open('Error al eliminar el producto', 'Cerrar', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
        console.error('Error eliminando producto:', err);
      },
    });
  }
}
