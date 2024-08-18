import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import tw from 'tailwind-react-native-classnames';

export default function LeaderPerformance() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLeader, setSelectedLeader] = useState(null);

  const leaders = [
    {
      id: 1,
      name: 'Governor John Doe',
      image: require('../../assets/images/jeph.jpg'), // Replace with actual image path
      score: 3.5,
      role: 'Governor',
      corruptionCases: 5,
      reports: 200,
      businesses: [
        { name: 'Doe Supermarket', address: 'Shop 2, Street 4' },
        { name: 'Doe Real Estate', address: 'Building 5, Avenue 3' }
      ],
      caseDescriptions: [
        'Embezzlement of public funds',
        'Bribery and corruption',
        'Misuse of office',
        'Illegal land acquisition',
        'Tax evasion'
      ],
      color: 'red'
    },
    {
      id: 2,
      name: 'Police Chief Jane Smith',
      image: require('../../assets/images/jeph.jpg'), // Replace with actual image path
      score: 4.2,
      role: 'Police Chief',
      corruptionCases: 2,
      reports: 50,
      businesses: [
        { name: 'Smith Security', address: 'Shop 10, Street 8' },
        { name: 'Smith Investigations', address: 'Office 3, Building 2' }
      ],
      caseDescriptions: [
        'Accepting bribes',
        'Abuse of power'
      ],
      color: 'orange'
    },
    {
      id: 3,
      name: 'Mayor Alice Johnson',
      image: require('../../assets/images/jeph.jpg'), // Replace with actual image path
      score: 4.8,
      role: 'Mayor',
      corruptionCases: 1,
      reports: 30,
      businesses: [
        { name: 'Johnson Restaurant', address: 'Shop 5, Street 6' },
        { name: 'Johnson Boutique', address: 'Shop 7, Street 9' }
      ],
      caseDescriptions: [
        'Conflict of interest in city contracts'
      ],
      color: 'yellow'
    },
    {
      id: 4,
      name: 'Senator Bob Brown',
      image: require('../../assets/images/jeph.jpg'), // Replace with actual image path
      score: 3.0,
      role: 'Senator',
      corruptionCases: 4,
      reports: 150,
      businesses: [
        { name: 'Brown Law Firm', address: 'Office 1, Building 4' },
        { name: 'Brown Consulting', address: 'Office 2, Building 6' }
      ],
      caseDescriptions: [
        'Insider trading',
        'Fraudulent activities',
        'Misappropriation of campaign funds',
        'Nepotism'
      ],
      color: 'red'
    },
    {
      id: 5,
      name: 'Councilman Charlie Davis',
      image: require('../../assets/images/jeph.jpg'), // Replace with actual image path
      score: 4.5,
      role: 'Councilman',
      corruptionCases: 3,
      reports: 70,
      businesses: [
        { name: 'Davis Construction', address: 'Shop 3, Street 7' },
        { name: 'Davis Logistics', address: 'Warehouse 2, Industrial Area' }
      ],
      caseDescriptions: [
        'Kickbacks from contractors',
        'Favoritism in public projects',
        'Illegal campaign contributions'
      ],
      color: 'orange'
    },
    {
      id: 6,
      name: 'Sheriff Emily White',
      image: require('../../assets/images/jeph.jpg'), // Replace with actual image path
      score: 4.0,
      role: 'Sheriff',
      corruptionCases: 2,
      reports: 40,
      businesses: [
        { name: 'White Ranch', address: 'Farm 1, Countryside' },
        { name: 'White Security Academy', address: 'Training Center, Street 5' }
      ],
      caseDescriptions: [
        'Excessive use of force',
        'Covering up misconduct'
      ],
      color: 'yellow'
    },
    {
      id: 7,
      name: 'Councilwoman Diana Green',
      image: require('../../assets/images/jeph.jpg'), // Replace with actual image path
      score: 3.8,
      role: 'Councilwoman',
      corruptionCases: 3,
      reports: 60,
      businesses: [
        { name: 'Green Tech', address: 'Office 4, Building 8' },
        { name: 'Green Marketing', address: 'Office 5, Building 9' }
      ],
      caseDescriptions: [
        'Insider trading',
        'Misuse of public resources',
        'Conflict of interest'
      ],
      color: 'orange'
    },
    {
      id: 8,
      name: 'Commissioner Frank Black',
      image: require('../../assets/images/jeph.jpg'), // Replace with actual image path
      score: 3.2,
      role: 'Commissioner',
      corruptionCases: 4,
      reports: 90,
      businesses: [
        { name: 'Black Gyms', address: 'Gym 1, Street 10' },
        { name: 'Black Supplements', address: 'Shop 8, Street 11' }
      ],
      caseDescriptions: [
        'Fraudulent contracts',
        'Bribery',
        'Embezzlement',
        'Tax evasion'
      ],
      color: 'red'
    },
    {
      id: 9,
      name: 'Judge Helen Blue',
      image: require('../../assets/images/jeph.jpg'), // Replace with actual image path
      score: 4.6,
      role: 'Judge',
      corruptionCases: 1,
      reports: 20,
      businesses: [
        { name: 'Blue Law Firm', address: 'Office 6, Building 12' },
        { name: 'Blue Publishing', address: 'Shop 9, Street 13' }
      ],
      caseDescriptions: [
        'Bias in court rulings'
      ],
      color: 'yellow'
    },
    {
      id: 10,
      name: 'Chief Inspector Gary White',
      image: require('../../assets/images/jeph.jpg'), // Replace with actual image path
      score: 3.9,
      role: 'Chief Inspector',
      corruptionCases: 3,
      reports: 80,
      businesses: [
        { name: 'White Detective Agency', address: 'Office 7, Building 14' },
        { name: 'White Security Store', address: 'Shop 10, Street 15' }
      ],
      caseDescriptions: [
        'Accepting bribes',
        'Tampering with evidence',
        'Abuse of power'
      ],
      color: 'orange'
    }
];

  const openModal = (leader) => {
    setSelectedLeader(leader);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedLeader(null);
  };

  return (
    <ScrollView style={tw`flex-1 bg-white`}>
      <View style={tw`p-6`}>
        <Text style={[tw`text-black text-2xl mb-4 mt-4`, { fontFamily: 'outfit-bold' }]}>Leader Performance</Text>
        {leaders.map((leader) => (
          <TouchableOpacity
            key={leader.id}
            style={tw`p-4 mb-4 bg-gray-100 rounded-lg flex-row items-center`}
            onPress={() => openModal(leader)}
          >
            <Image source={leader.image} style={tw`w-16 h-16 rounded-full mr-4`} />
            <View>
              <Text style={[tw`text-black text-lg`, { fontFamily: 'outfit-bold' }]}>{leader.name}</Text>
              <Text style={[tw`text-gray-600`, { fontFamily: 'outfit' }]}>{leader.role}</Text>
              <Text style={[tw`text-gray-600`, { fontFamily: 'outfit' }]}>Score: {leader.score}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={tw`flex-1 justify-end bg-black bg-opacity-50`}>
          <View style={tw`bg-white p-6 rounded-t-lg`}>
            {selectedLeader && (
              <>
                <Text style={[tw`text-black text-xl mb-4`, { fontFamily: 'outfit-bold' }]}>
                  {selectedLeader.name}
                </Text>
                <Text style={[tw`text-gray-600 mb-2`, { fontFamily: 'outfit' }]}>
                  Role: {selectedLeader.role}
                </Text>
                <Text style={[tw`text-gray-600 mb-2`, { fontFamily: 'outfit' }]}>
                  Corruption Cases: {selectedLeader.corruptionCases}
                </Text>
                <Text style={[tw`text-gray-600 mb-2`, { fontFamily: 'outfit' }]}>
                  Reports: {selectedLeader.reports}
                </Text>
                <Text style={[tw`text-gray-600 mb-2`, { fontFamily: 'outfit' }]}>
                  Businesses: {selectedLeader.businesses.join(', ')}
                </Text>
                <View style={tw`flex-row items-center mb-4`}>
                  <FontAwesome5 name="exclamation-circle" size={24} color={selectedLeader.color} />
                  <Text style={[tw`ml-2`, { fontFamily: 'outfit' }]}>
                    Severity: {selectedLeader.color === 'red' ? 'Too Bad' : 'Moderate'}
                  </Text>
                </View>
                <Text style={[tw`text-black text-lg mb-2`, { fontFamily: 'outfit-bold' }]}>
                  Case Descriptions:
                </Text>
                {selectedLeader.caseDescriptions.map((description, index) => (
                  <Text key={index} style={[tw`text-gray-600 mb-1`, { fontFamily: 'outfit' }]}>
                    - {description}
                  </Text>
                ))}
                <TouchableOpacity
                  style={tw`bg-purple-700 p-4 rounded-lg mt-4`}
                //   onPress={closeModal}
                >
                  <Text style={[tw`text-white text-center`, { fontFamily: 'outfit-bold' }]}>Recall?</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={tw`bg-purple-700 p-4 rounded-lg mt-4`}
                  onPress={closeModal}
                >
                  <Text style={[tw`text-white text-center`, { fontFamily: 'outfit-bold' }]}>Close</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}