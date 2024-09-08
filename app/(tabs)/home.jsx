import React from 'react';
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import tw from 'tailwind-react-native-classnames';

const Drawer = createDrawerNavigator();

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
  <View style={tw`items-center`}>
    <FontAwesome5 name={icon} size={24} color={color} style={tw`mb-2`} />
    <Text style={tw`font-bold text-xl text-white`}>{value}</Text>
    <Text style={tw`text-white text-xs mt-1`}>{label}</Text>
  </View>
);

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={[tw`bg-gray-100`, { flex: 1 }]}>
      <View style={tw`p-4 mt-7`}>
        
        {/* Header */}
        <View style={tw`flex flex-row justify-between items-center mb-2`}>
          <View>
            <Text style={tw`font-semibold text-lg`}>Hi, Fadhili</Text>
            <Text style={tw`text-gray-500 text-sm`}>Nairobi, Kenya</Text>
          </View>
          <TouchableOpacity style={tw`flex flex-row items-center`} onPress={() => navigation.openDrawer()}>
            <Ionicons name="menu" size={24} color="gray" style={tw`mr-4`} />
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
              { name: 'Plastic', image: 'https://example.com/plastic.jpg' },
              { name: 'Glass', image: 'https://example.com/glass.jpg' },
              { name: 'Paper', image: 'https://example.com/paper.jpg' },
              { name: 'Metal', image: 'https://example.com/metal.jpg' },
            ].map((item, index) => (
              <View key={index} style={tw`bg-white rounded-lg p-4 items-center mr-2`}>
                <Image source={{ uri: item.image }} style={tw`w-16 h-16`} />
                <Text style={tw`mt-2`}>{item.name}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Statistics */}
        <EcoStatsCard />
      </View>
    </ScrollView>
  );
};

const RedeemPointsScreen = () => (
  <View style={tw`flex-1 justify-center items-center`}>
    <Text>Redeem Points Screen</Text>
  </View>
);

const TrackTrashScreen = () => (
  <View style={tw`flex-1 justify-center items-center`}>
    <Text>Track Your Trash Screen</Text>
  </View>
);

const SettingsScreen = () => (
  <View style={tw`flex-1 justify-center items-center`}>
    <Text>Settings Screen</Text>
  </View>
);

const DrawerContent = ({ navigation }) => (
  <View style={tw`flex-1 p-5`}>
    <View style={tw`items-center mb-10`}>
      <Image source={{ uri: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg' }} style={tw`w-20 h-20 rounded-full mb-2`} />
      <Text style={tw`text-lg font-bold`}>Fadhili</Text>
      <Text style={tw`text-gray-500`}>Eco Warrior</Text>
    </View>
    <TouchableOpacity style={tw`flex-row items-center py-3`} onPress={() => navigation.navigate('Home')}>
      <Ionicons name="home-outline" size={24} color="gray" style={tw`mr-3`} />
      <Text>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity style={tw`flex-row items-center py-3`} onPress={() => navigation.navigate('RedeemPoints')}>
      <FontAwesome5 name="coins" size={24} color="gray" style={tw`mr-3`} />
      <Text>Redeem Points</Text>
    </TouchableOpacity>
    <TouchableOpacity style={tw`flex-row items-center py-3`} onPress={() => navigation.navigate('TrackTrash')}>
      <FontAwesome5 name="trash-alt" size={24} color="gray" style={tw`mr-3`} />
      <Text>Track Your Trash</Text>
    </TouchableOpacity>
    <TouchableOpacity style={tw`flex-row items-center py-3`} onPress={() => navigation.navigate('Settings')}>
      <Ionicons name="settings-outline" size={24} color="gray" style={tw`mr-3`} />
      <Text>Settings</Text>
    </TouchableOpacity>
  </View>
);

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Drawer.Screen name="RedeemPoints" component={RedeemPointsScreen} />
        <Drawer.Screen name="TrackTrash" component={TrackTrashScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;