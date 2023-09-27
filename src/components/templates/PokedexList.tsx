import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Pokemon } from '../../types';
import { PokemonCard } from '../molecules';
import { Text } from '../atoms';

interface PokedexListProps {
  pokemons: Pokemon[];
  onSeeDetailsPress: (pokemon: Pokemon) => void;
  onRemovePress: (pokemon: Pokemon) => void;
}

export function PokedexList({
  pokemons,
  onSeeDetailsPress,
  onRemovePress,
}: PokedexListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsToLoad, setPokemonsToLoad] = useState<Pokemon[]>([]);

  useEffect(() => {
    setPokemonsToLoad([...pokemons].slice(0, currentPage * 2));
  }, [currentPage, pokemons]);

  const calculateNumberOfPages = () => {
    return Math.ceil(pokemons.length / 2);
  };

  return pokemonsToLoad.length === 0 ? (
    <Text style={styles.textCenter}>Aun no tienes pokémos agregados</Text>
  ) : (
    <FlatList
      data={pokemonsToLoad}
      keyExtractor={item => item.name}
      onEndReached={() => {
        if (currentPage < calculateNumberOfPages()) {
          setCurrentPage(currentPage + 1);
        }
      }}
      renderItem={({ item }) => {
        const handleSeeDetails = () => {
          onSeeDetailsPress(item);
        };

        const handleRemove = () => {
          onRemovePress(item);
        };

        return (
          <PokemonCard
            key={item.name}
            pokemon={item}
            onSeeDetailsPress={handleSeeDetails}
            onRemovePress={handleRemove}
          />
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  textCenter: {
    marginTop: 16,
    textAlign: 'center',
  },
});
