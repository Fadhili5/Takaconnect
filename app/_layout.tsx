import { Stack } from "expo-router";
import { initialize } from 'react-native-clarity';
import { useFonts } from 'expo-font';

initialize("n48vwu9a8u");

export default function RootLayout() {

  useFonts({
    'outfit': require('../assets/fonts/Outfit-Regular.ttf'),
    'outfit-bold': require('../assets/fonts/Outfit-Bold.ttf'),
    'outfit-medium': require('../assets/fonts/Outfit-Medium.ttf'),
  })
  return (
    <Stack>   
      <Stack.Screen name="index" options={{
        headerShown: false
      }}/>
    </Stack>
  );
}
