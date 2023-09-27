import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AddPokemon, Pokedex } from '../components/pages';
import { PokemonsStackParamList } from './types';
import { AddIconButton } from '../components/atoms';

const PokemonsStack = createNativeStackNavigator<PokemonsStackParamList>();

export function PokedexStackNavigator() {
  return (
    <PokemonsStack.Navigator>
      <PokemonsStack.Screen
        name="Pokedex"
        component={Pokedex}
        options={{
          title: 'Pokédex',
          headerRight: AddIconButton,
        }}
      />
      <PokemonsStack.Screen
        name="AddPokemon"
        component={AddPokemon}
        options={{ title: 'Agregar Pokémon' }}
      />
    </PokemonsStack.Navigator>
  );
}
