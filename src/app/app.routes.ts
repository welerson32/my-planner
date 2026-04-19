import { Routes } from '@angular/router';
import { isAuthenticated } from './guard/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  { path: 'app', loadChildren: () => import('./Layouts/application/application.routes').then(m => m.applicationRoutes), canActivate: [isAuthenticated] },
  { path: '**', redirectTo: 'app', pathMatch: 'full' },
];
