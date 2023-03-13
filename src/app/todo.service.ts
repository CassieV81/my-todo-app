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
  editTodo(todo: Todo, newTodoName: string) {
    todo.name = newTodoName;
  }
  deleteTodoById(id: number) {
    const index = this.todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
        this.todos.splice(index, 1);
    }
  }

}
