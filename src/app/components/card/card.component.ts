import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/services/api';
import { iCharacter } from 'src/environments';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class CardComponent implements OnInit {
  characters?: iCharacter[];

  constructor(private api: DataService) {}

  ngOnInit() {
    this.api.getCharacters().then((res) => (this.characters = res));
  }
}
