import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking, ScrollView } from 'react-native';
import tw from 'twrnc';
import { FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const ambulancePhone = '123-456-7891'; // Replace with the actual phone number

const CallAmbulanceScreen = () => {
  const router = useRouter();

  const handleCallPress = () => {
    Linking.openURL(`tel:${ambulancePhone}`);
  };

  return (
    <View style={tw`flex-1 bg-white`}>
      {/* Header */}
      <View style={tw`bg-purple-800 p-6 pb-12`}>
        <View style={tw`flex-row items-center mt-10`}>
          <TouchableOpacity onPress={() => router.back()}>
            <FontAwesome5 name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
          <Text style={[tw`text-white text-2xl ml-4`, { fontFamily: 'outfit-bold' }]}>Call Ambulance</Text>
        </View>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={tw`p-4 flex-1 justify-center`}>
        <View style={tw`items-center mb-6`}>
          <FontAwesome5 name="ambulance" size={64} color="#FF4500" />
          <Text style={[tw`text-2xl font-bold mt-4`, { fontFamily: 'outfit-bold' }]}>Emergency Medical Services</Text>
          <Text style={[tw`text-lg mt-2`, { fontFamily: 'outfit' }]}>Call for immediate medical assistance in case of a medical emergency.</Text>
        </View>

        <TouchableOpacity style={styles.callButton} onPress={handleCallPress}>
          <Text style={styles.callButtonText}>Call Ambulance</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  callButton: {
    backgroundColor: '#FF4500',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  callButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CallAmbulanceScreen;
