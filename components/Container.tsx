import { StyleSheet, SafeAreaView, View } from 'react-native';

import { useTheme } from '~/hooks/useTheme';

export const Container = ({ children }: { children: React.ReactNode }) => {
  const [theme] = useTheme();

  return (
    <SafeAreaView
      style={{
        ...styles.container,
        backgroundColor: theme.backgroundColor,
      }}>
      <View style={styles.innerContainer}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  innerContainer: {
    padding: 20,
  },
});
