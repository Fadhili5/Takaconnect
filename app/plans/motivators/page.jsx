import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StatusBar, ScrollView, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import tw from 'tailwind-react-native-classnames';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

const BuildMyJourneyScreen = () => {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    'outfit': require('../../../assets/fonts/Outfit-Regular.ttf'),
    'outfit-bold': require('../../../assets/fonts/Outfit-Bold.ttf'),
    'outfit-medium': require('../../../assets/fonts/Outfit-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const [pressedCard, setPressedCard] = useState(null);
  const [checkedItems, setCheckedItems] = useState({
    motivation: false,
    careerAdvancement: false,
    positivity: false,
    healthyRelationships: false,
    personalGrowth: false,
    physicalHealth: false,
    financialStability: false,
    balancedLifestyle: false,
    familyWellBeing: false,
    academicGoals: false,
    healthImprovement: false,
    independence: false,
    positiveImpact: false,
  });

  const handleCheckboxChange = (name) => {
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

export default BuildMyJourneyScreen;
