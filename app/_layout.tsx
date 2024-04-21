import { useFonts, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { useTheme } from '~/hooks/useTheme';

SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(drawer)',
};

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    Poppins_600SemiBold,
  });

  const [, , loading] = useTheme();

  const assetsLoaded = async () => {
    await SplashScreen.hideAsync();
  };

  useEffect(() => {
    if (fontsLoaded && !loading) {
      assetsLoaded();
    }
  }, [fontsLoaded]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ title: 'Modal', presentation: 'modal' }} />
      </Stack>
    </GestureHandlerRootView>
  );
}
