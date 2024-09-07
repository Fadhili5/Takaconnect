import React from 'react';
import { ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';


const ProfileScreen = () => {
  return (
    <ScrollView style={tw`bg-white`}>
      {/* Header */}
      <View style={tw`flex-row justify-between items-center p-4`}>
        <TouchableOpacity>
          <Ionicons name="qr-code-outline" size={24} color="gray" style={tw`mr-4`} />
        </TouchableOpacity>
        <TouchableOpacity>
        <Ionicons name="settings-outline" size={24} color="black" />
                </TouchableOpacity>
      </View>

      {/* Profile Section */}
      <View style={tw`items-center p-4`}>
        <Image source={require('../../assets/images/jeph.jpg')} style={tw`w-24 h-24 rounded-full`} />
        <Text style={tw`text-xl font-bold text-black mt-2`}>Dennis Fadhili</Text>
        <Text style={tw`text-gray-600`}>14.07.2002</Text>
        <Text style={tw`text-gray-600`}>Runda, Nairobi</Text>
        <TouchableOpacity style={tw`mt-4 bg-green-600 rounded-full px-10 py-3`}>
          <Text style={tw`text-white`}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Achievements Section */}
      <View style={tw`p-4`}>
        <View style={tw`flex-row justify-between items-center mb-2`}>
          <Text style={tw`text-lg font-bold text-black`}>Achievements</Text>
          <TouchableOpacity>
            <Text style={tw`text-green-600`}>View more</Text>
          </TouchableOpacity>
        </View>
        <View style={tw`p-4 border border-gray-200 rounded-lg`}>
          <Text>This Month</Text>
          <View style={tw`flex-row items-center mt-2`}>
            <Image source={require('../../assets/images/image copy.png')} style={tw`w-16 h-16`} />
            <View style={tw`ml-4`}>
              <Text>8 kg</Text>
              <Text style={tw`text-gray-600`}>Plastic</Text>
            </View>
          </View>
        </View>
      </View>

      {/* EcoCoins Section */}
      <View style={tw`p-4 border-t border-b border-gray-200 mt-2`}>
        <View style={tw`flex-row justify-between items-center mb-2`}>
          <Text style={tw`text-lg font-bold text-black`}>EcoCoins</Text>
          <TouchableOpacity>
            <Text style={tw`text-green-600`}>View more</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text>547</Text>
          <Text style={tw`text-gray-600`}>per 1 month</Text>
        </View>
      </View>

      {/* EcoShop Section */}
      <View style={tw`p-4 flex-row`}>
        <View style={tw`flex-1`}>
          <Image source={require('../../assets/images/metal.png')} style={tw`w-full h-24`} />
          <Text style={tw`text-base font-bold`}>Health</Text>
        </View>
        <View style={tw`flex-1 ml-2 rounded-md rounded`}>
          <Image source={require('../../assets/images/incense.jpg')} style={tw`w-full h-24`} />
          <Text style={tw`text-base font-bold`}>Clothes</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;