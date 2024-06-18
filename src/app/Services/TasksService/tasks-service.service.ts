import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Task } from '../../Models/TaskModel';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(
    private http: HttpClient
  ) { }
  
  getTasks(boardId: number): Observable<Task[]> {
    return this.http.get<Task[]>(`${environment.MOCK_API_URL}/boards/${boardId}/task`);
  }
  
  createTask(boardId: number, task: Task): Observable<Task> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Task>(`${environment.MOCK_API_URL}/boards/${boardId}/task`, task, { headers });
  }
  
  updateTask(boardId: number, task: Task): Observable<Task> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Task>(`${environment.MOCK_API_URL}/boards/${boardId}/task/${task.id}`, task, { headers });
  }
  
  deleteTask(boardId: number, taskId: number): Observable<Task> {
    return this.http.delete<Task>(`${environment.MOCK_API_URL}/boards/${boardId}/task/${taskId}`);
  }

}
