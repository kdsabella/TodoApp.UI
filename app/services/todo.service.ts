import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.models';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  baseApiUrl: string = "https://localhost:7259"

  constructor(private http: HttpClient) { }

  getAllTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseApiUrl + '/api/todo')
  }

  addTodo(newTodo: Todo): Observable<Todo>{
    //Empty Guid
    newTodo.id = '00000000-0000-0000-0000-000000000000';

    return this.http.post<Todo>(this.baseApiUrl + '/api/todo', newTodo);
  }

  updateTodo(id: string, todo : Todo): Observable<Todo>{
    return this.http.put<Todo>(this.baseApiUrl +'/api/todo/'+ id, todo)
  }

  deteleTodo(id: string): Observable<Todo>{
    return this.http.delete<Todo>(this.baseApiUrl +'/api/todo/'+ id)
  }

  getAllDeleted(): Observable<Todo[]>{
    return this.http.get<Todo[]>(this.baseApiUrl + '/api/todo/get-deleted-todo')
  }

  undoDelete(id: string, todo: Todo): Observable<Todo>{
    return this.http.put<Todo>(this.baseApiUrl + '/api/todo/undo-deleted/' + id, todo)
  }
}
