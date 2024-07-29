import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import tw from 'twrnc';
import { useRouter } from 'expo-router';

const emergencyContacts = [
  { id: 1, name: 'Police', phone: '123-456-7890', icon: 'shield-alt', color: '#1E90FF' },
  { id: 2, name: 'Ambulance', phone: '123-456-7891', icon: 'ambulance', color: '#FF4500' },
  { id: 3, name: 'Fire Department', phone: '123-456-7892', icon: 'fire', color: '#FF6347' },
  { id: 4, name: 'Garbage Collector', phone: '123-456-7893', icon: 'trash', color: '#32CD32' },
  { id: 5, name: 'Hospital', phone: '123-456-7894', icon: 'hospital', color: '#8A2BE2' },
  { id: 6, name: 'Utilities', phone: '123-456-7895', icon: 'tools', color: '#FFD700' },
];

const EmergencyContactsScreen = () => {
  const router = useRouter();

  const handleCallPress = (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <View style={tw`flex-1 bg-white`}>
      {/* Header */}
      <View style={tw`bg-purple-800 p-6 pb-12`}>
        <View style={tw`flex-row items-center mt-10`}>
          <TouchableOpacity onPress={() => router.back()}>
            <FontAwesome5 name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
          <Text style={[tw`text-white text-2xl ml-4`, { fontFamily: 'outfit-bold' }]}>Emergency Services</Text>
        </View>
      </View>

      {/* Emergency Contacts List */}
      <View style={tw`p-4`}>
        {/* <Text style={tw`text-2xl font-bold mb-4`}>Emergency Contacts</Text> */}
        <ScrollView>
          {emergencyContacts.map((contact) => (
            <TouchableOpacity
              key={contact.id}
              style={[styles.card, { backgroundColor: contact.color }]}
              onPress={() => handleCallPress(contact.phone)}
            >
              <FontAwesome5 name={contact.icon} size={32} color="white" />
              <View style={styles.textContainer}>
                <Text style={styles.name}>{contact.name}</Text>
                <Text style={styles.phone}>{contact.phone}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  textContainer: {
    marginLeft: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  phone: {
    fontSize: 16,
    color: 'white',
  },
});

export default EmergencyContactsScreen;
