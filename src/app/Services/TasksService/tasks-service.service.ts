import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Task } from '../../Models/TaskModel';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private http: HttpClient) {}

  //Get all tasks.
  async getTasks(boardId: number): Promise<Observable<Task[]>> {
    return this.http.get<Task[]>(
      `${environment.MOCK_API_URL}/boards/${boardId}/task`
    );
  }

  //Get task by id.
  async getTask(taskId: number): Promise<Observable<Task>> {
    return this.http.get<Task>(`${environment.MOCK_API_URL}/boards/${taskId}`);
  }

  //Create a new task.
  async createTask(boardId: number, task: Task): Promise<Observable<Task>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Task>(
      `${environment.MOCK_API_URL}/boards/${boardId}/task`,
      task,
      { headers }
    );
  }

  //Update task by id.
  async updateTask(boardId: number, task: Task): Promise<Observable<Task>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Task>(
      `${environment.MOCK_API_URL}/boards/${boardId}/task/${task.id}`,
      task,
      { headers }
    );
  }

  //Delete task by id.
  async deleteTask(boardId: number, taskId: number): Promise<Observable<Task>> {
    return this.http.delete<Task>(
      `${environment.MOCK_API_URL}/boards/${boardId}/task/${taskId}`
    );
  }
}
