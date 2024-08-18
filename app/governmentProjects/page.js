import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { FontAwesome5 } from '@expo/vector-icons';
import tw from "tailwind-react-native-classnames";

const projects = [
  { id: 1, name: 'Kilimani Sports Ground', details: 'A sports ground in Kilimani area.', coordinate: { latitude: -1.2921, longitude: 36.8219 }, completed: 75, invested: 10000000, used: 7500000, progress: 'On Track', stolen: 250000 },
  { id: 2, name: 'Kilimani Hospital', details: 'A hospital in Kilimani area.', coordinate: { latitude: -1.2922, longitude: 36.8220 }, completed: 50, invested: 7000000, used: 2000000, progress: 'Delayed', stolen: 1000000 },
  { id: 3, name: 'Kilimani Library', details: 'A public library in Kilimani area.', coordinate: { latitude: -1.2923, longitude: 36.8221 }, completed: 30, invested: 1500000, used: 4500000, progress: 'On Track', stolen: 1050000 },
  { id: 4, name: 'Kilimani Community Center', details: 'A community center in Kilimani area.', coordinate: { latitude: -1.2924, longitude: 36.8222 }, completed: 90, invested: 2500000, used: 2250000, progress: 'On Track', stolen: 250000 },
  { id: 5, name: 'Kilimani Park', details: 'A public park in Kilimani area.', coordinate: { latitude: -1.2925, longitude: 36.8223 }, completed: 60, invested: 3000000, used: 1800000, progress: 'Delayed', stolen: 1200000 },
  { id: 6, name: 'Kilimani School', details: 'A primary school in Kilimani area.', coordinate: { latitude: -1.2926, longitude: 36.8224 }, completed: 80, invested: 3500000, used: 2800000, progress: 'On Track', stolen: 700000 },
  { id: 7, name: 'Kilimani Fire Station', details: 'A fire station in Kilimani area.', coordinate: { latitude: -1.2927, longitude: 36.8225 }, completed: 70, invested: 4000000, used: 2800000, progress: 'On Track', stolen: 1200000 },
  { id: 8, name: 'Kilimani Police Station', details: 'A police station in Kilimani area.', coordinate: { latitude: -1.2928, longitude: 36.8226 }, completed: 85, invested: 4500000, used: 3825000, progress: 'On Track', stolen: 675000 },
  { id: 9, name: 'Kilimani Market', details: 'A public market in Kilimani area.', coordinate: { latitude: -1.2929, longitude: 36.8227 }, completed: 55, invested: 5000000, used: 2750000, progress: 'Delayed', stolen: 2250000 },
  { id: 10, name: 'Kilimani Water Plant', details: 'A water treatment plant in Kilimani area.', coordinate: { latitude: -1.2930, longitude: 36.8228 }, completed: 40, invested: 5500000, used: 2200000, progress: 'Delayed', stolen: 3300000 },
  // Add more projects as needed
];

function MapScreen() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -1.2921,
          longitude: 36.8219,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {projects.map(project => (
          <Marker
            key={project.id}
            coordinate={project.coordinate}
            onPress={() => openModal(project)}
          />
        ))}
      </MapView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {selectedProject ? (
              <>
                <Text style={[tw`text-2xl mb-4`, { fontFamily: 'outfit-bold' }]}>{selectedProject.name}</Text>
                <Text style={[tw`text-lg`, { fontFamily: 'outfit' }]}>{selectedProject.details}</Text>
                <Text style={[tw`text-lg`, { fontFamily: 'outfit' }]}>Completed: {selectedProject.completed}%</Text>
                <Text style={[tw`text-lg`, { fontFamily: 'outfit' }]}>Invested: Kes{selectedProject.invested}</Text>
                <Text style={[tw`text-lg`, { fontFamily: 'outfit' }]}>Used: Kes{selectedProject.used}</Text>
                <Text style={[tw`text-lg`, { fontFamily: 'outfit' }]}>Progress: {selectedProject.progress}</Text>
                <Text style={[tw`text-lg`, { fontFamily: 'outfit' }]}>Stolen: Kes{selectedProject.stolen}</Text>
              </>
            ) : (
              <Text style={[tw`text-lg`, { fontFamily: 'outfit' }]}>Select a project to see details</Text>
            )}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={closeModal}
            >
              <Text style={[tw`text-center text-white`, { fontFamily: 'outfit-bold' }]}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default function GovernmentAroundYouPage() {
  return <MapScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#6b21a8',
    padding: 10,
    borderRadius: 5,
  },
});