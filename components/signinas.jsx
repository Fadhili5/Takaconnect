import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={[tw`bg-gray-100`, { flex: 1 }]}>
      <View style={tw`p-4 mt-12`}>
        <Text style={tw`text-2xl font-bold text-center mb-8`}>Welcome to EcoRecycling</Text>

        {/* Recycle Waste Card */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('RecycleWaste')}
        >
          <View style={tw`flex-row items-center mb-4`}>
            <MaterialCommunityIcons name="recycle" size={40} color="#4CAF50" style={tw`mr-4`} />
            <Text style={tw`text-xl font-bold text-green-700`}>Recycle Waste</Text>
          </View>
          <Text style={tw`text-gray-600`}>
            Do you have waste you'd like to recycle? Join us and turn your waste into valuable resources. Help keep the planet clean and earn rewards!
          </Text>
        </TouchableOpacity>

        {/* Buy Waste Card */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('BuyWaste')}
        >
          <View style={tw`flex-row items-center mb-4`}>
            <MaterialCommunityIcons name="cart" size={40} color="#FFA500" style={tw`mr-4`} />
            <Text style={tw`text-xl font-bold text-yellow-700`}>Buy Waste</Text>
          </View>
          <Text style={tw`text-gray-600`}>
            Are you looking to purchase recyclable materials? Connect with our network of waste collectors and get the materials you need at competitive prices.
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },

  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
    marginRight: 10,
  },
});

export default SignInScreen;