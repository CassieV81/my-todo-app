import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  newTodoName: string = '';

  constructor(private todoService: TodoService) {}

  addTodo() {
    if (this.newTodoName.trim()) {
      this.todoService.addTodo(this.newTodoName);
      this.newTodoName = '';
    }
  }
}
