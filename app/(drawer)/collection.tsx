import { Stack } from 'expo-router';
import { View } from 'react-native';

import { Container } from '~/components/Container';
import { ContentCard } from '~/components/ContentCard';
import Empty from '~/components/Empty';

const testBinder: ContentCard = {
  id: 1,
  title: 'Black Rares',
};

const cards = [];

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <Container>{!cards.length ? <Empty /> : <View />}</Container>
    </>
  );
}
