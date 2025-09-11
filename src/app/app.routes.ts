import { Routes } from '@angular/router';
import { Saludo } from './saludo/saludo';
import { MiComponente01 } from './mi-componente01/mi-componente01';
import { MiComponente02 } from './mi-componente02/mi-componente02';
import { MiComponente03 } from './mi-componente03/mi-componente03';
import { MiComponente04 } from './mi-componente04/mi-componente04';
import { MiComponente05 } from './mi-componente05/mi-componente05';
import { MiComponente06 } from './mi-componente06/mi-componente06';
import { MiComponente07 } from './mi-componente07/mi-componente07';

export const routes: Routes = [
  { path: 'saludo', component: Saludo },
  { path: 'micomponente01', component: MiComponente01 },
  { path: 'micomponente02', component: MiComponente02 },
  { path: 'micomponente03', component: MiComponente03 },
  { path: 'micomponente04', component: MiComponente04 },
  { path: 'micomponente05', component: MiComponente05 },
  { path: 'micomponente06', component: MiComponente06 },
  { path: 'micomponente07', component: MiComponente07 },
  { path: '', redirectTo: '/saludo', pathMatch: 'full' }, // Ruta por defecto
  { path: '**', redirectTo: '/saludo' }, // Ruta para paginas no encontradas
];
