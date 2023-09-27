export interface User {
  name: string;
  birthday: string;
  avatarUri: string | null;
}

export interface PokemonListItemType {
  name: string;
  url: string;
}

export interface Pokemon {
  name: string;
  types: { type: { name: string; url: string } }[];
  moves: { move: { name: string; url: string } }[];
}
