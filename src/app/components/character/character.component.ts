import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/api';
import { RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class CharacterComponent implements OnInit {
  character = {} as iCharacter;

  constructor(private api: DataService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      const id = Number(param.get('id'));
      this.api
        .getCharacter(id)
        .then((res) => (this.character = res))
        .then((res) => console.log(res));
    });
  }
}

import { CommonModule } from '@angular/common';
import { iCharacter } from 'src/environments';
