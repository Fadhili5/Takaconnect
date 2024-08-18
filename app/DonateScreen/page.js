import React from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useRouter } from 'expo-router';

export default function DonateScreen() {
  const router = useRouter();

  const handleDonate = (amount) => {
    // Handle the donation logic here
    console.log(`Donated ${amount}`);
    // Navigate back or show a success message
    router.push('thankYou/page');
  };

  return (
    <ScrollView style={tw`flex-1 bg-white p-6`}>
      <View style={tw`mb-6 mt-8`}>
        <Text style={[tw`text-2xl text-center text-purple-700`, { fontFamily: 'outfit-bold' }]}>Support Our Cause</Text>
        <Text style={[tw`text-lg text-center text-gray-600 mt-4`, { fontFamily: 'outfit' }]}>
          Your donations help us fight corruption and promote transparency. Every contribution makes a difference.
        </Text>
      </View>

      <View style={tw`mb-6`}>
        <Text style={[tw`text-lg text-gray-700`, { fontFamily: 'outfit-medium' }]}>Choose an amount to donate:</Text>
        <View style={tw`flex-row justify-around mt-4`}>
          <TouchableOpacity style={tw`bg-purple-700 p-4 rounded-lg`} onPress={() => handleDonate(10)}>
            <Text style={[tw`text-white text-lg`, { fontFamily: 'outfit-bold' }]}>100</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`bg-purple-700 p-4 rounded-lg`} onPress={() => handleDonate(20)}>
            <Text style={[tw`text-white text-lg`, { fontFamily: 'outfit-bold' }]}>200</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`bg-purple-700 p-4 rounded-lg`} onPress={() => handleDonate(50)}>
            <Text style={[tw`text-white text-lg`, { fontFamily: 'outfit-bold' }]}>500</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={tw`mb-6`}>
        <Text style={[tw`text-lg text-gray-700`, { fontFamily: 'outfit-medium' }]}>Or enter a custom amount:</Text>
        <TextInput
          style={tw`border border-gray-300 p-4 rounded-lg mt-4`}
          keyboardType="numeric"
          placeholder="Enter amount"
          onSubmitEditing={(event) => handleDonate(event.nativeEvent.text)}
        />
      </View>

      <TouchableOpacity style={tw`bg-purple-700 p-4 rounded-lg mt-6`} onPress={() => handleDonate('custom')}>
        <Text style={[tw`text-white text-lg text-center`, { fontFamily: 'outfit-bold' }]}>Donate Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}