import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { useColorScheme} from '@/components/useColorScheme';
import Colors from '@/constants/Colors';
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'nun-bold': require('@/assets/fonts/Nunito-Bold.ttf'),
    'nun-regular': require('@/assets/fonts/Nunito-Regular.ttf'),
    'nun-light': require('@/assets/fonts/Nunito-Light.ttf'),
    'nun-semibold': require('@/assets/fonts/Nunito-SemiBold.ttf'),
    'nun-extra-bold': require('@/assets/fonts/Nunito-ExtraBold.ttf'),
    'nun-medium': require('@/assets/fonts/Nunito-Medium.ttf'),
    'nun-extra-light': require('@/assets/fonts/Nunito-ExtraLight.ttf'),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

const MyDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: Colors.light.background,
    text: Colors.dark.text,
    tint: Colors.dark.tint,
  },
};

const MyDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.light.background,
    text: Colors.light.text,
    tint: Colors.light.tint,
  },
};


function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'light' ? MyDarkTheme : MyDefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
