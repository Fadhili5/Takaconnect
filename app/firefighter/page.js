import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking, ScrollView, Animated, Easing } from 'react-native';
import tw from 'twrnc';
import { FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const emergencyServices = [
  { id: 1, type: 'ambulance', name: 'Ambulance 1', phone: '+254717382028', location: 'Location 1' },
  { id: 2, type: 'ambulance', name: 'Ambulance 2', phone: '+254717382028', location: 'Location 2' },
  { id: 3, type: 'ambulance', name: 'Ambulance 3', phone: '+254717382028', location: 'Location 3' },
  { id: 4, type: 'firefighter', name: 'Fire Department 1', phone: '+254717382028', location: 'Location 4' },
  { id: 5, type: 'firefighter', name: 'Fire Department 2', phone: '+254717382028', location: 'Location 5' },
  { id: 6, type: 'firefighter', name: 'Fire Department 3', phone: '+254717382028', location: 'Location 6' },
];

const EmergencyServiceScreen = () => {
  const router = useRouter();
  const [selectedService, setSelectedService] = useState(null);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [drawerAnimation] = useState(new Animated.Value(-400));

  const handleCallPress = (phone) => {
    Linking.openURL(`tel:${phone}`);
  };

  const handleServicePress = (service) => {
    setSelectedService(service);
    setDrawerVisible(true);
    Animated.timing(drawerAnimation, {
      toValue: 0,
      duration: 300,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: false,
    }).start();
  };

  const closeDrawer = () => {
    Animated.timing(drawerAnimation, {
      toValue: -400,
      duration: 300,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: false,
    }).start(() => {
      setDrawerVisible(false);
    });
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

      {/* Content */}
      <ScrollView contentContainerStyle={tw`p-4 flex-1`}>
        <View style={tw`items-center mb-6`}>
          <FontAwesome5 name="ambulance" size={64} color="#FF4500" />
          <Text style={[tw`text-2xl font-bold mt-4`, { fontFamily: 'outfit-bold' }]}>Emergency Medical Services</Text>
          <Text style={[tw`text-lg mt-2 text-center`, { fontFamily: 'outfit' }]}>Call for immediate medical assistance in case of a medical emergency.</Text>
        </View>
        
        <Text style={[tw`text-lg mt-2 text-center`, { fontFamily: 'outfit' }]}>Available Services:</Text>
        {emergencyServices.map((service) => (
          <TouchableOpacity
            key={service.id}
            style={tw`mb-4 p-4 bg-gray-100 rounded-lg shadow-md`}
            onPress={() => handleServicePress(service)}
          >
            <Text style={tw`text-lg font-bold`}>{service.name}</Text>
            <Text style={tw`text-sm text-gray-600`}>{service.location}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Service Details Drawer */}
      {drawerVisible && (
        <Animated.View style={[styles.drawer, { transform: [{ translateY: drawerAnimation }] }]}>
          <View style={styles.drawerContent}>
            <Text style={styles.title}>{selectedService?.name}</Text>
            <Text style={styles.info}>Location: {selectedService?.location}</Text>
            <TouchableOpacity style={styles.button} onPress={() => handleCallPress(selectedService.phone)}>
              <View style={styles.buttonContent}>
                <FontAwesome5 name="phone" size={18} color="white" />
                <Text style={styles.buttonText}>Call {selectedService.type === 'ambulance' ? 'Ambulance' : 'Fire Department'}</Text>
              </View>
            </TouchableOpacity>
            {/* Additional buttons can be added here */}
            <TouchableOpacity style={styles.closeButton} onPress={closeDrawer}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  drawer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
  },
  drawerContent: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#FF4500',
    borderRadius: 20,
    padding: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  closeButton: {
    backgroundColor: '#FF5252',
    borderRadius: 20,
    padding: 12,
    alignSelf: 'center',
    marginTop: 10,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EmergencyServiceScreen;
