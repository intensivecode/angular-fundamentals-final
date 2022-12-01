import { Component, Input } from '@angular/core';

type Size = 'small' | 'medium' | 'large';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['../styles.css'],
})
export class CardComponent {
  @Input('title') title: string;
  @Input('image') image: string;
  @Input('size') size?: Size = 'medium';
}
