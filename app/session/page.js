import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function AskKiliScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="microphone" size={100} color="black" />
      <TouchableOpacity style={styles.button} onPress={() => console.log('Start Recording')}>
        <Text style={styles.buttonText}>Start Recording</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#5B21B6', // purple color
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});