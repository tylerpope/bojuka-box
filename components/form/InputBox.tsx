import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

import { useTheme } from '~/hooks/useTheme';

type HookTextInput = {
  placeholder: string;
  value: string;
  onBlur: () => void;
  onChange: () => void;
};

export default function InputBox({ placeholder, value, onBlur, onChange }: HookTextInput) {
  const [theme] = useTheme();
  return (
    <TextInput
      style={{
        ...styles.container,
        backgroundColor: theme.backgroundColorLight,
        color: theme.text,
      }}
      placeholder={placeholder}
      onBlur={onBlur}
      onChangeText={onChange}
      value={value}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#fff',
    fontSize: 16,
  },
});
