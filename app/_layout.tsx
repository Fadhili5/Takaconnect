import { Stack } from "expo-router";
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'outfit': require('../assets/fonts/Outfit-Regular.ttf'),
    'outfit-bold': require('../assets/fonts/Outfit-Bold.ttf'),
    'outfit-medium': require('../assets/fonts/Outfit-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
