import { Pokemon } from '../types';

export async function fetchPokemon(name: string): Promise<Pokemon> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = await response.json();

  return { name: data.name, types: data.types, moves: data.moves };
}
