import { Component, OnInit } from '@angular/core';
import { Board } from '../../Models/BoardModel';
import { Router } from '@angular/router';
import { BoardsService } from '../../Services/BoardsService/boards-service.service';
import { ConfirmationService, Message } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  boards: Board[] = [];
  messages!: Message[];
  newBoardName: string = '';
  idToDelete!: number;
  boardToEdit!: Board;

  loadingList: boolean = false;
  savingBoard: boolean = false;
  deletingBoard: boolean = false;
  openEdition: boolean = false;

  constructor(
    private router: Router,
    private _boardService: BoardsService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.loadBoards();
  }

  //Load all boards to fill the home page board grid.
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

  //Call Boards Service to update board by id.
  async updateBoard() {
    this.savingBoard = true;
    this.boardToEdit.boardName = this.newBoardName;
    (await this._boardService.updateBoard(this.boardToEdit)).subscribe({
      next: (res) => {
        this.loadBoards();
        this.resetFields();
        this.messages = [
          { severity: 'success', detail: 'Board updated successfully!' },
        ];
        window.location.reload();
      },
      error: (erro) => {
        this.resetFields();
        this.messages = [
          { severity: 'error', detail: 'Error updating board!' },
        ];
        console.log(erro);
      },
    });
  }

  //Call Boards Service to delete board by id.
  async deleteBoard(id: number) {
    this.idToDelete = id;
    this.deletingBoard = true;
    (await this._boardService.deleteBoard(id)).subscribe({
      next: (res) => {
        this.loadBoards();
        this.deletingBoard = false;
        this.messages = [
          { severity: 'success', detail: 'Board deleted successfully!' },
        ];
        window.location.reload();
      },
      error: (erro) => {
        this.deletingBoard = false;
        this.messages = [
          { severity: 'error', detail: 'Error deleting board!' },
        ];
        console.log(erro);
      },
    });
  }

  //Open update board dialog.
  showEditDialog(board: Board) {
    this.setBoardToUpdate(board);
    this.openEdition = true;
  }

  //Set data to update board
  setBoardToUpdate(board: Board) {
    this.boardToEdit = board;
    this.newBoardName = board.boardName;
  }

  //Open delete board confirmation.
  showDeleteConfirmation(event: Event, board: Board) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Do you want to delete this board?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: 'p-button-danger p-button-text',
      rejectButtonStyleClass: 'p-button-text p-button-text',
      acceptIcon: 'none',
      rejectIcon: 'none',

      accept: () => {
        this.deleteBoard(board.id)
      },
      reject: () => {},
    });
  }

  //Close edition dialog and reset fields
  resetFields() {
    this.openEdition = false;
    this.savingBoard = false;
    this.newBoardName = '';
  }

  //Navigate to selected board.
  goToBoard(id: number) {
    this.router.navigate([`board`, id]);
  }
}
