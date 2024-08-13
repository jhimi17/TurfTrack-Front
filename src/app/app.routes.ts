import { Routes } from '@angular/router';
import { CanchaListComponent } from './cancha-list/cancha-list.component';
import { CanchaDetailsComponent } from './cancha-details/cancha-details.component';
import { HistorialComponent } from './historial/historial.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: '/canchas', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'canchas', component: CanchaListComponent },
  { path: 'canchas/:id', component: CanchaDetailsComponent },
  { path: 'historial', component: HistorialComponent },
];
