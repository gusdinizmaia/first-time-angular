import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterComponent } from '../character/character.component';

@Component({
  selector: 'app-container-character',
  standalone: true,
  imports: [CommonModule, CharacterComponent],
  templateUrl: './container-character.component.html',
  styleUrls: ['./container-character.component.css'],
})
export class ContainerCharacterComponent {}
