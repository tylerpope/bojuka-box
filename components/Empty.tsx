import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import { SvgProps } from 'react-native-svg';

import { Button } from './Button';

import { useTheme } from '~/hooks/useTheme';

type Empty = {
  title: string;
  message: string;
  Icon: (props: SvgProps) => React.ReactNode;
  buttonText: string;
  buttonRoute: any;
};

export default function EmptyView({ title, message, buttonText, buttonRoute, Icon }: Empty) {
  const [theme, loading] = useTheme();

  if (loading) return null;

  return (
    <View style={styles.container}>
      {Icon && (
        <View style={styles.iconContainer}>
          <Icon />
        </View>
      )}
      {title && <Text style={{ ...styles.title, color: theme.text }}>{title}</Text>}
      {message && <Text style={{ ...styles.message, color: theme.text }}>{message}</Text>}
      <Link href={buttonRoute} asChild>
        <Button title={buttonText} />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  iconContainer: {
    marginTop: 50,
    marginBottom: 15,
  },
  title: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 24,
    marginBottom: 5,
  },
  message: {
    fontSize: 18,
    marginBottom: 30,
    textAlign: 'center',
  },
});
