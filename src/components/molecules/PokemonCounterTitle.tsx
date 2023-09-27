import React from 'react';
import { Animated } from 'react-native';
import { HeaderTitleProps } from '@react-navigation/elements';
import { useAppSelector } from '../../hooks';

export function PokemonCounterTitle({ style }: HeaderTitleProps) {
  const pokemons = useAppSelector(state => state.pokemons);
  return (
    <Animated.Text style={style}>
      {pokemons.length} {`Pokémon${pokemons.length > 1 ? 's' : ''}`}
    </Animated.Text>
  );
}
