import { Component, Input } from '@angular/core';
import { IItem } from 'src/interfaces';

@Component({
  selector: 'card-list',
  templateUrl: './card-list.component.html',
})
export class CardListComponent {
  @Input('items') items: IItem[];
}
