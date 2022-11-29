import { Component } from '@angular/core';
import { IItem } from '../../interfaces';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
})
export class FeedComponent {
  items: IItem[] = [
    {
      title: 'first item',
      image: 'https://via.placeholder.com/350x150',
    },
    {
      title: 'second item',
      image: 'https://via.placeholder.com/350x150',
    },
    {
      title: 'third item',
      image: 'https://via.placeholder.com/350x150',
    },
  ];
}
