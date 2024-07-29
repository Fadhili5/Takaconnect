import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking, ScrollView } from 'react-native';
import tw from 'twrnc';
import { FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const fireDepartmentPhone = '123-456-7892'; // Replace with the actual phone number

const CallFirefighterScreen = () => {
  const router = useRouter();

  const handleCallPress = () => {
    Linking.openURL(`tel:${fireDepartmentPhone}`);
  };

  return (
    <View style={tw`flex-1 bg-white`}>
      {/* Header */}
      <View style={tw`bg-purple-800 p-6 pb-12`}>
        <View style={tw`flex-row items-center mt-10`}>
          <TouchableOpacity onPress={() => router.back()}>
            <FontAwesome5 name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
          <Text style={[tw`text-white text-2xl ml-4`, { fontFamily: 'outfit-bold' }]}>Call Firefighter</Text>
        </View>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={tw`p-4 flex-1 justify-center`}>
        <View style={tw`items-center mb-6`}>
          <FontAwesome5 name="fire-extinguisher" size={64} color="#FF6347" />
          <Text style={[tw`text-2xl font-bold mt-4`, { fontFamily: 'outfit-bold' }]}>Emergency Fire Services</Text>
          <Text style={[tw`text-lg mt-2`, { fontFamily: 'outfit' }]}>Call the fire department immediately in case of a fire emergency.</Text>
        </View>

        <TouchableOpacity style={styles.callButton} onPress={handleCallPress}>
          <Text style={styles.callButtonText}>Call Fire Department</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  callButton: {
    backgroundColor: '#FF6347',
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

export default CallFirefighterScreen;
