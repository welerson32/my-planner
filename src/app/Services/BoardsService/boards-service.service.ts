import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Board } from '../../Models/BoardModel';

@Injectable({
  providedIn: 'root'
})
export class BoardsService {

constructor(
  private http: HttpClient
) { }

getBoards(): Observable<Board[]> {
  return this.http.get<Board[]>(`${environment.MOCK_API_URL}/boards`);
}

createBoard(board: Board): Observable<Board> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.post<Board>(`${environment.MOCK_API_URL}/boards`, board, { headers });
}

updateBoard(board: Board): Observable<Board> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.put<Board>(`${environment.MOCK_API_URL}/boards/${board.id}`, board, { headers });
}

deleteBoard(boardId: number): Observable<Board> {
  return this.http.delete<Board>(`${environment.MOCK_API_URL}/boards/${boardId}`);
}

}
