import React, { useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { Tabs, useRouter } from 'expo-router';
import { MaterialCommunityIcons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import QRCode from 'react-native-qrcode-svg';
import tw from 'tailwind-react-native-classnames';

SplashScreen.preventAutoHideAsync(); // Ensure splash screen is handled

export default function Layout() {
  const router = useRouter(); // Initialize router

  useEffect(() => {
    async function prepare() {
      // Hide the splash screen after the preparation
      await SplashScreen.hideAsync();
    }
    prepare();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.sessionButtonContainer}>
          <TouchableOpacity style={styles.sessionButton} onPress={() => router.push('/session/page')}>
            <MaterialCommunityIcons name="plus" size={24} color="white" />
            <Text style={styles.sessionButtonText}>Taka</Text>
          </TouchableOpacity>
        </View>

        
      </View>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.tabBar,
          tabBarLabelStyle: { marginBottom: 5 }, // Reduce space between icon and label
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home-circle-outline" size={30} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="location"
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="location-on" size={30} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="qrcode"
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
              <View style={styles.qrCodeTab}>
                <MaterialCommunityIcons name="qrcode-scan" size={40} color={color} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="shop"
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="shopping-cart" size={30} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
              <FontAwesome name="gear" size={24} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 70,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: '#e2e2e2',
    position: 'relative',
    paddingVertical: 10,
  },
  sessionButtonContainer: {
    position: 'absolute',
    bottom: 70,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  sessionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: '#000000', // purple color
    borderRadius: 10,
    elevation: 5,
  },
  sessionButtonText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 5,
  },
  qrCodeTab: {
    position: 'absolute',
    bottom: 10, // Adjust to position the QR code icon higher
    backgroundColor: 'white',
    borderRadius: 40,
    padding: 10,
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});