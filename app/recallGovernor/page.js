import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import tw from 'tailwind-react-native-classnames';

export default function RecallGovernor() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Form submitted:', { name, email, reason });
  };

  return (
    <ScrollView style={tw`flex-1 bg-white`}>
      <View style={tw`bg-purple-700 p-6`}>
        <Text style={[tw`text-white text-2xl mt-8`, { fontFamily: 'outfit-bold' }]}>Recall Your Governor</Text>
        <Text style={[tw`text-white text-lg mt-2`, { fontFamily: 'outfit' }]}>Join 20,001 members to recall DR.Susan Mugithe</Text>
      </View>

      <View style={tw`p-6`}>
        <Text style={[tw`text-black text-lg mb-4`, { fontFamily: 'outfit-bold' }]}>Sign the Petition</Text>

        <TextInput
          style={tw`border border-gray-300 p-4 mb-4 rounded-lg`}
          placeholder="Your Name"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={tw`border border-gray-300 p-4 mb-4 rounded-lg`}
          placeholder="Your Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TextInput
          style={tw`border border-gray-300 p-4 mb-4 rounded-lg`}
          placeholder="Reason for Signing"
          value={reason}
          onChangeText={setReason}
          multiline
        />

        <TouchableOpacity
          style={tw`bg-purple-700 p-4 rounded-lg mb-4`}
          onPress={handleSubmit}
        >
          <Text style={[tw`text-white text-center`, { fontFamily: 'outfit-bold' }]}>Submit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={tw`bg-purple-700 p-4 rounded-lg flex-row items-center`}
          onPress={() => console.log('Report with AI')}
        >
          <FontAwesome5 name="robot" size={24} color="white" />
          <Text style={[tw`text-white text-center ml-2`, { fontFamily: 'outfit-bold' }]}>Report with AI</Text>
        </TouchableOpacity>

        <View style={tw`flex-row items-center mt-4`}>
          <FontAwesome5 name="user-secret" size={16} color="#6b21a8" />
          <Text style={[tw`text-purple-700 ml-2`, { fontFamily: 'outfit-medium' }]}>You can choose to be anonymous</Text>
        </View>
      </View>
    </ScrollView>
  );
}