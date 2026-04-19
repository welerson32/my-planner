import { Routes } from '@angular/router';

export const boardRoutes: Routes = [
  { path: 'view/:id', loadComponent: () => import('./board.component').then(m => m.BoardComponent) },
  { path: '**', loadComponent: () => import('../../Layouts/not-found/not-found.component').then(m => m.NotFoundComponent), pathMatch: 'prefix' },
];
