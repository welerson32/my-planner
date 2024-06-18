import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeModule } from './Pages/home/home.module';
import { SidebarModule } from './Components/sidebar/sidebar.module';
import { BoardModule } from './Pages/board/board.module';
import { BoardsServiceService } from './Services/BoardsService/boards-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeModule,
    SidebarModule,
    BoardModule,
  ],
  providers: [BoardsServiceService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-planner';
}
