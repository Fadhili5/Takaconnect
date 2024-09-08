import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import QRCode from 'react-native-qrcode-svg';
import { useNavigation } from '@react-navigation/native';

const BuyWasteScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={[tw`bg-gray-100`, { flex: 1, justifyContent: 'center', alignItems: 'center' }]}>
      {/* Section: Scan with Privado App */}
      <View style={styles.card}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('BuyWaste/page')}
        >
          <Text style={styles.title}>Buy Waste</Text>
        </TouchableOpacity>
        <Text style={styles.subtitle}>Scan with your Privado.id app to confirm your credentials.</Text>

        {/* QR Code */}
        <View style={tw`my-6`}>
          <QRCode
            value="https://your-app-link.com"
            size={200}
            color="#000"
            backgroundColor="#FFF"
          />
        </View>

        {/* Secured by Privado */}
        <View style={tw`flex-row items-center mt-6`}>
          <View style={tw`bg-gray-200 rounded p-2 mr-2`}>
          <Text style={tw`text-gray-600 text-base mr-2`}>Secured by</Text>
          <Text style={tw`text-gray-600 text-base mr-2`}>Privado.ID</Text>
          </View>
          <Image source={require('../../assets/images/privado.png')} style={styles.logo} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    width: '90%',
    alignItems: 'center',
  },
  button: {
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
  },
  logo: {
    width: 80,
    height: 40,
    resizeMode: 'contain',
  },
});

export default BuyWasteScreen;