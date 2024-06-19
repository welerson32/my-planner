import { Component, Input, OnInit } from '@angular/core';
import { Mock } from '../../Models/mock';
import { Task } from '../../Models/TaskModel';
import { Board } from '../../Models/BoardModel';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  @Input() id!:number;

  board: Board | undefined;

  constructor() {
    this.board = Mock.find(x => x.id === this.id)
  }


  ngOnInit() {
    this.board = Mock.find(x => x.id === this.id)
  }

}
