import { Stack } from 'expo-router';

import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';
import { useTheme } from '~/hooks/useTheme';

export default function Home() {
  const [theme] = useTheme();
  console.log(theme);
  return (
    <>
      <Stack.Screen options={{ title: 'Tab One' }} />
      <Container>
        <ScreenContent path="app/(drawer)/(tabs)/index.tsx" title="Tab One" />
      </Container>
    </>
  );
}
