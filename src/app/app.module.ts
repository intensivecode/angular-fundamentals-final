import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component';
import { CardComponent } from './feed/card/card.component';
import { CardListComponent } from './feed/card-list/card-list.component';

@NgModule({
  declarations: [AppComponent, FeedComponent, CardComponent, CardListComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
