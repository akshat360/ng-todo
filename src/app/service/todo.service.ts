import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from '../model/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [];

  constructor() { 
    this.todos = [{
      id: "111",
      title: "LEarn new Stuff",
      isCompleted: true,
      date: new Date()
    },{
      id: "222",
      title: "LEarn React",
      isCompleted: true,
      date: new Date()
    },{
      id: "333",
      title: "LEarn Angular 11",
      isCompleted: false,
      date: new Date()
    }
    ]
  }

  getTodos() {
    return of(this.todos)
  }
  
  addTodo(todo: Todo) {
    this.todos.push(todo)
  }
  deleteTodo(todo: Todo) {
    // this.todos.filter(cTodo => cTodo.id !== todo.id);
    let index =this.todos.findIndex(cTodo => cTodo.id === todo.id);
    this.todos.splice(index,1);

  }
  changeStatus(todo: Todo) {
    this.todos.map(cTodo => { 
      if (cTodo.id === todo.id) {
        todo.isCompleted= !todo.isCompleted
      }
    });
  }
}
