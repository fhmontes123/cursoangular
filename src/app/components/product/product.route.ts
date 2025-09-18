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
    path: '**',
    pathMatch: 'full',
    redirectTo: 'products',
  },
];
