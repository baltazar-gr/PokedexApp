/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { PokemonCounter } from '../components/pages';
import { ProfileStackNavigator } from './ProfileStackNavigator';
import { PokedexStackNavigator } from './PokedexStackNavigator';
import { PokemonCounterTitle } from '../components/molecules';
import { useLoadPokemons } from '../hooks/useLoadPokemons';

const Tab = createBottomTabNavigator();

export function BottomTabNavigator() {
  useLoadPokemons();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStackNavigator}
        options={{
          title: 'Perfil',
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name={'account'}
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="PokedexStack"
        component={PokedexStackNavigator}
        options={{
          title: 'Pokédex',
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name={'format-list-bulleted'}
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="PokemonCounter"
        component={PokemonCounter}
        options={{
          title: 'Contador',
          headerTitle: PokemonCounterTitle,
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name={'pokeball'}
                size={size}
                color={color}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
