import React from 'react';
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import tw from 'tailwind-react-native-classnames';

const EcoStatsCard = () => {
  return (
    <View style={tw`bg-green-500 rounded-xl p-6 shadow-lg`}>
      <View style={tw`flex-row justify-between items-center`}>
        <StatItem
          icon="coins"
          value="5669"
          label="POINTS"
          color="#FFD700"
        />
        <StatItem
          icon="cloud"
          value="500g"
          label="SAVED CO2"
          color="#FFFFFF"
        />
        <StatItem
          icon="recycle"
          value="24"
          label="RECYCLED"
          color="#4CAF50"
        />
      </View>
    </View>
  );
};

const StatItem = ({ icon, value, label, color }) => (
  <View style={tw`items-center `}>
    <FontAwesome5 name={icon} size={24} color={color} style={tw`mb-2`} />
    <Text style={tw`font-bold text-xl text-white`}>{value}</Text>
    <Text style={tw`text-white text-xs mt-1`}>{label}</Text>
  </View>
);

export default function App() {
  return (
    <ScrollView style={[tw`bg-gray-100`, { flex: 1 }]}>
      <View style={tw`p-4 mt-7`}>
        
        {/* Header */}
        <View style={tw`flex flex-row justify-between items-center mb-2`}>
          <View>
            <Text style={tw`font-semibold text-lg`}>Hi, Fadhili</Text>
            <Text style={tw`text-gray-500 text-sm`}>Nairobi, Kenya</Text>
          </View>
          <View style={tw`flex flex-row items-center`}>
            <Ionicons name="notifications-outline" size={24} color="gray" style={tw`mr-4`} />
            <Image source={{ uri: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg' }} style={tw`w-10 h-10 rounded-full`} />
          </View>
        </View>

        {/* Search Bar */}
        <View style={tw`bg-white flex flex-row items-center rounded-full px-4 py-2 mb-4`}>
          <Ionicons name="search" size={20} color="gray" />
          <TextInput placeholder="Search" style={tw`ml-2 flex-1`} />
        </View>

        {/* Banner */}
        <View style={tw`bg-white rounded-lg overflow-hidden mb-4`}>
          <Image source={{ uri: 'https://plus.unsplash.com/premium_photo-1664455687732-8c5e114baed0?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} style={tw`w-full h-32`} />
        </View>

        {/* Materials */}
        <View style={tw`mb-4`}>
          <View style={tw`flex flex-row justify-between items-center mb-2`}>
            <Text style={tw`font-semibold text-lg`}>Materials</Text>
            <Text style={tw`text-blue-600`}>Show all</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[
              { name: 'Plastic', image: require('../../assets/images/water-bottle.png') },
              { name: 'Glass', image: require('../../assets/images/glass.png') },
              { name: 'Paper', image: require('../../assets/images/paper (1).png') },
              { name: 'Metal', image: require('../../assets/images/metal.png') },
            ].map((item, index) => (
              <View key={index} style={tw`bg-white rounded-lg p-4 items-center mr-2`}>
                <Image source={item.image} style={tw`w-16 h-16`} />
                <Text style={tw`mt-2`}>{item.name}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Statistics - Updated with EcoStatsCard */}
        <EcoStatsCard />
      </View>
    </ScrollView>
  );
}