import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/Todo';
import { TodoService } from 'src/app/service/todo.service';
import {faTrashAlt}from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  faTrashAlt = faTrashAlt;
  todos: Todo[];
  
  constructor(private todoService: TodoService) {
    this.todos = [];
  }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos) => this.todos = todos);
  }

  changeStatus(todo: Todo) {
    this.todoService.changeStatus(todo)
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo)
  }


}
