import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const TrackYourTrashScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedBuyer, setSelectedBuyer] = useState(null);

  const recycledItems = [
    { name: 'Plastic Bottles', quantity: 50, newProduct: '10 new shirts' },
    { name: 'Paper', quantity: 100, newProduct: '5 notebooks' },
    { name: 'Glass', quantity: 30, newProduct: '15 glass ornaments' },
    { name: 'Aluminum Cans', quantity: 75, newProduct: '1 bicycle frame' },
  ];

  const buyers = [
    { id: 1, name: 'EcoFashion Inc.', verified: true },
    { id: 2, name: 'GreenPaper Co.', verified: true },
    { id: 3, name: 'Sustainable Metals', verified: false },
  ];

  const renderRecycledItem = (item, index) => (
    <View key={index} style={tw`bg-green-100 p-4 rounded-lg mb-4`}>
      <Text style={tw`text-lg font-bold`}>{item.name}</Text>
      <Text style={tw`text-base`}>Quantity: {item.quantity}</Text>
      <Text style={tw`text-base italic`}>Transformed into: {item.newProduct}</Text>
    </View>
  );

  const openBuyerModal = (buyer) => {
    setSelectedBuyer(buyer);
    setModalVisible(true);
  };

  return (
    <ScrollView style={tw`flex-1 bg-gray-100`}>
      <View style={tw`p-6 mt-7`}>
        <Text style={tw`text-3xl font-bold mb-6 text-green-600`}>Track Your Trash</Text>

        <View style={tw`mb-8`}>
          <Text style={tw`text-xl font-semibold mb-4`}>Your Recycling Impact</Text>
          {recycledItems.map(renderRecycledItem)}
        </View>

        <View style={tw`mb-8`}>
          <Text style={tw`text-xl font-semibold mb-4`}>Verified Buyers</Text>
          {buyers.map((buyer) => (
            <TouchableOpacity
              key={buyer.id}
              style={tw`flex-row items-center justify-between bg-white p-4 rounded-lg mb-2`}
              onPress={() => openBuyerModal(buyer)}
            >
              <Text style={tw`text-lg`}>{buyer.name}</Text>
              {buyer.verified && (
                <View style={tw`bg-blue-500 px-2 py-1 rounded`}>
                  <Text style={tw`text-white text-sm`}>Verified</Text>
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={tw`bg-green-500 p-4 rounded-lg`}>
          <Text style={tw`text-white text-center text-lg font-bold`}>Schedule Pickup</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={tw`flex-1 justify-center items-center bg-black bg-opacity-50`}>
          <View style={tw`bg-white p-6 rounded-lg w-4/5`}>
            <Text style={tw`text-xl font-bold mb-4`}>{selectedBuyer?.name}</Text>
            <Text style={tw`mb-4`}>
              This buyer is {selectedBuyer?.verified ? 'verified' : 'not verified'} with privado.id
            </Text>
            <TouchableOpacity
              style={tw`bg-blue-500 p-3 rounded-lg mb-2`}
              onPress={() => {
                // Implement contact functionality
                setModalVisible(false);
              }}
            >
              <Text style={tw`text-white text-center`}>Contact Buyer</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={tw`bg-gray-300 p-3 rounded-lg`}
              onPress={() => setModalVisible(false)}
            >
              <Text style={tw`text-center`}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default TrackYourTrashScreen;