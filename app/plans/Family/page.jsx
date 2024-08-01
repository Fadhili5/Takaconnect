import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StatusBar, ScrollView, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import tw from 'tailwind-react-native-classnames';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

// Prevent splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

const BuildMyJourneyScreen = () => {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    'outfit': require('../../../assets/fonts/Outfit-Regular.ttf'),
    'outfit-bold': require('../../../assets/fonts/Outfit-Bold.ttf'),
    'outfit-medium': require('../../../assets/fonts/Outfit-Medium.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      // Hide splash screen once fonts are loaded
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    // You can return a loading spinner or placeholder here
    return <View style={styles.container} />;
  }

  const [pressedCard, setPressedCard] = useState<number | null>(null);
  const [checkedItems, setCheckedItems] = useState({
    liveswithparents: false,
    singleparenthousehold: false,
    marriedwithchildren: false,
    singlelivingalone: false,
    recentlydivoced: false,
    widowed: false,
    financialStability: false,
    balancedLifestyle: false,
    familyWellBeing: false,
    academicGoals: false,
    healthImprovement: false,
    independence: false,
    positiveImpact: false,
  });

  const handleCheckboxChange = (name: string) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  return (
    <View style={tw`flex-1 bg-gray-50`}>
      <StatusBar barStyle="dark-content" backgroundColor="#6B21A8" />
      <View style={tw`flex-row items-center py-8 justify-center bg-purple-800 mt-8`}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-circle-outline" size={24} color="white" />
        </TouchableOpacity>
        <Text style={[tw`text-white text-2xl ml-4`, { fontFamily: 'outfit-bold' }]}>Build My Journey</Text>
      </View>
      <View style={tw`p-4`}>
        <Text style={[tw`text-lg mb-4`, { fontFamily: 'outfit' }]}>Motivators</Text>
        <Text style={[tw`text-sm mb-4 text-gray-600`, { fontFamily: 'outfit' }]}>What motivates you to do better</Text>
        <ScrollView>
          {Object.keys(checkedItems).map((key, index) => (
            <View key={index} style={tw`flex-row items-center mb-4`}>
              <Checkbox
                value={checkedItems[key]}
                onValueChange={() => handleCheckboxChange(key)}
                color={checkedItems[key] ? '#6B21A8' : undefined}
              />
              <Text style={[tw`ml-2 text-lg`, { fontFamily: 'outfit' }]}>
                {key
                  .split(/(?=[A-Z])/)
                  .join(' ')
                  .replace(/^./, (str) => str.toUpperCase())}
              </Text>
            </View>
          ))}
          <TouchableOpacity
            style={tw`bg-purple-800 py-4 rounded-lg items-center`}
            onPress={() => navigation.replace('home')}
          >
            <Text style={[tw`text-white text-lg`, { fontFamily: 'outfit-bold' }]}>Save</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Match your splash screen background color
  },
});

export default BuildMyJourneyScreen;
