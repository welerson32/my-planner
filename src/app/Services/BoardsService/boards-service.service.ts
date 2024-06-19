import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Board } from '../../Models/BoardModel';

@Injectable({
  providedIn: 'root',
})
export class BoardsService {
  constructor(private http: HttpClient) {}

  async getAllBoards(): Promise<Observable<Board[]>> {
    return this.http.get<Board[]>(`${environment.MOCK_API_URL}/boards`);
  }

  async getBoard(boardId: number): Promise<Observable<Board[]>> {
    return this.http.get<Board[]>(`${environment.MOCK_API_URL}/boards/${boardId}`);
  }

  async createBoard(boardName: string): Promise<Observable<Board>> {
    const body = { boardName: boardName };

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Board>(`${environment.MOCK_API_URL}/boards`, body, {
      headers,
    });
  }

  async updateBoard(board: Board): Promise<Observable<Board>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Board>(
      `${environment.MOCK_API_URL}/boards/${board.id}`,
      board,
      { headers }
    );
  }

  async deleteBoard(boardId: number): Promise<Observable<Board>> {
    return this.http.delete<Board>(
      `${environment.MOCK_API_URL}/boards/${boardId}`
    );
  }
}