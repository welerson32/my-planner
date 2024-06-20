import { Routes } from '@angular/router';
import { BoardComponent } from './Pages/board/board.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, //default route
  { path: 'home', loadChildren: () => import('./Pages/home/home.module').then(m => m.HomeModule) },
  { path: 'board/:id', loadChildren: () => import('./Pages/board/board.module').then(m => m.BoardModule) },
];
