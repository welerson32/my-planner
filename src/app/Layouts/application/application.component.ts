import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BoardsService, TasksService } from '../../Services';
import { SidebarComponent } from '../../UI';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

@Component({
  selector: 'app-application',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarComponent
  ],
  providers: [BoardsService, TasksService, { provide: LOCALE_ID, useValue: 'pt-BR' }],
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
