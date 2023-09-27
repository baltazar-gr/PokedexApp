import React from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import { Pokemon } from '../../types';
import { Button, Text } from '../atoms';

interface PokemonDetailsModalProps {
  visible?: boolean | undefined;
  onRequestClose: () => void;
  pokemon?: Pokemon;
}

export function PokemonDetailsModal({
  visible,
  onRequestClose,
  pokemon,
}: PokemonDetailsModalProps) {
  return (
    <Modal
      visible={visible}
      onRequestClose={onRequestClose}
      animationType="slide"
      transparent={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Detalles del pokémon</Text>
        {pokemon && (
          <>
            <Text>Nombre: {pokemon.name}</Text>
            <Text>Types</Text>
            {pokemon.types.map(({ type }) => (
              <Text key={type.name} style={styles.textItem}>
                {type.name}
              </Text>
            ))}
            <Text>Moves</Text>
            {pokemon.moves.slice(-5).map(({ move }) => (
              <Text key={move.name} style={styles.textItem}>
                {move.name}
              </Text>
            ))}
          </>
        )}
        <Button title="Cerrar" onPress={onRequestClose} style={styles.button} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  textItem: {
    marginLeft: 16,
    fontSize: 15,
  },
  button: {
    marginTop: 16,
  },
});
