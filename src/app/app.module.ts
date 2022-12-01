/* Modules */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

/* Main App */
import { AppComponent } from './app.component';

/* Feed App */
import { FeedAppComponent } from './feed-app/feed.component';
import { CardComponent } from './feed-app/card/card.component';
import { CardListComponent } from './feed-app/card-list/card-list.component';

/* Todo App */
import { TodoAppComponent } from './todo-app/todo-app.component';
import { TodoComponent } from './todo-app/todo/todo.component';
import { TodoListComponent } from './todo-app/todo-list/todo-list.component';
import { TodoFormComponent } from './todo-app/todo-form/todo-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedAppComponent,
    CardComponent,
    CardListComponent,
    TodoAppComponent,
    TodoComponent,
    TodoListComponent,
    TodoFormComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
