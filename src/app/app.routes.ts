import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, //default route
  { path: 'home', loadComponent: () => import('./Domain/home/home.component').then(m => m.HomeComponent) },
  { path: 'board/:id', loadComponent: () => import('./Domain/board/board.component').then(m => m.BoardComponent) },
];
