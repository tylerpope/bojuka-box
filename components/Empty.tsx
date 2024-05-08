import { View, Text, StyleSheet } from 'react-native';
import { SvgProps } from 'react-native-svg';

import { Container } from './Container';

import { useTheme } from '~/hooks/useTheme';

type Empty = {
  title: string;
  message: string;
  Icon: (props: SvgProps) => React.ReactNode;
};

export default function EmptyView({ title, message, Icon }: Empty) {
  const [theme, loading] = useTheme();

  if (loading) return null;

  return (
    <Container>
      {Icon && (
        <View style={styles.iconContainer}>
          <Icon />
        </View>
      )}
      {title && <Text style={{ ...styles.title, color: theme.text }}>{title}</Text>}
      {message && <Text style={{ ...styles.message, color: theme.text }}>{message}</Text>}
    </Container>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    marginTop: 50,
    marginBottom: 20,
  },
  title: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 24,
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
  },
});
