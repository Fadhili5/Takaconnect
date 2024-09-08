import React, { useState } from 'react';
import { ScrollView, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Ionicons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { LineChart } from 'react-native-chart-kit';

const ProfileScreen = () => {
  const [activeTab, setActiveTab] = useState('achievements');

  const screenWidth = Dimensions.get('window').width;

  const chartConfig = {
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    color: (opacity = 1) => `rgba(0, 128, 0, ${opacity})`,
    strokeWidth: 2,
  };

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(0, 128, 0, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

  return (
    <ScrollView style={tw`bg-white`}>
      {/* Header */}
      <View style={tw`flex-row justify-between items-center p-4 bg-green-50 `}>
        <TouchableOpacity style={tw`bg-white p-2 rounded-full mt-4`}>
          <Ionicons name="qr-code-outline" size={24} color="green" />
        </TouchableOpacity>
        <TouchableOpacity style={tw`bg-white p-2 rounded-full mt-4`}>
          <Ionicons name="settings-outline" size={24} color="green" />
        </TouchableOpacity>
      </View>

      {/* Profile Section */}
      <View style={tw`items-center p-6 bg-green-50`}>
        <Image source={require('../../assets/images/jeph.jpg')} style={tw`w-32 h-32 rounded-full border-4 border-green-500`} />
        <Text style={tw`text-2xl font-bold text-green-800 mt-2`}>Dennis Fadhili</Text>
        <Text style={tw`text-gray-600 text-lg`}>14.07.2002</Text>
        <Text style={tw`text-gray-600 text-lg`}>Runda, Nairobi</Text>
        <TouchableOpacity style={tw`mt-6 bg-green-600 rounded-full px-10 py-3 shadow-lg`}>
          <Text style={tw`text-white text-lg font-semibold`}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Stats Overview */}
      <View style={tw`flex-row justify-around p-4 bg-white shadow-md`}>
        <StatItem icon="recycle" value="547" label="EcoCoins" />
        <StatItem icon="tree" value="23" label="Trees Saved" />
        <StatItem icon="water" value="1000L" label="Water Saved" />
      </View>

      {/* Tabs */}
      <View style={tw`flex-row justify-around mt-4 border-b border-gray-200`}>
        {['Achievements', 'EcoCoins', 'Impact'].map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab.toLowerCase())}
            style={tw`pb-2 ${activeTab === tab.toLowerCase() ? 'border-b-2 border-green-500' : ''}`}
          >
            <Text style={tw`text-lg ${activeTab === tab.toLowerCase() ? 'text-green-500 font-bold' : 'text-gray-600'}`}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Achievements Section */}
      {activeTab === 'achievements' && (
        <View style={tw`p-4`}>
          <Text style={tw`text-xl font-bold text-green-800 mb-4`}>Recent Achievements</Text>
          <AchievementItem
            image={require('../../assets/images/image copy.png')}
            title="Plastic Master"
            description="Recycled 50kg of plastic"
            progress={80}
          />
          <AchievementItem
            image={require('../../assets/images/papers.jpg')}
            title="Paper Saver"
            description="Saved 100 trees worth of paper"
            progress={60}
          />
          <AchievementItem
            image={require('../../assets/images/metallic.jpg')}
            title="Metal Magnet"
            description="Recycled 30kg of metal"
            progress={40}
          />
        </View>
      )}

      {/* EcoCoins Section */}
      {activeTab === 'ecocoins' && (
        <View style={tw`p-4`}>
          <Text style={tw`text-xl font-bold text-green-800 mb-4`}>EcoCoins History</Text>
          <LineChart
            data={data}
            width={screenWidth - 40}
            height={220}
            chartConfig={chartConfig}
            bezier
            style={tw`mb-4 rounded-lg`}
          />
          <EcoCoinTransaction
            title="Plastic Recycling"
            amount="+50"
            date="2023-09-15"
          />
          <EcoCoinTransaction
            title="Paper Recycling"
            amount="+30"
            date="2023-09-10"
          />
          <EcoCoinTransaction
            title="Redeemed for Tree Planting"
            amount="-100"
            date="2023-09-05"
          />
        </View>
      )}

      {/* Impact Section */}
      {activeTab === 'impact' && (
        <View style={tw`p-4`}>
          <Text style={tw`text-xl font-bold text-green-800 mb-4`}>Your Environmental Impact</Text>
          <ImpactCard
            icon="tree"
            title="Trees Saved"
            value="23"
            description="Equivalent to planting a small forest!"
          />
          <ImpactCard
            icon="water"
            title="Water Saved"
            value="1000L"
            description="Enough to fill 5 bathtubs!"
          />
          <ImpactCard
            icon="molecule-co2"
            title="CO2 Reduced"
            value="500kg"
            description="Like taking 2 cars off the road for a month!"
          />
        </View>
      )}

      {/* EcoShop Section */}
      <View style={tw`p-4 mt-4`}>
        <Text style={tw`text-xl font-bold text-green-800 mb-4`}>EcoShop Highlights</Text>
        <View style={tw`flex-row justify-between`}>
          <EcoShopItem
            image={require('../../assets/images/metal.png')}
            title="Eco-friendly Water Bottle"
            price="250 EcoCoins"
          />
          <EcoShopItem
            image={require('../../assets/images/incense.jpg')}
            title="Organic Cotton T-shirt"
            price="500 EcoCoins"
          />
        </View>
      </View>
    </ScrollView>
  );
};

