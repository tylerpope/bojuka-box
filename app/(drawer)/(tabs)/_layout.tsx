import { Tabs } from 'expo-router';

import { TabBarIcon } from '~/components/TabBarIcon';
import { useTheme } from '~/hooks/useTheme';

export default function TabLayout() {
  const [theme] = useTheme();

  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: 'black',
          tabBarStyle: {
            backgroundColor: theme.backgroundColor,
          },
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Binders',
            tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          }}
        />
        <Tabs.Screen
          name="two"
          options={{
            title: 'Tab Two',
            tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          }}
        />
      </Tabs>
    </>
  );
}
