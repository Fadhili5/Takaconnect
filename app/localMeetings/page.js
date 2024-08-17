import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal, Button } from 'react-native';
import tw from 'tailwind-react-native-classnames';

export default function LocalMeetings() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMeeting, setSelectedMeeting] = useState(null);

  const meetings = [
    {
      id: 1,
      title: 'Governor Wamathu Recalling',
      description: 'Discussion on the recall of Governor Wamathu.',
      location: 'City Hall, Room 101',
      date: '2023-10-15',
    },
    {
      id: 2,
      title: 'Government Frauds Discussion',
      description: 'Meeting focused on discussing various government frauds.',
      location: 'Community Center, Hall A',
      date: '2023-10-20',
    },
    {
      id: 3,
      title: 'Protest Meeting',
      description: 'Organizing a protest against corruption.',
      location: 'Main Square',
      date: '2023-10-25',
    },
  ];

  const openModal = (meeting) => {
    setSelectedMeeting(meeting);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedMeeting(null);
  };

  return (
    <ScrollView style={tw`flex-1 bg-white`}>
      <View style={tw`p-6`}>
        <Text style={[tw`text-black text-2xl mb-4 mt-4`, { fontFamily: 'outfit-bold' }]}>Local Meetings</Text>
        {meetings.map((meeting) => (
          <TouchableOpacity
            key={meeting.id}
            style={tw`p-4 mb-4 bg-gray-100 rounded-lg`}
            onPress={() => openModal(meeting)}
          >
            <Text style={[tw`text-black text-lg`, { fontFamily: 'outfit-bold' }]}>{meeting.title}</Text>
            <Text style={[tw`text-gray-600`, { fontFamily: 'outfit' }]}>{meeting.description}</Text>
            <Text style={[tw`text-gray-600`, { fontFamily: 'outfit' }]}>Location: {meeting.location}</Text>
            <Text style={[tw`text-gray-600`, { fontFamily: 'outfit' }]}>Date: {meeting.date}</Text>
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
            {selectedMeeting && (
              <>
                <Text style={[tw`text-black text-xl mb-4`, { fontFamily: 'outfit-bold' }]}>
                  {selectedMeeting.title}
                </Text>
                <Text style={[tw`text-gray-600 mb-2`, { fontFamily: 'outfit' }]}>
                  Description: {selectedMeeting.description}
                </Text>
                <Text style={[tw`text-gray-600 mb-2`, { fontFamily: 'outfit' }]}>
                  Location: {selectedMeeting.location}
                </Text>
                <Text style={[tw`text-gray-600 mb-2`, { fontFamily: 'outfit' }]}>
                  Date: {selectedMeeting.date}
                </Text>
                <TouchableOpacity
                  style={tw`bg-purple-700 p-4 rounded-lg mt-4`}
                  onPress={() => alert('Joining the meeting...')}
                >
                  <Text style={[tw`text-white text-center`, { fontFamily: 'outfit-bold' }]}>Join Now</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={tw`bg-gray-700 p-4 rounded-lg mt-4`}
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