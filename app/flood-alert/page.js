import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, FlatList, Animated, Easing } from 'react-native';
import tw from 'twrnc';
import { FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const initialAlerts = [
  // Sample data structure
  { id: '1', title: 'Severe Flood Warning', description: 'Heavy rains expected to cause severe flooding. Evacuate low-lying areas.', details: 'More detailed information about the flood warning, including safety tips and affected areas.' },
  { id: '2', title: 'Minor Flood Alert', description: 'Possible minor flooding in certain areas. Be cautious and stay updated.', details: 'Additional details on minor flooding and precautionary measures.' },
  // Add more alerts as needed
];

const FloodAlertsScreen = () => {
  const [alerts, setAlerts] = useState(initialAlerts);
  const [selectedAlert, setSelectedAlert] = useState(null);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const drawerAnimation = new Animated.Value(-400);
  const router = useRouter();

  // Function to simulate fetching alerts from an API
  const fetchAlerts = () => {
    // Replace with real API call
    setAlerts(initialAlerts);
  };

  useEffect(() => {
    fetchAlerts();
  }, []);

  const handleAlertPress = (alert) => {
    setSelectedAlert(alert);
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
      <View style={tw`bg-blue-800 p-6 pb-12`}>
        <View style={tw`flex-row items-center mt-10`}>
          <TouchableOpacity onPress={() => router.back()}>
            <FontAwesome5 name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
          <Text style={[tw`text-white text-2xl ml-4`, { fontFamily: 'outfit-bold' }]}>Flood Alerts</Text>
          <TouchableOpacity style={styles.refreshButton} onPress={fetchAlerts}>
            <FontAwesome5 name="sync" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Alert List */}
      <ScrollView contentContainerStyle={tw`p-4`}>
        <Text style={[tw`mb-3`, { fontFamily: 'outfit-bold' }]}>These results are from Red cross and the are updated every second</Text>
        <FlatList
          data={alerts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity key={item.id} style={styles.card} onPress={() => handleAlertPress(item)}>
              <View style={styles.cardContent}>
                <Text style={[tw`text-lg font-bold`, { fontFamily: 'outfit-bold' }]}>{item.title}</Text>
                <Text style={[tw`text-sm`, { fontFamily: 'outfit' }]}>{item.description}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </ScrollView>

      {/* Alert Details Drawer */}
      {drawerVisible && (
        <Animated.View style={[styles.drawer, { bottom: drawerAnimation }]}>
          <View style={styles.drawerContent}>
            <Text style={styles.title}>{selectedAlert?.title}</Text>
            <Text style={styles.info}>{selectedAlert?.details}</Text>
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
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  cardContent: {
    padding: 12,
  },
  drawer: {
    position: 'absolute',
    left: 0,
    right: 0,
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
    textAlign: 'center',
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
  refreshButton: {
    marginLeft: 'auto',
  },
});

export default FloodAlertsScreen;
