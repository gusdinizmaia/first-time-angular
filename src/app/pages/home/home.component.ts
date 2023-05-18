import { Component } from '@angular/core';
import { ContainerCardsComponent } from 'src/app/components/container-cards/container-cards.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [ContainerCardsComponent],
})
export class HomeComponent {}
