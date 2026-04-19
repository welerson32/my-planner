import { Routes } from '@angular/router';
import { isAuthenticated } from './guard/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./Domain/home/home.component').then(m => m.HomeComponent), canActivate: [isAuthenticated], },
  { path: 'board/:id', loadComponent: () => import('./Domain/board/board.component').then(m => m.BoardComponent), canActivate: [isAuthenticated] },
];
