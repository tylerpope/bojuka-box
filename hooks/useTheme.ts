import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import { ColorSchemeName, Appearance } from 'react-native';

type setThemeStorageFunction = (scheme: string) => Promise<void>;

export function useTheme() {
  const [loading, setLoading] = useState<boolean>(true);
  const [theme, setTheme] = useState<ColorSchemeName>(null);
  const defaultTheme = Appearance.getColorScheme();

  const getStoredTheme = async () => {
    const storedTheme = await AsyncStorage.getItem('theme');

    if (storedTheme === 'light' || storedTheme === 'dark') {
      setTheme(storedTheme);
    } else {
      setTheme(defaultTheme);
    }

    setLoading(false);
  };

  const setThemeWithStorage: setThemeStorageFunction = async (scheme) => {
    await AsyncStorage.setItem('theme', scheme);

    if (scheme === 'light' || scheme === 'dark') {
      setTheme(scheme);
    }
  };

  useEffect(() => {
    getStoredTheme();
  }, []);

  return [theme, setThemeWithStorage, loading] as const;
}
