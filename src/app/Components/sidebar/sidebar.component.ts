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
  boardsMock: Board[] = Mock;

  constructor(private router: Router) {}

  ngOnInit() {}

  goToBoard(id: string) {
    console.log(id);

    this.router.navigate([`board`, id]);
  }
}
