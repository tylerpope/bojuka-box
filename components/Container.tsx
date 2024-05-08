import { StyleSheet, SafeAreaView } from 'react-native';

import { useTheme } from '~/hooks/useTheme';

export const Container = ({ children }: { children: React.ReactNode }) => {
  const [theme] = useTheme();

  return (
    <SafeAreaView
      style={{
        ...styles.container,
        backgroundColor: theme.backgroundColor,
      }}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
  },
});
