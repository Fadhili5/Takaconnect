import React from 'react';
import { View, Text, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import tw from 'tailwind-react-native-classnames';

export default function App() {
  // Add a state to store the image URI
  const [imageUri, setImageUri] = React.useState('https://via.placeholder.com/150');
  const [instruction, setInstruction] = React.useState('');

  // Function to handle image upload
  const handleImageUpload = () => {
    // Add your image upload logic here
    console.log('Image upload button pressed');
  };

  // Function to handle detect location button press
  const handleDetectLocation = () => {
    // Add your location detection logic here
    console.log('Detect location button pressed');
  };

  // Function to handle confirm button press
  const handleConfirm = () => {
    // Add your confirm logic here
    console.log('Confirm button pressed');
  };

  return (
    <View style={[tw`bg-gray-100`, { flex: 1 }]}>
      <ScrollView showsVerticalScrollIndicator={false} style={tw`p-4`}>
        
        {/* Header */}
        <View style={tw`flex flex-row items-center mb-4`}>
          <TouchableOpacity>
            <Ionicons name="arrow-back-outline" size={24} color="black" />
          </TouchableOpacity>
          <Text style={tw`text-xl font-bold ml-4`}>Upload Dumpsite</Text>
        </View>
        
        {/* Subtitle */}
        <Text style={tw`text-gray-700 mb-4`}>
          Upload multiple pictures to let our team spot the dumpsite easily.
        </Text>
        
        {/* Image Upload Section */}
        <View style={tw`flex flex-row mb-4`}>
          <View style={tw`flex-1 mr-2`}>
            <Image
              source={{ uri: imageUri }}
              style={tw`w-full h-40 rounded-lg`}
              onError={() => setImageUri('https://via.placeholder.com/150')} // Add a default image in case of error
            />
          </View>
          <View style={tw`flex-1 ml-2 border rounded-lg border-green-600 flex justify-center items-center`}>
            <TouchableOpacity onPress={handleImageUpload}>
              <Ionicons name="add-outline" size={40} color="green" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Detect Location Button */}
        <TouchableOpacity style={tw`flex flex-row items-center justify-center border border-green-600 rounded-lg py-3 mb-4`} onPress={handleDetectLocation}>
          <MaterialIcons name="location-on" size={24} color="green" />
          <Text style={tw`ml-2 text-green-600`}>Detect dumpsite location</Text>
        </TouchableOpacity>
        
        {/* Instruction Input */}
        <View style={tw`bg-white rounded-lg p-4 mb-4`}>
          <TextInput
            placeholder="Instruction"
            multiline
            numberOfLines={4}
            style={tw`text-gray-700`}
            value={instruction}
            onChangeText={(text) => setInstruction(text)}
          />
        </View>
      </ScrollView>
      
      {/* Confirm Button */}
      <View style={tw`p-4`}>
        <TouchableOpacity style={tw`bg-green-600 rounded-full py-3 flex justify-center items-center`} onPress={handleConfirm}>
          <Text style={tw`text-white text-lg font-semibold`}>Confirm</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <View style={tw`flex flex-row justify-around items-center bg-white py-2`}>
        <TouchableOpacity>
          <Ionicons name="ios-home-outline" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="ios-location-outline" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity style={tw`bg-green-600 p-4 rounded-full`}>
          <Ionicons name="ios-add" size={32} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="ios-cart-outline" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="ios-person-outline" size={24} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );
}