import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal, TextInput, Switch } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import tw from 'tailwind-react-native-classnames';

export default function PublicPetitions() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPetition, setSelectedPetition] = useState(null);
  const [thoughts, setThoughts] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [signature, setSignature] = useState('');

  const petitions = [
    { id: 1, title: 'Petition 1', description: 'Description of Petition 1' },
    { id: 2, title: 'Petition 2', description: 'Description of Petition 2' },
    // Add more petitions as needed
  ];

  const openModal = (petition) => {
    setSelectedPetition(petition);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedPetition(null);
    setThoughts('');
    setIsAnonymous(false);
    setSignature('');
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Form submitted:', { selectedPetition, thoughts, isAnonymous, signature });
    closeModal();
  };

  return (
    <ScrollView style={tw`flex-1 bg-white`}>
      <View style={tw`p-6`}>
        <Text style={[tw`text-black text-2xl mb-4 mt-20`, { fontFamily: 'outfit-bold' }]}>Public Petitions</Text>
        {petitions.map((petition) => (
          <TouchableOpacity
            key={petition.id}
            style={tw`p-4 mb-4 bg-gray-100 rounded-lg`}
            onPress={() => openModal(petition)}
          >
            <Text style={[tw`text-black text-lg`, { fontFamily: 'outfit-bold' }]}>{petition.title}</Text>
            <Text style={[tw`text-gray-600`, { fontFamily: 'outfit' }]}>{petition.description}</Text>
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
            <Text style={[tw`text-black text-xl mb-4`, { fontFamily: 'outfit-bold' }]}>
              {selectedPetition?.title}
            </Text>

            <TextInput
              style={tw`border border-gray-300 p-4 mb-4 rounded-lg`}
              placeholder="Your Thoughts"
              value={thoughts}
              onChangeText={setThoughts}
              multiline
            />

            <View style={tw`flex-row items-center mb-4`}>
              <Switch
                value={isAnonymous}
                onValueChange={setIsAnonymous}
              />
              <Text style={[tw`ml-2`, { fontFamily: 'outfit' }]}>Sign as Anonymous</Text>
            </View>

            <TextInput
              style={tw`border border-gray-300 p-4 mb-4 rounded-lg`}
              placeholder="Digital Signature"
              value={signature}
              onChangeText={setSignature}
            />

            <TouchableOpacity
              style={tw`bg-purple-700 p-4 rounded-lg`}
              onPress={handleSubmit}
            >
              <Text style={[tw`text-white text-center`, { fontFamily: 'outfit-bold' }]}>Submit</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={tw`mt-4 p-4 rounded-lg border border-gray-300`}
              onPress={closeModal}
            >
              <Text style={[tw`text-center`, { fontFamily: 'outfit-bold' }]}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}