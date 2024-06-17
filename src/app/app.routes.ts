import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { BoardComponent } from './Pages/board/board.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, //default route
  { path: 'home', component: HomeComponent },
  { path: 'board', component: BoardComponent },
];
