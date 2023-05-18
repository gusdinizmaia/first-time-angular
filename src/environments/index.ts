export interface iCharacter {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  gender: string;
  origin: any;
}

export const api = { baseUrl: 'https://rickandmortyapi.com/api' };
