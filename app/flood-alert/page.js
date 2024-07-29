import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Modal, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import axios from 'axios';
import tw from 'twrnc';
import { FontAwesome5 } from '@expo/vector-icons';

const FloodAlertScreen = () => {
  const [region, setRegion] = useState(null);
  const [floodAlerts, setFloodAlerts] = useState([]);
  const [selectedAlert, setSelectedAlert] = useState(null);
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
      fetchFloodAlerts(location.coords.latitude, location.coords.longitude);
    })();
  }, []);

  const fetchFloodAlerts = async (latitude, longitude) => {
    const API_KEY = 'YOUR_API_KEY'; // Replace with your API key
    const url = `https://example.com/flood-alerts?location=${latitude},${longitude}&radius=5000&key=${API_KEY}`;
    try {
      const response = await axios.get(url);
      setFloodAlerts(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAlertPress = (alert) => {
    setSelectedAlert(alert);
    setModalVisible(true);
  };

  return (
    <View style={tw`flex-1 bg-white`}>
      <View style={tw`h-1/2`}>
        {region ? (
          <MapView style={tw`flex-1`} region={region}>
            {floodAlerts.map((alert, index) => (
              <Marker
                key={index}
                coordinate={{
                  latitude: alert.latitude,
                  longitude: alert.longitude,
                }}
                title={alert.title}
                description={alert.description}
                pinColor="blue"
              />
            ))}
          </MapView>
        ) : (
          <View style={tw`flex-1 justify-center items-center`}>
            <Text style={tw`text-lg font-semibold`}>Loading map...</Text>
          </View>
        )}
      </View>
      <View style={tw`h-1/2 bg-gray-100 p-4`}>
        <Text style={tw`text-xl font-bold mb-4`}>Flood Alerts</Text>
        <ScrollView>
          {floodAlerts.map((alert, index) => (
            <TouchableOpacity
              key={index}
              style={tw`flex-row items-center mb-4 bg-white p-4 rounded-lg shadow-md`}
              onPress={() => handleAlertPress(alert)}
            >
              <View>
                <Text style={tw`text-lg font-semibold`}>{alert.title}</Text>
                <Text style={tw`text-sm text-gray-600`}>{alert.description}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Alert Details Modal */}
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.title}>{selectedAlert?.title}</Text>
            <Text style={styles.info}>Description: {selectedAlert?.description}</Text>
            <Text style={styles.info}>Location: {selectedAlert?.location}</Text>
            <Text style={styles.info}>Severity: {selectedAlert?.severity}</Text>
            <Text style={styles.info}>Date: {selectedAlert?.date}</Text>
            <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(selectedAlert?.moreInfoUrl)}>
              <View style={styles.buttonContent}>
                <FontAwesome5 name="info-circle" size={18} color="white" />
                <Text style={styles.buttonText}>More Info</Text>
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

export default FloodAlertScreen;
