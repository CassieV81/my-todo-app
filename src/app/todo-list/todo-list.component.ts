import { Component } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos: Todo[] = [
    {id: 1, name: "Buy Groceries", completed: false},
    {id: 2, name: "Clean the house", completed: true},
    {id: 3, name: "Do Laundry", completed: false}
  ];
}
