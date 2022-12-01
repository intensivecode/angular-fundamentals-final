import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'interfaces';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  @Input('todos') todos: Todo[];
  @Output('todoUpdated') todoUpdated = new EventEmitter();
  @Output('todoDeleted') todoDeleted = new EventEmitter();
}
