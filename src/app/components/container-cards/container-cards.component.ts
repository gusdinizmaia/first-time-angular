import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-container-cards',
  templateUrl: './container-cards.component.html',
  styleUrls: ['./container-cards.component.css'],
  standalone: true,
  imports: [CardComponent],
})
export class ContainerCardsComponent {
  newCharacters = [
    { name: 'morty', image: '' },
    { name: 'summer', image: '' },
  ];
}
