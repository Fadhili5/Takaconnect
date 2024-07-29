import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal, Linking, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import axios from 'axios';
import tw from 'tailwind-react-native-classnames';
import { FontAwesome5 } from '@expo/vector-icons';

const MapScreen = () => {
  const [region, setRegion] = useState(null);
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('hospitals'); // default tab

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
      if (activeTab === 'hospitals') {
        fetchHospitals(location.coords.latitude, location.coords.longitude);
      } else {
        fetchGarbageCollectors(location.coords.latitude, location.coords.longitude);
      }
    })();
  }, [activeTab]);

  const fetchHospitals = async (latitude, longitude) => {
    const API_KEY = 'YOUR_GOOGLE_API_KEY'; // Replace with your Google API Key
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=5000&type=hospital&key=${API_KEY}`;
    try {
      const response = await axios.get(url);
      setData(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchGarbageCollectors = async (latitude, longitude) => {
    // Mock data for garbage collectors
    const data = [
      { id: 1, name: 'Garbage Collector 1', location: { lat: latitude + 0.01, lng: longitude + 0.01 }, vicinity: '2 km away' },
      { id: 2, name: 'Garbage Collector 2', location: { lat: latitude + 0.02, lng: longitude + 0.02 }, vicinity: '3 km away' },
      { id: 3, name: 'Garbage Collector 3', location: { lat: latitude + 0.03, lng: longitude + 0.03 }, vicinity: '5 km away' },
    ];
    setData(data);
  };

  const handleItemPress = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const handleBookUberPress = () => {
    const uberLink = `https://m.uber.com/ul/?action=setPickup&client_id=YOUR_UBER_CLIENT_ID&pickup=my_location&dropoff[latitude]=${selectedItem.geometry.location.lat}&dropoff[longitude]=${selectedItem.geometry.location.lng}&dropoff[nickname]=${selectedItem.name}`;
    Linking.openURL(uberLink);
  };

  return (
    <View style={tw`flex-1 bg-white`}>
      <View style={tw`h-1/2`}>
        {region ? (
          <MapView style={tw`flex-1`} region={region}>
            {data.map((item, index) => (
              <Marker
                key={index}
                coordinate={{
                  latitude: item.geometry ? item.geometry.location.lat : item.location.lat,
                  longitude: item.geometry ? item.geometry.location.lng : item.location.lng,
                }}
                title={item.name}
                description={item.vicinity}
                pinColor="red"
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
        <View style={tw`flex-row justify-around`}>
          <TouchableOpacity
            style={[tw`p-4 rounded-full`, activeTab === 'hospitals' ? tw`bg-purple-800` : tw`bg-gray-300`]}
            onPress={() => setActiveTab('hospitals')}
          >
            <Text style={tw`text-white font-semibold`}>Hospitals</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[tw`p-4 rounded-full`, activeTab === 'garbageCollectors' ? tw`bg-purple-800` : tw`bg-gray-300`]}
            onPress={() => setActiveTab('garbageCollectors')}
          >
            <Text style={tw`text-white font-semibold`}>Garbage Collectors</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={tw`mt-4`}>
          {data.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={tw`flex-row items-center mb-4 bg-white p-4 rounded-lg shadow-md`}
              onPress={() => handleItemPress(item)}
            >
              <View>
                <Text style={tw`text-lg font-semibold`}>{item.name}</Text>
                <Text style={tw`text-sm text-gray-600`}>{item.vicinity}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Details Modal */}
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.title}>{selectedItem?.name}</Text>
            <Text style={styles.info}>Address: {selectedItem?.vicinity}</Text>
            {selectedItem?.rating && <Text style={styles.info}>Rating: {selectedItem?.rating}</Text>}
            {selectedItem?.opening_hours?.weekday_text && (
              <>
                <Text style={styles.subtitle}>Opening Hours:</Text>
                {selectedItem.opening_hours.weekday_text.map((hours, idx) => (
                  <Text key={idx} style={styles.info}>
                    {hours}
                  </Text>
                ))}
              </>
            )}
            {selectedItem?.types && (
              <>
                <Text style={styles.subtitle}>Specialities:</Text>
                {selectedItem.types.map((type, idx) => (
                  <Text key={idx} style={styles.info}>
                    {type.replace('_', ' ')}
                  </Text>
                ))}
              </>
            )}
            <TouchableOpacity style={styles.button} onPress={handleBookUberPress}>
              <View style={styles.buttonContent}>
                <FontAwesome5 name="uber" size={18} color="white" />
                <Text style={styles.buttonText}>Book Uber</Text>
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
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
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

export default MapScreen;
