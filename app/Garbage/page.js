import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Modal, Linking, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import axios from 'axios';
import tw from 'twrnc';
import { FontAwesome5 } from '@expo/vector-icons';

const MapScreen = () => {
  const [region, setRegion] = useState(null);
  const [hospitals, setHospitals] = useState([]);
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  // const API_KEY = AIzaSyCMrRQNL4Aan8e0SWx0hPusAWHpIHzcVXU

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
      fetchHospitals(location.coords.latitude, location.coords.longitude);
    })();
  }, []);

  const fetchHospitals = async (latitude, longitude) => {
    const API_KEY = 'AIzaSyCMrRQNL4Aan8e0SWx0hPusAWHpIHzcVXU'; // Replace with your Google API Key
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=5000&type=hospital&key=${API_KEY}`;
    try {
      const response = await axios.get(url);
      setHospitals(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const handleHospitalPress = (hospital) => {
    setSelectedHospital(hospital);
    setModalVisible(true);
  };

  const handleBookUberPress = () => {
    const uberLink = `https://m.uber.com/ul/?action=setPickup&client_id=YOUR_UBER_CLIENT_ID&pickup=my_location&dropoff[latitude]=${selectedHospital.geometry.location.lat}&dropoff[longitude]=${selectedHospital.geometry.location.lng}&dropoff[nickname]=${selectedHospital.name}`;
    Linking.openURL(uberLink);
  };

  return (
    <View style={tw`flex-1 bg-white`}>
      <View style={tw`h-1/2`}>
        {region ? (
          <MapView style={tw`flex-1`} region={region}>
            {hospitals.map((hospital, index) => (
              <Marker
                key={index}
                coordinate={{
                  latitude: hospital.geometry.location.lat,
                  longitude: hospital.geometry.location.lng,
                }}
                title={hospital.name}
                description={hospital.vicinity}
                pinColor="red"
              />
            ))}
          </MapView>
        ) : (
          <View style={tw`flex-1 justify-center items-center`}>
            <Text style={tw`text-lg font-semibold`}>Loading Nishauri maps...</Text>
          </View>
        )}
      </View>
      <View style={tw`h-1/2 bg-gray-100 p-4`}>
        <Text style={tw`text-xl font-bold mb-4`}>Nearby Hospitals</Text>
        <ScrollView>
          {hospitals.map((hospital, index) => (
            <TouchableOpacity
              key={index}
              style={tw`flex-row items-center mb-4 bg-white p-4 rounded-lg shadow-md`}
              onPress={() => handleHospitalPress(hospital)}
            >
              {/* <Image
                source={{ uri: hospital.photos ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${hospital.photos[0].photo_reference}&key=${API_KEY}` : 'https://via.placeholder.com/50' }}
                style={tw`w-12 h-12 rounded-full mr-4`}
              /> */}
              <View>
                <Text style={tw`text-lg font-semibold`}>{hospital.name}</Text>
                <Text style={tw`text-sm text-gray-600`}>{hospital.vicinity}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Hospital Details Modal */}
      <Modal visible={modalVisible} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>{selectedHospital?.name}</Text>
          <Text style={styles.info}>Address: {selectedHospital?.vicinity}</Text>
          <Text style={styles.info}>Rating: {selectedHospital?.rating}</Text>
          <Text style={styles.info}>
            Open Now: {selectedHospital?.opening_hours?.open_now ? 'Yes' : 'No'}
          </Text>
          {selectedHospital?.opening_hours?.weekday_text && (
            <>
              <Text style={styles.subtitle}>Opening Hours:</Text>
              {selectedHospital.opening_hours.weekday_text.map((hours, idx) => (
                <Text key={idx} style={styles.info}>
                  {hours}
                </Text>
              ))}
            </>
          )}
          {selectedHospital?.types && (
            <>
              <Text style={styles.subtitle}>Specialities:</Text>
              {selectedHospital.types.map((type, idx) => (
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
    backgroundColor: 'blue',
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