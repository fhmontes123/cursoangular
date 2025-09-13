import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./shared/dashboard.routes').then((m) => m.dashboardRoutes),
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Ruta por defecto
  { path: '**', redirectTo: '/dashboard' }, // Ruta para paginas no encontradas
];
