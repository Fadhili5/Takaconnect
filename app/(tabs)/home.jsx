import React from 'react';
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome5, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';

const StatItem = ({ icon, value, label, color }) => (
  <View style={tw`items-center`}>
    <FontAwesome5 name={icon} size={24} color={color} style={tw`mb-2`} />
    <Text style={tw`font-bold text-xl text-white`}>{value}</Text>
    <Text style={tw`text-white text-xs mt-1`}>{label}</Text>
  </View>
);

const EcoStatsCard = () => {
  return (
    <View style={tw`bg-green-500 rounded-xl p-6 shadow-lg mb-4`}>
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

const BlockchainInfoCard = ({ navigation }) => (
  <TouchableOpacity
    style={tw`bg-blue-500 rounded-xl p-6 shadow-lg mb-4`}
    onPress={() => navigation.navigate('businessVerification/page')}
  >
    <View style={tw`flex-row items-center mb-2`}>
      <MaterialIcons name="attach-money" size={24} color="white" style={tw`mr-2`} />
      <Text style={tw`text-white font-bold text-lg`}>Leaderboard</Text>
    </View>
    <Text style={tw`text-white mb-4`}>See where you stand in your recycling efforts.</Text>
    <View style={tw`flex-row justify-between`}>
      <Text style={tw`text-white`}>Last Update:</Text>
      <Text style={tw`text-white font-semibold`}>2 hours ago</Text>
    </View>
  </TouchableOpacity>
);

const ImpactCard = ({ navigation }) => (
  <TouchableOpacity 
    style={tw`bg-purple-500 rounded-xl p-6 shadow-lg mb-4`}
    onPress={() => navigation.navigate('TrackYourTrash/page')}
  >
    <View style={tw`flex-row items-center mb-2`}>
      <Ionicons name="footsteps" size={24} color="white" style={tw`mr-2`} />
      <Text style={tw`text-white font-bold text-lg`}>Your Impact</Text>
    </View>
    <Text style={tw`text-white mb-4`}>See how your trash is making a difference!</Text>
    <View style={tw`flex-row items-center`}>
      <Text style={tw`text-white mr-2`}>Track Your Trash</Text>
      <Ionicons name="arrow-forward" size={20} color="white" />
    </View>
  </TouchableOpacity>
);

const MarketplaceCard = ({ navigation }) => (
  <TouchableOpacity 
    style={tw`bg-yellow-500 rounded-xl p-6 shadow-lg mb-4`}
    onPress={() => navigation.navigate('shop')}
  >
    <View style={tw`flex-row items-center mb-2`}>
      <Ionicons name="cart" size={24} color="white" style={tw`mr-2`} />
      <Text style={tw`text-white font-bold text-lg`}>Recycling Marketplace</Text>
    </View>
    <Text style={tw`text-white mb-4`}>Turn your trash into cash! Sell your recyclables.</Text>
    <View style={tw`flex-row justify-between`}>
      <Text style={tw`text-white`}>Active Listings:</Text>
      <Text style={tw`text-white font-semibold`}>12</Text>
    </View>
  </TouchableOpacity>
);

const WasteTipsCard = ({ navigation }) => (
  <TouchableOpacity 
    style={tw`bg-green-500 rounded-xl p-6 shadow-lg mb-4`}
    onPress={() => navigation.navigate('urbantips/page')}
  >
    <View style={tw`flex-row items-center mb-2`}>
      <MaterialCommunityIcons name="lightbulb-outline" size={24} color="white" style={tw`mr-2`} />
      <Text style={tw`text-white font-bold text-lg`}>Waste Tips</Text>
    </View>
    <Text style={tw`text-white mb-4`}>Get useful tips on managing waste effectively.</Text>
    <View style={tw`flex-row items-center`}>
      <Text style={tw`text-white mr-2`}>Learn More</Text>
      <Ionicons name="arrow-forward" size={20} color="white" />
    </View>
  </TouchableOpacity>
);

export default function App() {
  const navigation = useNavigation();

  return (
    <ScrollView style={[tw`bg-gray-100`, { flex: 1 }]}>
      <View style={tw`p-4 mt-7`}>
        
        {/* Header */}
        <View style={tw`flex flex-row justify-between items-center mb-2`}>
          <TouchableOpacity
            onPress={() => navigation.navigate('RedeemPoints/page')}
          >
            <Text style={tw`font-semibold text-lg`}>Hi, Fadhili</Text>
            <Text style={tw`text-gray-500 text-sm`}>Nairobi, Kenya</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`flex flex-row items-center`}
            onPress={() => navigation.navigate('Notification/page')}
          >
            <Ionicons name="notifications-outline" size={24} color="gray" style={tw`mr-4`} />
            <Image source={{ uri: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg' }} style={tw`w-10 h-10 rounded-full`} />
          </TouchableOpacity>
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
              { name: 'Plastic', image: require('../../assets/images/plasticc.jpg') },
              { name: 'Glass', image: require('../../assets/images/glasses.jpg') },
              { name: 'Paper', image: require('../../assets/images/papers.jpg') },
              { name: 'Metal', image: require('../../assets/images/metallic.jpg') },
            ].map((item, index) => (
              <View key={index} style={tw`bg-white rounded-lg p-4 items-center mr-2`}>
                <Image source={item.image} style={tw`w-16 h-16`} />
                <Text style={tw`mt-2`}>{item.name}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Statistics */}
        <EcoStatsCard />

        {/* Blockchain Info Card */}
        <BlockchainInfoCard navigation={navigation} />

        {/* Impact Card */}
        <ImpactCard navigation={navigation} />

        {/* Marketplace Card */}
        <MarketplaceCard navigation={navigation} />

        {/* Waste Tips Card */}
        <WasteTipsCard navigation={navigation} />
      </View>
    </ScrollView>
  );
}