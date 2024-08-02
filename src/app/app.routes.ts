import { Routes } from '@angular/router';
import { CanchaListComponent } from './cancha-list/cancha-list.component';
import { CanchaDetailsComponent } from './cancha-details/cancha-details.component';

export const routes: Routes = [
  { path: '', component: CanchaListComponent },
  { path: 'cancha-details/:id', component: CanchaDetailsComponent }
];
