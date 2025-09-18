import { Routes } from '@angular/router';
import { Saludo } from './saludo/saludo';
import { MiComponente01 } from './mi-componente01/mi-componente01';
import { MiComponente04 } from './mi-componente04/mi-componente04';
import { MiComponente05 } from './mi-componente05/mi-componente05';
import { MiComponente06 } from './mi-componente06/mi-componente06';
import { MiComponente07 } from './mi-componente07/mi-componente07';
import { MiComponente08 } from './mi-componente08/mi-componente08';
import { MiComponente09 } from './mi-componente09/mi-componente09';
import { MiComponente10 } from './mi-componente10/mi-componente10';
import { MiComponente11 } from './mi-componente11/mi-componente11';

export const practicasRoutes: Routes = [
  { path: 'saludo', component: Saludo },
  { path: 'micomponente01', component: MiComponente01 }, // dashboard/componente01/
  {
    path: 'micomponente02',
    loadComponent: () => import('./mi-componente02/mi-componente02').then((c) => c.MiComponente02),
  },
  {
    path: 'micomponente03',
    loadComponent: () => import('./mi-componente03/mi-componente03'),
  },
  { path: 'micomponente04', component: MiComponente04 },
  { path: 'micomponente05', component: MiComponente05 },
  { path: 'micomponente06', component: MiComponente06 },
  { path: 'micomponente07', component: MiComponente07 },
  { path: 'micomponente08', component: MiComponente08 },
  { path: 'micomponente09/:param_nombre/:param_edad', component: MiComponente09 },
  { path: 'micomponente10', component: MiComponente10 },
  { path: 'micomponente11', component: MiComponente11 },
  {
    path: '', // Ruta hija por defecto /dashboard
    redirectTo: 'saludo',
    pathMatch: 'full',
  },
];
