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
      name: 'Governor Johnson Sakaja',
      image: require('../../assets/images/haitenangaja_logo.jpeg'), // Replace with actual image path
      score: 3.5,
      role: 'Governor',
      corruptionCases: 5,
      reports: 200,
      businesses: [
        { name: 'Doe Supermarket', address: 'Shop 2, Street 4' },
        { name: 'Doe Real Estate', address: 'Building 5, Avenue 3' }
      ],
      caseDescriptions: [
        'Mismanaging the city’s funds',
        'Irregular procurements',
        'Misuse of office',
        'Ghost workers on the payroll',
        'Alleged bribery allegations'
      ],
      color: 'red'
    },
    {
      id: 2,
      name: 'Ex Governor Okoth Obado',
      image: require('../../assets/images/Obado.jpg'), // Replace with actual image path
      score: 1.2,
      role: 'Ex Governor Migori',
      corruptionCases: 7,
      reports: 50,
      businesses: [
        { name: 'Sunrise Centre', address: 'Suna East' },
        { name: 'Two apartments in Greenspan', address: 'Lower Savanna Dakar Rd Greenspan Mall Embakasi East' }
      ],
      caseDescriptions: [
        'Mismanagement of county funds',
        'Alleged theft of public funds',
        'Suspicious payments to multiple companies(1.98 billion)'
      ],
      color: 'orange'
    },
    {
      id: 3,
      name: 'Mary Syombua Mutunga',
      image: require('../../assets/images/police1.jpg'), // Replace with actual image path
      score: 4.8,
      role: 'OCS Itabua Police Station',
      corruptionCases: 1,
      reports: 30,
      businesses: [
        { name: 'Land MN/I/2458', address: 'Itabua,Embu' },
        { name: 'Johnson Boutique', address: 'Shop 7, Street 9' }
      ],
      caseDescriptions: [
        'Kes100,000 bribe to facilitate release of impounded motor vehicle from Station yard'
      ],
      color: 'yellow'
    },
    {
      id: 4,
      name: 'Joash Rotich Koriese',
      image: require('../../assets/images/CorruptJoash.jpg'), // Replace with actual image path
      score: 3.0,
      role: 'Inspector of Police',
      corruptionCases: 4,
      reports: 10,
      businesses: [
        { name: 'Poshomill', address: 'Bungoma, Building 4' },
        { name: 'Amani shop', address: 'Office 2, Building 6' }
      ],
      caseDescriptions: [
        'Ksh.0.5 million bribe to withdraw charges against a transporter and release detained goods'
      ],
      color: 'red'
    },
    {
      id: 5,
      name: 'Yagnesh Devani',
      image: require('../../assets/images/corrupttycoon.jpg'), // Replace with actual image path
      score: 1.5,
      role: 'Business tycoon',
      corruptionCases: 3,
      reports: 7,
      businesses: [
        { name: 'Triton Petroleum Limited', address: 'Parklands/Highridge Chiromo Fuji Plaza House' }
      ],
      caseDescriptions: [
        'Kes.7.6 billion Triton Oil scandal'
      ],
      color: 'orange'
    },
    {
      id: 6,
      name: 'Douglas Ondieki Getanda',
      image: require('../../assets/images/kplc.jpg'), // Replace with actual image path
      score: 2.0,
      role: 'KPLC OFFICIAL',
      corruptionCases: 2,
      reports: 4,
      businesses: [
        { name: 'Uhondo Butchery', address: 'Taifa Center, Street 5' }
      ],
      caseDescriptions: [
        'Bribe to facilitate installation of transformer in Makadara'
      ],
      color: 'yellow'
    },
    {
      id: 7,
      name: 'Najib Mohammed Balala',
      image: require('../../assets/images/Najib.jpg'), // Replace with actual image path
      score: 2.8,
      role: 'Former minister of Tourism',
      corruptionCases: 3,
      reports: 60,
      businesses: [
        { name: 'Tea business', address: 'Office 5, Building 9' }
      ],
      caseDescriptions: [
        'alleged procurement fraud',
        'theft of public funds',
        'Unlawful acquisition of Public Property'
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