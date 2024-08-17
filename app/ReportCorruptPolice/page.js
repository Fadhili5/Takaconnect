import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Switch, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import tw from "tailwind-react-native-classnames";

export default function ReportCorruptPoliceScreen() {
  const [image, setImage] = useState(null);
  const [rank, setRank] = useState('');
  const [location, setLocation] = useState('');
  const [comments, setComments] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [severity, setSeverity] = useState('Low');
  const [witnesses, setWitnesses] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log({ image, rank, location, comments, date, severity, witnesses, isAnonymous });
  };

  return (
    <ScrollView style={tw`flex-1 p-6 bg-white`}>
      <Text style={[tw`text-2xl text-center mb-4 mt-8`, { fontFamily: 'outfit-bold' }]}>Report a Corrupt Police Officer</Text>
      
      <TouchableOpacity onPress={pickImage} style={styles.imagePicker}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <FontAwesome5 name="camera" size={32} color="#6b21a8" />
        )}
      </TouchableOpacity>
      <Text style={[tw`text-center mb-4`, { fontFamily: 'outfit' }]}>Upload a picture of the police officer</Text>

      <View style={tw`mb-4`}>
        <Text style={[tw`text-lg mb-2`, { fontFamily: 'outfit-bold' }]}>Police Rank</Text>
        <TouchableOpacity style={styles.dropdown} onPress={() => setRank('Sergeant')}>
          <Text style={tw`text-gray-600`}>{rank || 'Select Rank'}</Text>
        </TouchableOpacity>
      </View>

      <View style={tw`mb-4`}>
        <Text style={[tw`text-lg mb-2`, { fontFamily: 'outfit-bold' }]}>Location</Text>
        <TouchableOpacity style={styles.dropdown} onPress={() => setLocation('Downtown')}>
          <Text style={tw`text-gray-600`}>{location || 'Select Location'}</Text>
        </TouchableOpacity>
      </View>

      <View style={tw`mb-4`}>
        <Text style={[tw`text-lg mb-2`, { fontFamily: 'outfit-bold' }]}>Date and Time</Text>
        <TouchableOpacity style={styles.dropdown} onPress={() => setShowDatePicker(true)}>
          <Text style={tw`text-gray-600`}>{date.toLocaleString()}</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="datetime"
            display="default"
            onChange={handleDateChange}
          />
        )}
      </View>

      <View style={tw`mb-4`}>
        <Text style={[tw`text-lg mb-2`, { fontFamily: 'outfit-bold' }]}>Severity Level</Text>
        <TouchableOpacity style={styles.dropdown} onPress={() => setSeverity('High')}>
          <Text style={tw`text-gray-600`}>{severity || 'Select Severity'}</Text>
        </TouchableOpacity>
      </View>

      <View style={tw`mb-4`}>
        <Text style={[tw`text-lg mb-2`, { fontFamily: 'outfit-bold' }]}>Witnesses</Text>
        <TextInput
          style={styles.textArea}
          multiline
          numberOfLines={2}
          onChangeText={setWitnesses}
          value={witnesses}
          placeholder="Enter witness names and contact information..."
        />
      </View>

      <View style={tw`mb-4 flex-row items-center`}>
        <Text style={[tw`text-lg`, { fontFamily: 'outfit-bold' }]}>Report Anonymously</Text>
        <Switch
          value={isAnonymous}
          onValueChange={setIsAnonymous}
          style={tw`ml-2`}
        />
      </View>

      <View style={tw`mb-4`}>
        <Text style={[tw`text-lg mb-2`, { fontFamily: 'outfit-bold' }]}>Additional Comments</Text>
        <TextInput
          style={styles.textArea}
          multiline
          numberOfLines={4}
          onChangeText={setComments}
          value={comments}
          placeholder="Write your comments here..."
        />
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={[tw`text-white text-center`, { fontFamily: 'outfit-bold' }]}>Submit Report</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
  dropdown: {
    borderWidth: 1,
    borderColor: '#6b21a8',
    borderRadius: 10,
    padding: 10,
  },
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
});