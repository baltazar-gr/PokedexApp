import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { PokemonListItemType } from '../../types';
import { PokemonListItem } from '../molecules';

interface PokemonListProps {
  pokemons: PokemonListItemType[];
  onSeeDetailsPress: (name: string) => void;
  onAddPress: (name: string) => void;
}

export function PokemonList({
  pokemons,
  onSeeDetailsPress,
  onAddPress,
}: PokemonListProps) {
  return (
    <View style={styles.container}>
      {pokemons.length > 0 && (
        <FlatList
          data={pokemons}
          keyExtractor={item => item.name}
          renderItem={({ item }) => {
            const handleOnSeeDetailsPress = () => {
              onSeeDetailsPress(item.name);
            };
            const handleOnAddPress = () => {
              onAddPress(item.name);
            };

            return (
              <PokemonListItem
                key={item.name}
                name={item.name}
                onSeeDetailsPress={handleOnSeeDetailsPress}
                onAddPress={handleOnAddPress}
              />
            );
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
