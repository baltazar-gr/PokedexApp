import React from 'react';
import { Pressable, StyleSheet, ViewStyle, StyleProp } from 'react-native';
import { Text } from './Text';

interface ButtonProps {
  title: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

export function Button({ title, onPress, style }: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: 'rgb(0, 122, 255)',
          opacity: pressed ? 0.8 : 1,
          transform: [{ scale: pressed ? 0.95 : 1 }],
        },
        style,
      ]}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 8,
    height: 42,
    borderRadius: 8,
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});
