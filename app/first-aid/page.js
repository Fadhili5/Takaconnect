import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Animated, Linking } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import tw from 'twrnc';

const firstAidTips = [
    { id: 1, title: 'CPR (Cardiopulmonary Resuscitation)', description: 'Perform CPR by pressing hard and fast in the center of the chest and giving rescue breaths if trained to do so.' },
  { id: 2, title: 'First Aid for Cuts and Scrapes', description: 'Clean the wound with water, apply an antibiotic ointment, and cover it with a sterile bandage.' },
  { id: 3, title: 'Burns', description: 'Cool the burn under running water, cover it with a clean cloth, and seek medical help if severe.' },
  { id: 4, title: 'Choking', description: 'Perform abdominal thrusts (Heimlich maneuver) if the person is conscious. If unconscious, perform CPR and call for emergency help.' },
  { id: 5, title: 'Fractures', description: 'Immobilize the injured area with a splint and seek medical help immediately.' },
  { id: 6, title: 'Bleeding', description: 'Apply pressure to the wound with a clean cloth to stop bleeding. Elevate the injured limb if possible.' },
  { id: 7, title: 'Seizures', description: 'Place the person on their side and ensure they are safe from injury. Do not restrain them. Seek medical attention.' },
  { id: 8, title: 'Heat Stroke', description: 'Move the person to a cooler area, provide fluids if they are conscious, and seek medical help.' },
  { id: 9, title: 'Hypothermia', description: 'Warm the person gradually with blankets and warm liquids. Seek medical assistance.' },
];

const FirstAidScreen = () => {
  const [selectedTip, setSelectedTip] = useState(null);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [drawerHeight] = useState(new Animated.Value(0));

  const handleTipPress = (tip) => {
    setSelectedTip(tip);
    setDrawerVisible(true);
    Animated.spring(drawerHeight, {
      toValue: 300,
      useNativeDriver: false,
    }).start();
  };

  const handleCloseDrawer = () => {
    Animated.spring(drawerHeight, {
      toValue: 0,
      useNativeDriver: false,
    }).start(() => setDrawerVisible(false));
  };

  const handleCallAmbulance = () => {
    Linking.openURL('tel:1234567890'); // Replace with actual emergency number
  };

  const handleFindHospital = () => {
    Linking.openURL('https://maps.google.com/?q=hospitals+near+me');
  };

  return (
    <View style={tw`flex-1 bg-white`}>
      <View style={tw`p-4 bg-purple-800`}>
        <Text style={[tw`text-white text-lg font-bold`, { fontFamily: 'outfit-bold' }]}>First Aid Tips</Text>
      </View>

      <ScrollView style={tw`flex-1`}>
        {firstAidTips.map((tip) => (
          <TouchableOpacity
            key={tip.id}
            style={tw`m-4 p-4 bg-white rounded-xl shadow-md`}
            onPress={() => handleTipPress(tip)}
          >
            <View style={tw`flex-row items-center`}>
              <FontAwesome5 name="plus-circle" size={24} color="#6b21a8" />
              <View style={tw`ml-4`}>
                <Text style={[tw`text-lg font-bold`, { fontFamily: 'outfit-bold' }]}>{tip.title}</Text>
                <Text style={[tw`text-gray-600 mt-2`, { fontFamily: 'outfit' }]}>{tip.description}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Bottom Drawer */}
      {drawerVisible && (
        <Animated.View style={[styles.drawer, { height: drawerHeight }]}>
          <View style={tw`p-4 bg-white flex-1`}>
            {selectedTip && (
              <>
                <Text style={[tw`text-xl font-bold`, { fontFamily: 'outfit-bold' }]}>{selectedTip.title}</Text>
                <Text style={[tw`text-gray-600 mt-2`, { fontFamily: 'outfit' }]}>{selectedTip.description}</Text>
                <View style={tw`mt-4`}>
                  <TouchableOpacity
                    style={tw`bg-red-500 p-3 rounded-lg mb-2`}
                    onPress={handleCallAmbulance}
                  >
                    <View style={tw`flex-row items-center justify-center`}>
                      <FontAwesome5 name="ambulance" size={20} color="white" />
                      <Text style={[tw`text-white ml-2 font-bold`, { fontFamily: 'outfit-medium' }]}>Call Ambulance</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={tw`bg-blue-500 p-3 rounded-lg`}
                    onPress={handleFindHospital}
                  >
                    <View style={tw`flex-row items-center justify-center`}>
                      <FontAwesome5 name="hospital" size={20} color="white" />
                      <Text style={[tw`text-white ml-2 font-bold`, { fontFamily: 'outfit-medium' }]}>Find Hospital</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
          <TouchableOpacity style={styles.closeButton} onPress={handleCloseDrawer}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  drawer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: '#e5e5e5',
    borderWidth: 1,
    overflow: 'hidden',
  },
  closeButton: {
    backgroundColor: '#FF5252',
    borderRadius: 20,
    padding: 12,
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FirstAidScreen;
