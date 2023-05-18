import { api, iCharacter } from 'src/environments';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getCharacters = (): Promise<iCharacter[]> => {
    const data = fetch(`${api.baseUrl}/character/?page=1`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((res) => res.results)
      .catch((err) => console.log(err));

    return data;
  };

  getCharacter = (id: number): Promise<iCharacter> => {
    const data = fetch(`${api.baseUrl}/character/${id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));

    return data;
  };
}
