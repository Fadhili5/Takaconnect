import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Tabs } from 'expo-router';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';

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
          <MaterialCommunityIcons name="home-circle-outline" size={30} color="black" />          
        ),
        }}
      />
      {/* <Tabs.Screen
        name="gift"
        options={{
          tabBarLabel: 'Gift',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="gift-open-outline" size={24} color={color} />
          ),
        }}
      /> */}
      <Tabs.Screen
        name="chat"
        options={{
          tabBarLabel: 'services',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="miscellaneous-services" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="community"
        options={{
          tabBarLabel: 'community',
          tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account-group" size={24} color="black" />          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
          <FontAwesome6 name="user-gear" size={24} color="black" />          ),
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
