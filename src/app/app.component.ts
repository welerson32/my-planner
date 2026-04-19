import { Component, LOCALE_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BoardsService } from './Services/BoardsService/boards-service.service';
import { TasksService } from './Services/TasksService/tasks-service.service';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { SidebarComponent } from './UI';

registerLocaleData(localePt);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HttpClientModule,
    RouterOutlet,
    SidebarComponent
  ],
  providers: [BoardsService, TasksService, { provide: LOCALE_ID, useValue: 'pt-BR' }],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-planner';
}
