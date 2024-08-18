import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Modal, FlatList, Alert } from 'react-native';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import tw from 'tailwind-react-native-classnames';

export default function ReportLostID() {
  const [lostIDs, setLostIDs] = useState([
    { id: '1', uri: require('../../assets/images/OIP.jpeg') },
    { id: '2', uri: require('../../assets/images/OIP.jpeg') },
    { id: '3', uri: require('../../assets/images/OIP.jpeg') },
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const [paymentModalVisible, setPaymentModalVisible] = useState(false);
  const [selectedID, setSelectedID] = useState(null);
  const [newImage, setNewImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setNewImage(result.uri);
    }
  };

  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setNewImage(result.uri);
    }
  };

  const handleAddLostID = () => {
    if (newImage) {
      setLostIDs([...lostIDs, { id: lostIDs.length.toString(), uri: { uri: newImage } }]);
      setNewImage(null);
      setModalVisible(false);
    }
  };

  const handleDeleteLostID = (id) => {
    setLostIDs(lostIDs.filter(item => item.id !== id));
  };

  const handleImagePress = (id) => {
    setSelectedID(id);
    setPaymentModalVisible(true);
  };

  const handlePayment = () => {
    Alert.alert('Payment Successful', 'You have paid to get your ID or passport back.');
    setPaymentModalVisible(false);
  };

  return (
    <View style={tw`flex-1 p-6 bg-white`}>
      <Text style={[tw`text-2xl text-center mb-4 mt-8`, { fontFamily: 'outfit-bold' }]}>Lost IDs</Text>

      <FlatList
        data={lostIDs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.lostIDContainer}>
            <TouchableOpacity onPress={() => handleImagePress(item.id)}>
              <Image source={item.uri} style={styles.lostIDImage} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteLostID(item.id)}>
              <FontAwesome name="trash" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={<Text style={tw`text-center`}>No lost IDs reported yet.</Text>}
        contentContainerStyle={tw`mb-4`}
      />

      <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
        <FontAwesome5 name="plus" size={24} color="#fff" />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={tw`flex-1 justify-center items-center bg-black bg-opacity-50`}>
          <View style={tw`bg-white p-6 rounded-lg`}>
            <Text style={[tw`text-xl mb-4`, { fontFamily: 'outfit-bold' }]}>Add New Lost ID</Text>
            <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
              {newImage ? (
                <Image source={{ uri: newImage }} style={styles.image} />
              ) : (
                <FontAwesome5 name="camera" size={32} color="#6b21a8" />
              )}
            </TouchableOpacity>
            <Text style={[tw`text-center mb-4`, { fontFamily: 'outfit' }]}>Upload or take a picture of the lost ID</Text>
            <TouchableOpacity style={styles.takePhotoButton} onPress={takePhoto}>
              <Text style={[tw`text-white text-center`, { fontFamily: 'outfit-bold' }]}>Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.submitButton} onPress={handleAddLostID}>
              <Text style={[tw`text-white text-center`, { fontFamily: 'outfit-bold' }]}>Add Lost ID</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={[tw`text-white text-center`, { fontFamily: 'outfit-bold' }]}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={paymentModalVisible}
        onRequestClose={() => setPaymentModalVisible(false)}
      >
        <View style={tw`flex-1 justify-center items-center bg-black bg-opacity-50`}>
          <View style={tw`bg-white p-6 rounded-lg`}>
            <Text style={[tw`text-xl mb-4`, { fontFamily: 'outfit-bold' }]}>Pay to Get Your ID</Text>
            <Text style={[tw`text-center mb-4`, { fontFamily: 'outfit' }]}>Pay $100 to get your ID or passport back.</Text>
            <TouchableOpacity style={styles.submitButton} onPress={handlePayment}>
              <Text style={[tw`text-white text-center`, { fontFamily: 'outfit-bold' }]}>Pay $100</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeButton} onPress={() => setPaymentModalVisible(false)}>
              <Text style={[tw`text-white text-center`, { fontFamily: 'outfit-bold' }]}>Close</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.reportButton} onPress={() => Alert.alert('Report', 'Report to the nearest post to collect your ID or passport.')}>
              <Text style={[tw`text-white text-center`, { fontFamily: 'outfit-bold' }]}>Report to Nearest Post</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  lostIDContainer: {
    position: 'relative',
    marginBottom: 10,
  },
  lostIDImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  deleteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#ff0000',
    padding: 10,
    borderRadius: 50,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#6b21a8',
    padding: 15,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePicker: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    borderWidth: 1,
    borderColor: '#6b21a8',
    borderRadius: 10,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  takePhotoButton: {
    backgroundColor: '#6b21a8',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: '#6b21a8',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  closeButton: {
    backgroundColor: '#6b21a8',
    padding: 15,
    borderRadius: 10,
  },
  reportButton: {
    backgroundColor: '#ff0000',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
});