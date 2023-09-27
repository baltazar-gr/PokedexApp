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

  const calculateNumberOfPages = () => {
    return Math.ceil(pokemons.length / 2);
  };

  useEffect(() => {
    const pokemonsToDisplay = [...pokemons].slice(0, currentPage * 2);
    setPokemonsToLoad(pokemonsToDisplay);
  }, [currentPage, pokemons]);

  const loadMorePokemons = () => {
    if (currentPage < calculateNumberOfPages()) {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(calculateNumberOfPages());
    }
  };

  return (
    <FlatList
      data={pokemonsToLoad}
      extraData={pokemons.length}
      style={styles.list}
      keyExtractor={item => item.name}
      onScrollEndDrag={loadMorePokemons}
      onEndReached={loadMorePokemons}
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
      ListEmptyComponent={
        <Text style={styles.textCenter}>Aun no tienes pokémos agregados</Text>
      }
    />
  );
}

const styles = StyleSheet.create({
  textCenter: {
    marginTop: 16,
    textAlign: 'center',
  },
  list: { flex: 1 },
});
