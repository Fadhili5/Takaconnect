import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import tw from 'tailwind-react-native-classnames';

export default function ReportFraud() {
  const [modalVisible, setModalVisible] = useState(false);

  const handleSubmit = () => {
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <View style={tw`flex-1 p-6 bg-white`}>
      <Text style={[tw`text-2xl text-center mb-4 mt-8`, { fontFamily: 'outfit-bold' }]}>Report Fraud</Text>

      <View style={tw`mb-4`}>
        <Text style={[tw`text-lg mb-2`, { fontFamily: 'outfit-bold' }]}>Description</Text>
        <TextInput
          style={styles.textArea}
          multiline
          numberOfLines={4}
          placeholder="Describe the fraud..."
        />
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={[tw`text-white text-center`, { fontFamily: 'outfit-bold' }]}>Submit Report</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.callButton} onPress={() => setModalVisible(true)}>
        <FontAwesome name="phone" size={32} color="#6b21a8" />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={tw`flex-1 justify-center items-center bg-black bg-opacity-50`}>
          <View style={tw`bg-white p-6 rounded-lg`}>
            <Text style={[tw`text-xl mb-4`, { fontFamily: 'outfit-bold' }]}>Report via Call</Text>
            <Text style={[tw`text-lg mb-4`, { fontFamily: 'outfit' }]}>Call us at: +2546666666</Text>
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={[tw`text-white text-center`, { fontFamily: 'outfit-bold' }]}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  textArea: {
    borderWidth: 1,
    borderColor: '#6b21a8',
    borderRadius: 10,
    padding: 10,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#6b21a8',
    padding: 15,
    borderRadius: 10,
    marginBottom: 40,
  },
  callButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#6b21a8',
  },
  closeButton: {
    backgroundColor: '#6b21a8',
    padding: 15,
    borderRadius: 10,
  },
});