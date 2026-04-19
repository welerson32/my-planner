import { Routes } from '@angular/router';

export const applicationRoutes: Routes = [
  { path: '', loadComponent: () => import('./application.component').then(m => m.ApplicationComponent), children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: () => import('../../Domain/home/home.routes').then(m => m.homeRoutes) },
    { path: 'boards', loadChildren: () => import('../../Domain/board/board.routes').then(m => m.boardRoutes) },
    { path: '**', loadComponent: () => import('../not-found/not-found.component').then(m => m.NotFoundComponent), pathMatch: 'prefix' },
  ] },
];
