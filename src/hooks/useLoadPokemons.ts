import { useEffect } from 'react';
import { useAppDispatch } from './useAppDispatch';
import { initializeState } from '../redux/pokemonsSlice';
import { getData } from '../utils/getData';
import { Pokemon } from '../types';

export function useLoadPokemons() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getPokemons = async () => {
      const pokedexData: Pokemon[] = (await getData('pokedex')) ?? [];
      dispatch(initializeState(pokedexData));
    };
    getPokemons();
  }, [dispatch]);
}
