import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Animated, Easing, ActivityIndicator } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import tw from 'twrnc';
import { FontAwesome5 } from '@expo/vector-icons';

const MapScreen = () => {
  const [region, setRegion] = useState(null);
  const [garbageCollectors, setGarbageCollectors] = useState([]);
  const [selectedCollector, setSelectedCollector] = useState(null);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const drawerAnimation = new Animated.Value(-400);

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
      generateRandomGarbageCollectors(location.coords.latitude, location.coords.longitude);
    })();
  }, []);

  const generateRandomGarbageCollectors = (latitude, longitude) => {
    const names = ["TAKATAKA SOLUTIONS", "Kibera Waste Recycle", "BioHarzard Waste Solutions"];
    const collectors = [];
    for (let i = 0; i < 3; i++) {
      collectors.push({
        id: i,
        name: names[i],
        location: {
          latitude: latitude + (Math.random() - 0.5) * 0.02,
          longitude: longitude + (Math.random() - 0.5) * 0.02,
        },
      });
    }
    setGarbageCollectors(collectors);
  };

  const handleCollectorPress = (collector) => {
    setSelectedCollector(collector);
    setDrawerVisible(true);
    Animated.timing(drawerAnimation, {
      toValue: 0,
      duration: 300,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: false,
    }).start();
  };

  const handleConnectPress = () => {
    setConnecting(true);
    setTimeout(() => {
      setConnecting(false);
      alert('Connected to the collector successfully!');
    }, 2000);
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
      <View style={tw`bg-purple-800 p-4 mt-8`}>
        <Text style={tw`text-white text-xl font-bold`}>Earn from Your Waste</Text>
        <Text style={tw`text-white`}>Connect with local garbage collectors and get paid for your trash.</Text>
      </View>
      <View style={tw`h-1/2`}>
        {region ? (
          <MapView style={tw`flex-1`} region={region}>
            {garbageCollectors.map((collector, index) => (
              <Marker
                key={index}
                coordinate={{
                  latitude: collector.location.latitude,
                  longitude: collector.location.longitude,
                }}
                title={collector.name}
                pinColor="red"
                onPress={() => handleCollectorPress(collector)}
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
          {garbageCollectors.map((collector, index) => (
            <TouchableOpacity
              key={index}
              style={tw`flex-row items-center mb-4 bg-white p-4 rounded-lg shadow-md`}
              onPress={() => handleCollectorPress(collector)}
            >
              <View>
                <Text style={tw`text-lg font-semibold`}>{collector.name}</Text>
                <Text style={tw`text-sm text-gray-600`}>Location: {collector.location.latitude.toFixed(4)}, {collector.location.longitude.toFixed(4)}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Garbage Collector Details Drawer */}
      {drawerVisible && (
        <Animated.View style={[styles.drawer, { bottom: drawerAnimation }]}>
          <View style={styles.drawerContent}>
            <Text style={styles.title}>{selectedCollector?.name}</Text>
            <Text style={styles.info}>Location: {selectedCollector?.location.latitude.toFixed(4)}, {selectedCollector?.location.longitude.toFixed(4)}</Text>
            <TouchableOpacity style={styles.button} onPress={handleConnectPress} disabled={connecting}>
              <View style={styles.buttonContent}>
                {connecting ? (
                  <ActivityIndicator size="small" color="white" />
                ) : (
                  <>
                    <FontAwesome5 name="recycle" size={18} color="white" />
                    <Text style={styles.buttonText}>Connect to Collector</Text>
                  </>
                )}
              </View>
            </TouchableOpacity>
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
    backgroundColor: 'green',
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

export default MapScreen;
