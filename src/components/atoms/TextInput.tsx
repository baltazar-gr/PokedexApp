import React from 'react';
import {
  TextInput as RNTextInput,
  StyleSheet,
  TextInputProps,
} from 'react-native';

export function TextInput({ style, ...restProps }: TextInputProps) {
  return <RNTextInput style={[styles.input, style]} {...restProps} />;
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    height: 42,
    padding: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginBottom: 12,
  },
});
