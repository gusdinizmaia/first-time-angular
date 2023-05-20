import { Component } from '@angular/core';
import { ContainerCardsComponent } from 'src/app/components/container-cards/container-cards.component';
import { ContainerTitleComponent } from 'src/app/components/container-title/container-title.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [ContainerCardsComponent, ContainerTitleComponent],
})
export class HomeComponent {}
