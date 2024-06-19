import { Component, OnInit } from '@angular/core';
import { Board } from '../../Models/BoardModel';
import { Router } from '@angular/router';
import { BoardsService } from '../../Services/BoardsService/boards-service.service';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  loadingList: boolean = false;
  messages!: Message[];
  boardName: string = '';
  boards: Board[] = [];
  visible: boolean = false;

  constructor(private router: Router, private _boardService: BoardsService) {}

  ngOnInit() {
    this.loadBoards();
  }

  //Load all boards to fill the sidebar board list.
  async loadBoards() {
    this.loadingList = true;
    (await this._boardService.getAllBoards()).subscribe({
      next: (res) => {
        this.boards = res;
        this.loadingList = false;
      },
      error: (erro) => {
        this.messages = [
          { severity: 'error', detail: 'Error loading boards!' },
        ];
        console.log(erro);
      },
    });
  }

  //Call Boards Service to create a new service.
  async createBoard() {
    (await this._boardService.createBoard(this.boardName)).subscribe({
      next: (res) => {
        this.loadBoards();
        this.visible = false;
        this.boardName = '';
        this.messages = [
          { severity: 'success', detail: 'Board created successfully!' },
        ];
      },
      error: (erro) => {
        this.messages = [
          { severity: 'error', detail: 'Error creating boards!' },
        ];
        console.log(erro);
      },
    });
  }

  //Open board creation dialog.
  showDialog() {
    this.visible = true;
  }

  //Clean dialog text field
  cleanField() {
    this.visible = false;
    this.boardName = '';
  }

  //Navigate to selected board.
  goToBoard(id: string) {
    this.router.navigate([`board`, id]);
  }

  //Navigate to HomePage.
  goToHome() {
    this.router.navigate([`home`]);
  }
}
