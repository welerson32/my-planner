import { Component, OnInit } from '@angular/core';
import { Mock } from '../../Models/mock';
import { Board } from '../../Models/BoardModel';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  boardsMock: Board[] = Mock

  constructor() { }

  ngOnInit() {
  }

}
