import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Card, Text } from '../atoms';
import { Pokemon } from '../../types';

interface PokemonCardProps {
  pokemon: Pokemon;
  onSeeDetailsPress: () => void;
  onRemovePress: () => void;
}

export function PokemonCard({
  pokemon,
  onSeeDetailsPress,
  onRemovePress,
}: PokemonCardProps) {
  return (
    <Card style={styles.container}>
      <Text>Nombre: {pokemon.name}</Text>
      <Text>Primer type: {pokemon.types[0].type.name}</Text>
      <Text style={styles.bottonSpace}>
        Primer y último move: {pokemon.moves[0].move.name} -{' '}
        {pokemon.moves[pokemon.moves.length - 1].move.name}
      </Text>
      <Button
        title="Ver detalles"
        onPress={onSeeDetailsPress}
        style={styles.bottonSpace}
      />
      <Button title="Eliminar" onPress={onRemovePress} />
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  bottonSpace: {
    marginBottom: 16,
  },
});
