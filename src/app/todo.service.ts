import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  todos: Todo[] = [
    { id: 1, name: 'Buy groceries' },
    { id: 2, name: 'Do laundry' },
    { id: 3, name: 'Clean the house' }
  ];

  addTodo(newTodoName: string) {
    const newTodo: Todo = { id: this.todos.length + 1, name: newTodoName};
    this.todos.push(newTodo);
  }

}
