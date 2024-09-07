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

      <View style={styles.qrCodeContainer}>
        <QRCode
          value="https://your-url.com"
          size={64}
          backgroundColor='white'
          color='blue'
        />
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
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home-circle-outline" size={30} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="chat"
          options={{
            tabBarLabel: 'Services',
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="miscellaneous-services" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="community"
          options={{
            tabBarLabel: 'Community',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account-group" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarLabel: 'Profile',
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
    height: 60,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: '#e2e2e2',
    position: 'relative',
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
});