import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'interfaces';

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent {
  @Output('todoAdded') todoAdded = new EventEmitter();
  todoTitle: string;

  handleSubmit() {
    const todo: Todo = {
      id: new Date().getTime(),
      title: this.todoTitle,
      completed: false,
    };
    this.todoAdded.emit(todo);
    this.todoTitle = '';
  }
}
