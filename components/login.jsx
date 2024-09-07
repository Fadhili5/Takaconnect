import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';
import PrivadoSecure from '../assets/images/privado.png'; // Adjust the path as necessary

const { width } = Dimensions.get('window');

export default function App() {
  const router = useRouter();
  return (
    <View style={[styles.container, tw`bg-green-600`]}>
      <Image
        source={require('../assets/images/Designer (1).jpeg')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>TAKA CONNECT</Text>

      <Text style={styles.securedText}>Secured by Privado.id</Text>


      {/* Privado Secure Logo */}
      <Image
        source={PrivadoSecure}
        style={styles.privadoSecureLogo}
        resizeMode="contain"
      />

      {/* Spacing */}
      <View style={styles.spacer} />

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('auth/sign-in')}
      >
          <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 30,
    width: '100%',
  },
  logo: {
    width: 150,
    height: 100,
  },
  title: {
    color: Colors.WHITE,
    fontSize: width * 0.08, // Responsive font size
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  privadoSecureLogo: {
    marginTop: 10,
    width: 110,
    height: 30,
  },
  securedText: {
    color: Colors.WHITE,
    fontSize: width * 0.045, // Smaller font size for the secured text
    textAlign: 'center',
    marginTop: 5,
  },
  spacer: {
    height: 40, // Space between secured text and button
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: Colors.BLUE, // Ensure this is defined in your Colors module
    borderRadius: 25,
    marginTop: 20,
    width: '85%', // Adjusted for better responsiveness
    alignItems: 'center',
  },
  buttonText: {
    fontSize: width * 0.05,
    fontFamily: 'outfit', // Ensure you have this font loaded or choose an alternative
    textAlign: 'center',
    color: Colors.WHITE,
    fontWeight: 'bold', // Make the text bold
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 25,
  },
});