const StatItem = ({ icon, value, label }) => (
  <View style={tw`items-center`}>
    <FontAwesome5 name={icon} size={24} color="green" style={tw`mb-2`} />
    <Text style={tw`font-bold text-xl text-green-600`}>{value}</Text>
    <Text style={tw`text-gray-600 text-sm`}>{label}</Text>
  </View>
);

const AchievementItem = ({ image, title, description, progress }) => (
  <View style={tw`flex-row items-center mb-4 bg-green-50 p-4 rounded-lg`}>
    <Image source={image} style={tw`w-16 h-16 rounded-full`} />
    <View style={tw`ml-4 flex-1`}>
      <Text style={tw`font-bold text-lg text-green-800`}>{title}</Text>
      <Text style={tw`text-gray-600`}>{description}</Text>
      <View style={tw`bg-gray-200 h-2 rounded-full mt-2`}>
        <View style={[tw`bg-green-500 h-2 rounded-full`, { width: `${progress}%` }]} />
      </View>
    </View>
  </View>
);

const EcoCoinTransaction = ({ title, amount, date }) => (
  <View style={tw`flex-row justify-between items-center mb-4 bg-green-50 p-4 rounded-lg`}>
    <View>
      <Text style={tw`font-bold text-lg text-green-800`}>{title}</Text>
      <Text style={tw`text-gray-600`}>{date}</Text>
    </View>
    <Text style={tw`font-bold text-xl ${amount.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>{amount}</Text>
  </View>
);

const ImpactCard = ({ icon, title, value, description }) => (
  <View style={tw`bg-green-50 p-4 rounded-lg mb-4`}>
    <View style={tw`flex-row items-center mb-2`}>
      <MaterialCommunityIcons name={icon} size={24} color="green" style={tw`mr-2`} />
      <Text style={tw`font-bold text-lg text-green-800`}>{title}</Text>
    </View>
    <Text style={tw`text-3xl font-bold text-green-600 mb-2`}>{value}</Text>
    <Text style={tw`text-gray-600`}>{description}</Text>
  </View>
);

const EcoShopItem = ({ image, title, price }) => (
  <View style={tw`bg-green-50 p-4 rounded-lg w-[48%]`}>
    <Image source={image} style={tw`w-full h-32 rounded-lg mb-2`} />
    <Text style={tw`font-bold text-green-800 mb-1`}>{title}</Text>
    <Text style={tw`text-green-600`}>{price}</Text>
  </View>
);

export default ProfileScreen;