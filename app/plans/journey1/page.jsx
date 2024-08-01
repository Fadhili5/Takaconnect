import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StatusBar, ScrollView, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
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

  const Card = ({ icon, title, subtitle, completed, index, onPress }) => (
    <Pressable
      onPressIn={() => setPressedCard(index)}
      onPressOut={() => setPressedCard(null)}
      onPress={onPress}
      style={[
        tw`flex-row items-center p-6 mb-6 rounded-lg`,
        pressedCard === index ? tw`border border-purple-700` : tw`border border-gray-200`,
        completed ? tw`bg-green-100` : tw`bg-white`,
        tw`shadow-md`,
      ]}
    >
      <Image source={icon} style={tw`w-14 h-14 mr-4 rounded-full`} />
      <View style={tw`flex-1`}>
        <Text style={[tw`text-xl`, { fontFamily: 'outfit-bold' }]}>{title}</Text>
        <Text style={[tw`text-base text-gray-600`, { fontFamily: 'outfit' }]}>{subtitle}</Text>
      </View>
      {completed && (
        <View style={tw`bg-green-500 rounded-full px-2 py-1`}>
          <Text style={[tw`text-white text-sm`, { fontFamily: 'outfit-bold' }]}>Complete</Text>
        </View>
      )}
    </Pressable>
  );

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
        <Text style={[tw`text-lg mb-4`, { fontFamily: 'outfit' }]}>We need a few details to get started</Text>
        <ScrollView>
          <Card
            icon={require('../../../assets/images/jeph.jpg')}
            title="Personal strengths"
            subtitle="Which qualities best describe you"
            completed={true}
            index={0}
            onPress={() => navigation.replace('home')}
          />
          <Card
            icon={require('../../../assets/images/jeph.jpg')}
            title="Motivators"
            subtitle="What motivates you to do better"
            completed={false}
            index={1}
            onPress={() => navigation.replace('plans/motivators/page')}
          />
          <Card
            icon={require('../../../assets/images/jeph.jpg')}
            title="Family structure"
            subtitle="Who all are a part of the family"
            completed={false}
            index={2}
            onPress={() => navigation.replace('plans/Family/page')}
          />
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
