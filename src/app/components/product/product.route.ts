import { Routes } from '@angular/router';

export const productRoutes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  {
    path: 'products',
    loadComponent: () => import('./products/products').then((c) => c.Products),
    title: 'Products',
  },
  {
    path: 'products-async',
    loadComponent: () => import('./products-async/products-async').then((c) => c.ProductsAsync),
    title: 'Products Async',
  },
  {
    path: 'products-signal',
    loadComponent: () => import('./products-signal/products-signal').then((c) => c.ProductsSignal),
    title: 'Products Signal',
  },
  {
    path: 'products-crud',
    loadComponent: () => import('./products-crud/products-crud').then((c) => c.ProductsCrud),
    title: 'Products',
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'products',
  },
];
