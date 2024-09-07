import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';


const { width } = Dimensions.get('window'); // Get the screen width

export default function App() {
  const router = useRouter();
  return (
    <View style={[styles.container, tw`bg-green-600`]}>
      <Image
        source={require('../assets/images/Designer (1).jpeg')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={tw`text-white font-bold text-2xl`}>TAKA CONNECT</Text>

      <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('auth/sign-in')}
        >
          <Text >Get Started</Text>
        </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 370
  },
  logo: {
    width: 150,
    height: 100,
  },
  button: {
    padding: 15,
    backgroundColor: Colors.BLUE,
    borderRadius: 99,
    marginTop: '10%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: width * 0.05, // Use the screen width to calculate the font size
    fontFamily: 'outfit',
    textAlign: 'center',
    color: Colors.WHITE,
  },
});