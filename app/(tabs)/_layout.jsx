import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Tabs } from 'expo-router';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function Tablayout() {
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
            <MaterialCommunityIcons name="home-heart" size={34} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="gift"
        options={{
          tabBarLabel: 'Gift',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="gift-open-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          // tabBarLabel: 'Chat',
          tabBarIcon: ({ color }) => (
            <TouchableOpacity style={styles.chatButton}>
              <FontAwesome name="microphone" size={24} color="gray" />            
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="group"
        options={{
          tabBarLabel: 'Group',
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
            <MaterialCommunityIcons name="account" size={24} color={color} />
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
  chatButton: {
    position: 'absolute',
    bottom: 10,
    width: 60,
    height: 60,
    borderRadius: 35,
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
});
