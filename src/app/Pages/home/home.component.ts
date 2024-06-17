import { Component, OnInit } from '@angular/core';
import { Board } from '../../Models/BoardModel';
import { Mock } from '../../Models/mock';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  boardsMock: Board[] = Mock;

  constructor(private router: Router) {}

  ngOnInit() {}

  goToBoard(id: string) {
    this.router.navigate([`board`, id]);
  }
}
