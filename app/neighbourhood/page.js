import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import tw from "tailwind-react-native-classnames";
import { useRouter } from 'expo-router';

const Index = () => {
  const router = useRouter();
  
  const navigateTo = (path) => {
    router.push(path);
  };

  return (
    <SafeAreaView style={tw`flex-1`}>

<View style={tw`bg-purple-800 p-6 pb-12`}>
        <View style={tw`flex-row items-center mt-10`}>
          <TouchableOpacity onPress={() => router.back()}>
            <FontAwesome5 name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
          <Text style={[tw`text-white text-2xl ml-4`, { fontFamily: 'outfit-bold' }]}>My neighbourhood</Text>
        </View>
      </View>

      <View style={tw`mt-2`}>
        <View style={tw`flex-row flex-wrap justify-between`}>
          <TouchableOpacity style={tw`w-1/2`} onPress={() => navigateTo('newdevelopment/page')}>
            <Card icon="users" title="New Developments" description="Development trends" />
          </TouchableOpacity>


        </View>
      </View>
    </SafeAreaView>
  )
}

export default Index;

function Card({ icon, title, description }) {
  return (
    <View style={tw`w-40 bg-white p-4 m-2 rounded-xl shadow-md`}>
      <View style={tw`items-center`}>
        <FontAwesome5 name={icon} size={32} color="#6b21a8" />
        <Text style={[tw`text-purple-600 font-bold mt-2 text-center`, { fontFamily: 'outfit-bold' }]}>{title}</Text>
        <Text style={[tw`text-gray-600 text-center mt-1`, { fontFamily: 'outfit' }]}>{description}</Text>
      </View>
    </View>
  );
}
