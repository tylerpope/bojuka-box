import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { useTheme } from '~/hooks/useTheme';

export default function CreateBinder() {
  const [theme] = useTheme();
  return (
    <View style={{ ...styles.container, backgroundColor: theme.backgroundColor }}>
      <Text style={{ color: theme.text }}>Test</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
