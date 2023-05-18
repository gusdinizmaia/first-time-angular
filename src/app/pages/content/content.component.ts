import { Component } from '@angular/core';
import { ContainerCharacterComponent } from 'src/app/components/container-character/container-character.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  standalone: true,
  imports: [ContainerCharacterComponent],
})
export class ContentComponent {}
