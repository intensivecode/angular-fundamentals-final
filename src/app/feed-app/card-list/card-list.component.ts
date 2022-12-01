import { Component, Input } from '@angular/core';
import { Item } from 'interfaces';

@Component({
  selector: 'card-list',
  templateUrl: './card-list.component.html',
})
export class CardListComponent {
  @Input('items') items: Item[];
}
