import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'interfaces';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  @Input('todo') todo: Todo;
  @Output('todoUpdated') todoUpdated = new EventEmitter();
  @Output('todoDeleted') todoDeleted = new EventEmitter();
}
