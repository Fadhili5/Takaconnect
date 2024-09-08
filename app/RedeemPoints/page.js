import React from 'react';
import { View, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const TrackYourTrashScreen = () => {
  return (
    <View style={tw`flex-1 justify-center items-center bg-gray-100`}>
      <Text style={tw`text-lg text-black`}>Track Your Trash</Text>
    </View>
  );
};

export default TrackYourTrashScreen;