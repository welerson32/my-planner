import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../Models/TaskModel';
import { Board, EmptyBoard } from '../../Models/BoardModel';
import { Router } from '@angular/router';
import { ConfirmationService, Message } from 'primeng/api';
import { BoardsService } from '../../Services/BoardsService/boards-service.service';
import { FilterOptions, Status, StatusOptions } from '../../Models/StatusModel';
import { FormGroup, FormControl } from '@angular/forms';
import { TasksService } from '../../Services/TasksService/tasks-service.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  @Input() id!: number;

  dialogData = new FormGroup({
    id: new FormControl<number>(0),
    boardId: new FormControl<number>(0),
    title: new FormControl<string>(''),
    desc: new FormControl<string>(''),
    dueDate: new FormControl<Date>(new Date()),
    status: new FormControl<number>(1),
  });

  board: Board = EmptyBoard;
  messages!: Message[];
  pendingList: Task[] = [];
  progressList: Task[] = [];
  doneList: Task[] = [];
  statusOptions: Status[] = StatusOptions;
  filerOptions: Status[] = FilterOptions;
  filterValue: number = 0;
  idToDelete!: number;

  loadingList: boolean = false;
  openTaskDialog: boolean = false;
  savingTask: boolean = false;
  deletingTask: boolean = false;
  createNew: boolean = false;

  constructor(
    private router: Router,
    private _taskService: TasksService,
    private _boardService: BoardsService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.loadBoard();
  }

  //Load board information to fill the task grid.
  async loadBoard() {
    this.loadingList = true;
    (await this._boardService.getBoard(this.id)).subscribe({
      next: (res) => {
        this.board = res;
        this.fillTaskLists();
        this.loadingList = false;
      },
      error: (erro) => {
        this.messages = [
          { severity: 'error', detail: 'Error loading board tasks!' },
        ];
        console.log(erro);
      },
    });
  }

  //Fill task arrays following each status
  fillTaskLists() {
    this.pendingList = [];
    this.progressList = [];
    this.doneList = [];

    this.board.tasks.forEach((task) => {
      if (task.status === 1) {
        this.pendingList.push(task);
      } else if (task.status === 2) {
        this.progressList.push(task);
      } else if (task.status === 3) {
        this.doneList.push(task);
      }
    });
  }

  //Call Tasks Service to create a new task.
  async createTask() {
    this.savingTask = true;
    (
      await this._taskService.createTask(
        this.board.id,
        this.mapCreateTaskBody()
      )
    ).subscribe({
      next: (res) => {
        this.loadBoard();
        this.resetFields();
        this.messages = [
          { severity: 'success', detail: 'Task created successfully!' },
        ];
      },
      error: (erro) => {
        this.resetFields();
        this.messages = [{ severity: 'error', detail: 'Error creating task!' }];
        console.log(erro);
      },
    });
  }

  //Map task create data before send to api.
  mapCreateTaskBody() {
    return {
      title: this.dialogData.controls.title.value,
      desc: this.dialogData.controls.desc.value,
      dueDate: this.dialogData.controls.dueDate.value?.toString(),
      status: this.dialogData.controls.status.value,
    } as Task;
  }

  //Call Tasks Service to update task by id.
  async updateTask() {
    this.savingTask = true;
    (
      await this._taskService.updateTask(
        this.board.id,
        this.mapUpdateTaskBody()
      )
    ).subscribe({
      next: (res) => {
        this.loadBoard();
        this.resetFields();
        this.messages = [
          { severity: 'success', detail: 'Task updated successfully!' },
        ];
      },
      error: (erro) => {
        this.resetFields();
        this.messages = [{ severity: 'error', detail: 'Error updating task!' }];
        console.log(erro);
      },
    });
  }

  //Map task update data before send to api.
  mapUpdateTaskBody() {
    return {
      id: this.dialogData.controls.id.value,
      boardId: this.dialogData.controls.boardId.value,
      title: this.dialogData.controls.title.value,
      desc: this.dialogData.controls.desc.value,
      dueDate: this.dialogData.controls.dueDate.value?.toString(),
      status: this.dialogData.controls.status.value,
    } as Task;
  }

  //Call Boards Service to delete board by id.
  async deleteTask(id: number) {
    this.idToDelete = id;
    this.deletingTask = true;
    (await this._taskService.deleteTask(this.board.id, id)).subscribe({
      next: (res) => {
        this.loadBoard();
        this.deletingTask = false;
        this.messages = [
          { severity: 'success', detail: 'Task deleted successfully!' },
        ];
      },
      error: (erro) => {
        this.deletingTask = false;
        this.messages = [
          { severity: 'error', detail: 'Error deleting task!' },
        ];
        console.log(erro);
      },
    });
  }

  //Open task dialog to create new.
  newTask() {
    this.createNew = true;
    this.dialogData.reset({
      id: 0,
      boardId: 0,
      title: '',
      desc: '',
      dueDate: new Date(),
      status: 1,
    });
    this.openTaskDialog = true;
  }

  //Open task dialog to edit.
  showTaskDialog(task: Task) {
    this.createNew = false;
    this.dialogData.reset({
      id: task.id,
      boardId: task.boardId,
      title: task.title,
      desc: task.desc,
      dueDate: new Date(task.dueDate),
      status: task.status,
    });
    this.openTaskDialog = true;
  }

  //Open delete task confirmation.
  showDeleteConfirmation(event: Event, task: Task) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Do you want to delete this task?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: 'p-button-danger p-button-text',
      rejectButtonStyleClass: 'p-button-text p-button-text',
      acceptIcon: 'none',
      rejectIcon: 'none',

      accept: () => {
        if(task.id) {
          this.deleteTask(task.id)
        }
      },
      reject: () => {},
    });
  }

  //Save dialog task data
  saveTask() {
    if (this.createNew) {
      this.createTask();
    } else if (!this.createNew) {
      this.updateTask();
    }
  }

  //Close task dialog and reset fields
  resetFields() {
    this.savingTask = false;
    this.openTaskDialog = false;
  }

  //Navigate to home page.
  goToHome() {
    this.router.navigate([`home`]);
  }
}
