import { Routes } from "@angular/router";

export const homeRoutes: Routes = [
  { path: '', loadComponent: () => import('./home.component').then(m => m.HomeComponent) },
  { path: '**', loadComponent: () => import('../../Layouts/not-found/not-found.component').then(m => m.NotFoundComponent), pathMatch: 'prefix' },
]
