import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';

const StatItem = ({ icon, value, label, color }) => (
  <View style={tw`items-center mb-4`}>
    <FontAwesome5 name={icon} size={24} color={color} style={tw`mb-2`} />
    <Text style={tw`font-bold text-xl text-white`}>{value}</Text>
    <Text style={tw`text-white text-xs mt-1`}>{label}</Text>
  </View>
);

const EcoStatsCard = () => {
  return (
    <View style={tw`bg-green-500 rounded-xl p-6 shadow-lg mb-4`}>
      <View style={tw`flex-row justify-between items-center`}>
        <StatItem icon="coins" value="5669" label="POINTS" color="#FFD700" />
        <StatItem icon="cloud" value="500g" label="SAVED CO2" color="#FFFFFF" />
        <StatItem icon="recycle" value="24" label="RECYCLED" color="#4CAF50" />
      </View>
    </View>
  );
};

const redeemOptions = [
  { label: 'Pay Bills', placeholder: 'Enter your bill number...', icon: 'payment', color: '#FF6347' },
  { label: 'Electricity Bills', placeholder: 'Enter your electricity bill number...', icon: 'bolt', color: '#FFA500' },
  { label: 'Insurance', placeholder: 'Enter your insurance number...', icon: 'shield', color: '#4682B4' },
  { label: 'Donate to Charity', placeholder: 'Enter charity details...', icon: 'heart', color: '#FF69B4' },
  { label: 'Invest in Crypto', placeholder: 'Enter your crypto address...', icon: 'attach-money', color: '#32CD32' },
  { label: 'Book a ride', placeholder: 'Enter Uber till number...', icon: 'directions-car', color: '#8A2BE2' },
  { label: 'Water Bills', placeholder: 'Enter your water bill number...', icon: 'water', color: '#00BFFF' },
  { label: 'Internet Bills', placeholder: 'Enter your internet bill number...', icon: 'wifi', color: '#1E90FF' },
  { label: 'Phone Bills', placeholder: 'Enter your phone bill number...', icon: 'phone', color: '#20B2AA' },
  { label: 'Rent', placeholder: 'Enter your rent details...', icon: 'home', color: '#FF4500' },
  { label: 'Mortgage', placeholder: 'Enter your mortgage details...', icon: 'account-balance', color: '#8B4513' },
  { label: 'Credit Card Payments', placeholder: 'Enter your credit card number...', icon: 'credit-card', color: '#FF1493' },
  { label: 'Loan Payments', placeholder: 'Enter your loan account number...', icon: 'account-balance-wallet', color: '#2E8B57' },
  { label: 'Gas Bills', placeholder: 'Enter your gas bill number...', icon: 'local-gas-station', color: '#FFD700' },
];

const TrackYourTrashScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState({ label: '', placeholder: '' });
  const [input, setInput] = useState('');

  const handleRedeemPress = (label, placeholder) => {
    setSelectedOption({ label, placeholder });
    setModalVisible(true);
  };

  const screenWidth = Dimensions.get('window').width;
  const cardWidth = (screenWidth - 32) / 2 - 8; // Subtracting padding and margin

  return (
    <ScrollView style={[tw`bg-gray-100`, { flex: 1 }]}>
      <View style={tw`p-4 mt-12`}>
        
        {/* Header */}
        <View style={tw`flex flex-row justify-between items-center mb-2`}>
          <View>
            <Text style={tw`font-semibold text-lg`}>Hi, Fadhili</Text>
            <Text style={tw`text-gray-500 text-sm`}>Nairobi, Kenya</Text>
          </View>
          <TouchableOpacity style={tw`flex flex-row items-center`} onPress={() => navigation.openDrawer()}>
            <Ionicons name="notifications-outline" size={24} color="gray" style={tw`mr-4`} />
            <Image source={{ uri: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg' }} style={tw`w-10 h-10 rounded-full`} />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={tw`bg-white flex flex-row items-center rounded-full px-4 py-2 mb-4`}>
          <Ionicons name="search" size={20} color="gray" />
          <TextInput placeholder="Search" style={tw`ml-2 flex-1`} />
        </View>

        {/* Statistics Card */}
        <EcoStatsCard />

        {/* Redeem Points Options */}
        <View style={tw`flex-row flex-wrap justify-between`}>
          {redeemOptions.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                tw`bg-white p-4 rounded-lg shadow mb-3`,
                { width: cardWidth }
              ]}
              onPress={() => handleRedeemPress(option.label, option.placeholder)}
            >
              <View style={tw`flex items-center`}>
                <MaterialIcons name={option.icon} size={24} color={option.color} style={tw`mb-2`} />
                <Text style={tw`text-sm text-gray-800 text-center`}>{option.label}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Modal */}
        <Modal
          isVisible={modalVisible}
          onBackdropPress={() => setModalVisible(false)}
          style={styles.modalOverlay}
        >
          <View style={styles.modalContainer}>
            <Text style={tw`text-xl font-bold mb-4`}>{selectedOption.label}</Text>
            <TextInput
              style={tw`bg-gray-200 p-4 rounded-lg mb-4`}
              placeholder={selectedOption.placeholder}
              value={input}
              onChangeText={setInput}
            />
            <TouchableOpacity
              style={tw`bg-blue-500 p-4 rounded-lg`}
              onPress={() => {
                console.log(`${selectedOption.label}: ${input}`);
                setModalVisible(false);
              }}
            >
              <Text style={tw`text-white text-center font-bold`}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={tw`mt-4 p-4 rounded-lg bg-red-500`}
              onPress={() => setModalVisible(false)}
            >
              <Text style={tw`text-white text-center font-bold`}>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    width: '100%',
  },
});

export default TrackYourTrashScreen;