import { useFonts, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { useTheme } from '~/hooks/useTheme';

SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(drawer)',
};

export default function RootLayout() {
  const [appLoaded, setAppLoaded] = useState(false);
  const [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
  });

  const [, loading] = useTheme();

  const hideSplash = async () => {
    await SplashScreen.hideAsync();
  };

  useEffect(() => {
    if (fontsLoaded && !loading) {
      setAppLoaded(true);
    }
  }, [fontsLoaded, loading]);

  useEffect(() => {
    if (appLoaded) hideSplash();
  }, [appLoaded]);

  if (!appLoaded) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ title: 'Modal', presentation: 'modal' }} />
      </Stack>
    </GestureHandlerRootView>
  );
}
