import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, Modal, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';

const wasteData = [
  { id: '1', name: 'Plastic Bottles', image: require('../../assets/images/plasticc.jpg'), price: '$5/kg' },
  { id: '2', name: 'Glass Bottles', image: require('../../assets/images/glasses.jpg'), price: '$3/kg' },
  { id: '3', name: 'Papers', image: require('../../assets/images/papers.jpg'), price: '$2/kg' },
  { id: '4', name: 'Metal Scraps', image: require('../../assets/images/metallic.jpg'), price: '$7/kg' },
];

const BuyWasteScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [bidAmount, setBidAmount] = useState('');

  const handleBidPress = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const handlePayment = async () => {
    const requestData = {
      first_name: 'Joe',
      last_name: 'Doe',
      email: 'joe@doe.com',
      amount: parseFloat(bidAmount),  // Ensure bidAmount is a valid number
      phone_number: '254708419386',   // Hardcoded phone number
      api_ref: 'test',
    };

    try {
      const response = await fetch('http://localhost:3000/api/pay', { // Updated endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();
      console.log('Payment Response:', data);

      if (data.success) {
        Alert.alert('Success', 'Payment successful!');
      } else {
        Alert.alert('Error', 'Payment failed, please try again.');
      }
    } catch (error) {
      console.error('Payment Request Error:', error);
      Alert.alert('Error', 'Payment request failed.');
    }
  };

  const renderWasteItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.name}</Text>
        <Text style={styles.cardPrice}>{item.price}</Text>
        <TouchableOpacity style={styles.bidButton} onPress={() => handleBidPress(item)}>
          <Text style={styles.bidButtonText}>Place Bid</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={[tw`bg-gray-100`, { flex: 1 }]}>
      <View style={tw`p-4 mt-12`}>
        <Text style={tw`text-2xl font-bold text-center mb-8`}>Available Wastes</Text>
        <FlatList
          data={wasteData}
          keyExtractor={(item) => item.id}
          renderItem={renderWasteItem}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
        />
      </View>

      {/* Bid Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Bid for {selectedItem.name}</Text>
            <Image source={selectedItem.image} style={styles.modalImage} />
            <TextInput
              style={styles.input}
              placeholder="Enter your bid amount"
              value={bidAmount}
              onChangeText={setBidAmount}
              keyboardType="numeric"
            />
            <TouchableOpacity
              style={styles.submitButton}
              onPress={() => {
                handlePayment();
                setModalVisible(false);
              }}
            >
              <Text style={styles.submitButtonText}>Submit Bid</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 20,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  cardImage: {
    width: '100%',
    height: 150,
  },
  cardContent: {
    padding: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardPrice: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
  },
  bidButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
  },
  bidButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalImage: {
    width: '100%',
    height: 150,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    padding: 10,
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    width: '100%',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeButton: {
    marginTop: 10,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#FF6347',
    fontSize: 16,
  },
});

export default BuyWasteScreen;
