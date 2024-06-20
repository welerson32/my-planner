import { Component, LOCALE_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeModule } from './Pages/home/home.module';
import { SidebarModule } from './Components/sidebar/sidebar.module';
import { BoardModule } from './Pages/board/board.module';
import { BoardsService } from './Services/BoardsService/boards-service.service';
import { TasksService } from './Services/TasksService/tasks-service.service';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HttpClientModule,
    RouterOutlet,
    HomeModule,
    SidebarModule,
    BoardModule
  ],
  providers: [BoardsService, TasksService, { provide: LOCALE_ID, useValue: 'pt-BR' }],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-planner';
}
