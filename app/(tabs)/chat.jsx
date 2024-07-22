import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import tw from 'tailwind-react-native-classnames';
import { useRouter } from 'expo-router';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function Chat() {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    'outfit': require('../../assets/fonts/Outfit-Regular.ttf'),
    'outfit-bold': require('../../assets/fonts/Outfit-Medium.ttf'),
    'outfit-medium': require('../../assets/fonts/Outfit-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={tw`flex-1 bg-white`}>
      {/* Title */}
      <View style={tw`items-center mt-20`}>
        <Text style={[tw`text-xl`, { fontFamily: 'outfit-bold' }]}>Your Personal AI Companion</Text>
      </View>

      <ScrollView contentContainerStyle={tw`flex-1 justify-center items-center bg-white p-4 w-full`}>

        {/* Profile Image */}
        <View style={tw`w-56 h-56 rounded-full overflow-hidden shadow-2xl mt-4`}>
          <Image
            source={require('../../assets/images/jeph.jpg')}
            style={tw`w-full h-full`}
          />
        </View>

        {/* Buttons */}
        <View style={tw`flex-row justify-between items-center p-4 mt-6 `}>
          <TouchableOpacity style={tw`items-center p-2 m-2`}
            onPress={() => router.push('chat/page')}
          >
            <FontAwesome5 name="comment-dots" size={24} color="gray" />
            <Text style={[tw`text-gray-500 mt-2`, { fontFamily: 'outfit' }]}>TEXT CHAT</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`items-center p-2 m-2`}>
            <FontAwesome5 name="microphone" size={24} color="gray" />
            <Text style={[tw`text-gray-500 mt-2`, { fontFamily: 'outfit' }]}>Start</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`items-center p-2 m-2`}>
            <FontAwesome5 name="check-circle" size={24} color="gray" />
            <Text style={[tw`text-gray-500 mt-2`, { fontFamily: 'outfit' }]}>FINISH</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}



