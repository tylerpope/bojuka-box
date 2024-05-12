import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import { ColorSchemeName, Appearance, AppState } from 'react-native';

export const THEMES = {
  DARK: 'dark',
  LIGHT: 'light',
};

export function useTheme() {
  const [loading, setLoading] = useState<boolean>(false);
  const [theme, setTheme] = useState<ColorSchemeName>(null);

  useEffect(() => {
    getTheme();
  }, []);

  // useEffect(() => {
  //   const handleAppStateChange = () => {
  //     getTheme();
  //   };

  //   const subscription = AppState.addEventListener('change', handleAppStateChange);

  //   return () => {
  //     subscription.remove();
  //   };
  // }, []);

  const getTheme = async () => {
    setLoading(true);

    const defaultTheme: ColorSchemeName = Appearance.getColorScheme();
    const storedTheme: any = await AsyncStorage.getItem('theme');

    setTheme(storedTheme || defaultTheme);

    setLoading(false);
  };

  const setThemeWithStorage: (scheme: ColorSchemeName) => Promise<void> = async (scheme) => {
    await AsyncStorage.setItem('theme', scheme as string);
    setTheme(scheme);
  };

  const themeStyles = theme
    ? {
        light: {
          text: '#000000',
          header: {
            backgroundColor: '#272727',
          },
        },
        dark: {
          text: '#FFFFFF',
          backgroundColor: '#323232',
          backgroundColorLight: '#272727',
          header: {
            headerStyle: {
              backgroundColor: '#272727',
            },
            headerShadowVisible: false,
            headerTintColor: '#FFFFFF',
          },
        },
      }[theme]
    : {};

  return [themeStyles, loading, setThemeWithStorage] as const;
}
