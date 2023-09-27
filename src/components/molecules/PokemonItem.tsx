import { StyleSheet } from 'react-native';
import React from 'react';
import { Button, Card, Text } from '../atoms';

interface PokemonListItemProps {
  name: string;
  onSeeDetailsPress: () => void;
  onAddPress: () => void;
}

export function PokemonListItem({
  name,
  onSeeDetailsPress,
  onAddPress,
}: PokemonListItemProps) {
  return (
    <Card style={styles.container}>
      <Text style={[styles.name, styles.bottomSpace]}>Nombre: {name}</Text>
      <Button
        style={styles.bottomSpace}
        title="Ver detalles"
        onPress={onSeeDetailsPress}
      />
      <Button title="Agregar a pokédex" onPress={onAddPress} />
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bottomSpace: {
    marginBottom: 16,
  },
});
