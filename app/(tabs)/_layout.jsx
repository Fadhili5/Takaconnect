import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { Tabs } from 'expo-router';
import { MaterialCommunityIcons, MaterialIcons, FontAwesome } from '@expo/vector-icons';

SplashScreen.preventAutoHideAsync(); // Ensure splash screen is handled

export default function Layout() {
  useEffect(() => {
    async function prepare() {
      // Hide the splash screen after the preparation
      await SplashScreen.hideAsync();
    }

    prepare();
  }, []);

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
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
});
