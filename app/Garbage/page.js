import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import axios from 'axios';
import tw from 'tailwind-react-native-classnames';
import { FontAwesome5 } from '@expo/vector-icons';

const GarbageCollectionScreen = () => {
  const [region, setRegion] = useState(null);
  const [collectors, setCollectors] = useState([]);
  const [selectedCollector, setSelectedCollector] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
      fetchGarbageCollectors(location.coords.latitude, location.coords.longitude);
    })();
  }, []);

  const fetchGarbageCollectors = async (latitude, longitude) => {
    // Mock data for garbage collectors
    const data = [
      { id: 1, name: 'Garbage Collector 1', location: { lat: latitude + 0.01, lng: longitude + 0.01 }, vicinity: '2 km away' },
      { id: 2, name: 'Garbage Collector 2', location: { lat: latitude + 0.02, lng: longitude + 0.02 }, vicinity: '3 km away' },
      { id: 3, name: 'Garbage Collector 3', location: { lat: latitude + 0.03, lng: longitude + 0.03 }, vicinity: '5 km away' },
    ];
    setCollectors(data);
  };

  const handleCollectorPress = (collector) => {
    setSelectedCollector(collector);
    setModalVisible(true);
  };

  const handleCallPress = () => {
    // This is a placeholder; adjust with actual phone numbers if available
    const phoneNumber = selectedCollector?.phone || '1234567890';
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <View style={tw`flex-1 bg-white`}>
      <View style={tw`h-1/2`}>
        {region ? (
          <MapView style={tw`flex-1`} region={region}>
            {collectors.map((collector, index) => (
              <Marker
                key={index}
                coordinate={{
                  latitude: collector.location.lat,
                  longitude: collector.location.lng,
                }}
                title={collector.name}
                description={collector.vicinity}
                pinColor="blue"
              />
            ))}
          </MapView>
        ) : (
          <View style={tw`flex-1 justify-center items-center`}>
            <Text style={tw`text-lg font-semibold`}>Loading maps...</Text>
          </View>
        )}
      </View>
      <View style={tw`h-1/2 bg-gray-100 p-4`}>
        <Text style={tw`text-xl font-bold mb-4`}>Nearby Garbage Collectors</Text>
        <ScrollView>
          {collectors.map((collector, index) => (
            <TouchableOpacity
              key={index}
              style={tw`flex-row items-center mb-4 bg-white p-4 rounded-lg shadow-md`}
              onPress={() => handleCollectorPress(collector)}
            >
              <View>
                <Text style={tw`text-lg font-semibold`}>{collector.name}</Text>
                <Text style={tw`text-sm text-gray-600`}>{collector.vicinity}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Collector Details Modal */}
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.title}>{selectedCollector?.name}</Text>
            <Text style={styles.info}>Location: {selectedCollector?.vicinity}</Text>
            <TouchableOpacity style={styles.button} onPress={handleCallPress}>
              <View style={styles.buttonContent}>
                <FontAwesome5 name="phone" size={18} color="white" />
                <Text style={styles.buttonText}>Call Now</Text>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '90%',
    maxHeight: '80%',
    overflow: 'hidden',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#6b21a8', // purple color
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#6b21a8', // purple color
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
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default GarbageCollectionScreen;
