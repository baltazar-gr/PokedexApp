import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '../atoms/Text';

export function PokemonCounter() {
  return (
    <View style={styles.container}>
      <Text>
        Pantalla que muestra en el header el número de Pokémons que hay en la
        Pokédex.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
