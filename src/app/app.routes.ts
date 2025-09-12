import { Routes } from '@angular/router';
import { Saludo } from './dashboard/saludo/saludo';
import { MiComponente01 } from './dashboard/mi-componente01/mi-componente01';
import { MiComponente02 } from './dashboard/mi-componente02/mi-componente02';
import { MiComponente03 } from './dashboard/mi-componente03/mi-componente03';
import { MiComponente04 } from './dashboard/mi-componente04/mi-componente04';
import { MiComponente05 } from './dashboard/mi-componente05/mi-componente05';
import { MiComponente06 } from './dashboard/mi-componente06/mi-componente06';
import { MiComponente07 } from './dashboard/mi-componente07/mi-componente07';
import { Dashboard } from './dashboard/dashboard';
import { MiComponente08 } from './dashboard/mi-componente08/mi-componente08';
import { MiComponente09 } from './dashboard/mi-componente09/mi-componente09';
import { MiComponente10 } from './dashboard/mi-componente10/mi-componente10';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: Dashboard,
    children: [
      { path: 'saludo', component: Saludo },
      { path: 'micomponente01', component: MiComponente01 }, // dashboard/componente01/
      { path: 'micomponente02', component: MiComponente02 }, // dashboard/componente02/
      { path: 'micomponente03', component: MiComponente03 },
      { path: 'micomponente04', component: MiComponente04 },
      { path: 'micomponente05', component: MiComponente05 },
      { path: 'micomponente06', component: MiComponente06 },
      { path: 'micomponente07', component: MiComponente07 },
      { path: 'micomponente08', component: MiComponente08 },
      { path: 'micomponente09/:param_nombre/:param_edad', component: MiComponente09 },
      { path: 'micomponente10', component: MiComponente10 },
      {
        path: '', // Ruta hija por defecto /dashboard
        redirectTo: 'saludo',
        pathMatch: 'full',
      },
    ],
  },

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Ruta por defecto
  { path: '**', redirectTo: '/dashboard' }, // Ruta para paginas no encontradas
];
