import { Component } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  
  constructor(public todoService: TodoService) {};

  editTodo (todo: Todo) {
    const newTodoName = prompt("Enter new todo name", todo.name);
    if (newTodoName !== null) {
      this.todoService.editTodo(todo, newTodoName);
    }
  }
   
  deleteTodo(todo: Todo) {
    if (confirm("Are you sure you want to delete this todo?")) {
      this.todoService.deleteTodoById(todo.id);
    }
  }
  markComplete(todo: Todo, target: EventTarget | null) {
    if (target instanceof HTMLElement) {
      this.todoService.markComplete(todo);
      if (target.classList.contains('btn-secondary')) {
        target.classList.remove('btn-secondary');
        target.classList.add('btn-success');
      } else {
        target.classList.remove('btn-success');
        target.classList.add('btn-secondary');
      }
    }
  }  
 
  
}
