import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo.models';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-deleted-todo',
  templateUrl: './deleted-todo.component.html',
  styleUrl: './deleted-todo.component.css'
})
export class DeletedTodoComponent implements OnInit{
  deletedTodos: Todo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getAllDeleted();
  }

  getAllDeleted(){
    this.todoService.getAllDeleted()
    .subscribe({
      next: (res) =>{
        this.deletedTodos = res;
        console.log(this.deletedTodos)
      }
    })
  }

  undoDelete(id: string, todo: Todo){
    this.todoService.undoDelete(id,todo)
    .subscribe({
      next: (res)=>{
        this.getAllDeleted();
      }
    })
  }
}
