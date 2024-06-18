import { Component, OnInit } from '@angular/core';
import { Mock } from '../../Models/mock';
import { Board } from '../../Models/BoardModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  boardName: string = ''
  boards: Board[] = Mock;
  visible: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  logName() {
    console.log(this.boardName);
    this.visible = false;
    this.boardName = ''
  }

  showDialog() {
      this.visible = true;
  }

  goToBoard(id: string) {
    this.router.navigate([`board`, id]);
  }
}
