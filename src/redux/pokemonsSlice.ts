import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Pokemon } from '../types';

const initialState: Pokemon[] = [];

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    initializeState(
      _state: Pokemon[],
      action: PayloadAction<Pokemon[]>,
    ): Pokemon[] {
      return action.payload;
    },
    addPokemon(state: Pokemon[], action: PayloadAction<Pokemon>): Pokemon[] {
      return [...state, action.payload];
    },
    removePokemon(state: Pokemon[], action: PayloadAction<string>): Pokemon[] {
      return state.filter(pokemon => pokemon.name !== action.payload);
    },
  },
});

export const { initializeState, addPokemon, removePokemon } =
  pokemonsSlice.actions;

export default pokemonsSlice.reducer;
