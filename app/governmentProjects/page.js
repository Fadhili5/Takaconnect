import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import BottomSheet from 'reanimated-bottom-sheet';
import { FontAwesome5 } from '@expo/vector-icons';
import tw from "tailwind-react-native-classnames";

const projects = [
  { id: 1, name: 'Project A', details: 'Details about Project A', coordinate: { latitude: -1.2921, longitude: 36.8219 }, completed: 75, invested: 1000000, used: 750000, progress: 'On Track', stolen: 250000 },
  { id: 2, name: 'Project B', details: 'Details about Project B', coordinate: { latitude: -1.2922, longitude: 36.8220 }, completed: 50, invested: 2000000, used: 1000000, progress: 'Delayed', stolen: 1000000 },
  // Add more projects as needed
];

function MapScreen() {
  const [selectedProject, setSelectedProject] = useState(null);
  const sheetRef = React.useRef(null);

  const renderContent = () => (
    <View style={styles.drawerContent}>
      {selectedProject ? (
        <>
          <Text style={[tw`text-2xl mb-4`, { fontFamily: 'outfit-bold' }]}>{selectedProject.name}</Text>
          <Text style={[tw`text-lg`, { fontFamily: 'outfit' }]}>{selectedProject.details}</Text>
          <Text style={[tw`text-lg`, { fontFamily: 'outfit' }]}>Completed: {selectedProject.completed}%</Text>
          <Text style={[tw`text-lg`, { fontFamily: 'outfit' }]}>Invested: ${selectedProject.invested}</Text>
          <Text style={[tw`text-lg`, { fontFamily: 'outfit' }]}>Used: ${selectedProject.used}</Text>
          <Text style={[tw`text-lg`, { fontFamily: 'outfit' }]}>Progress: {selectedProject.progress}</Text>
          <Text style={[tw`text-lg`, { fontFamily: 'outfit' }]}>Stolen: ${selectedProject.stolen}</Text>
        </>
      ) : (
        <Text style={[tw`text-lg`, { fontFamily: 'outfit' }]}>Select a project to see details</Text>
      )}
    </View>
  );

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
            onPress={() => {
              setSelectedProject(project);
              sheetRef.current.snapTo(0);
            }}
          />
        ))}
      </MapView>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[450, 300, 0]}
        borderRadius={10}
        renderContent={renderContent}
      />
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
  drawerContent: {
    backgroundColor: 'white',
    padding: 16,
    height: 450,
  },
});