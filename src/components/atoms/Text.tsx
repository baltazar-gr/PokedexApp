import React from 'react';
import { Text as RNText, StyleSheet, TextProps } from 'react-native';

export function Text({ style, ...restProps }: TextProps) {
  return <RNText style={[styles.text, style]} {...restProps} />;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 17,
  },
});
