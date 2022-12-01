import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Todo } from 'interfaces';

@Component({
  selector: 'todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css'],
})
export class TodoAppComponent {
  private url = 'https://jsonplaceholder.typicode.com/todos';
  todos: Todo[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Todo[]>(this.url).subscribe((todos) => (this.todos = todos));
  }

  handleTodoAdded(todo: Todo) {
    this.todos = [todo, ...this.todos];
  }

  handleTodoUpdated(todoId: number) {
    const todo = this.todos.find((todo) => todo.id === todoId);
    if (todo) todo.completed = !todo.completed;
  }

  handleTodoDeleted(todoId: number) {
    this.todos = this.todos.filter((todo) => todo.id !== todoId);
  }
}
