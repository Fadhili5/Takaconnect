import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import tw from "tailwind-react-native-classnames";
import { useRouter } from 'expo-router';

export default function EmergencyServicesScreen() {
  const router = useRouter();
  
  const navigateTo = (path) => {
    router.push(path);
  };

  return (
    <ScrollView style={tw`flex-1`}>
      <View style={tw`bg-purple-800 p-6 pb-12`}>
        <View style={tw`flex-row items-center mt-10`}>
          <TouchableOpacity onPress={() => router.back()}>
            <FontAwesome5 name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
          <Text style={[tw`text-white text-2xl ml-4`, { fontFamily: 'outfit-bold' }]}>Emergency Services</Text>
        </View>
      </View>

      <View style={[tw`bg-white -mt-7 px-2`, { borderRadius: 30 }]}>
        <View style={tw`mt-4 p-6`}>
          <Text style={[tw`text-black text-lg`, { fontFamily: 'outfit-bold' }]}>Quick Access to Emergency Services</Text>
          <Text style={[tw`text-gray-600 mt-2`, { fontFamily: 'outfit' }]}>
            Select an option below to quickly access emergency contacts and services.
          </Text>
        </View>

        <View style={tw`mt-2`}>
          <View style={tw`flex-row flex-wrap justify-between`}>
            <TouchableOpacity style={tw`w-1/2 p-2`} onPress={() => navigateTo('ambulance/page')}>
              <EmergencyCard icon="ambulance" title="Call Ambulance" description="Get medical help fast" />
            </TouchableOpacity>
            <TouchableOpacity style={tw`w-1/2 p-2`} onPress={() => navigateTo('firefighter/page')}>
              <EmergencyCard icon="fire-extinguisher" title="Call Firefighter" description="Report a fire emergency" />
            </TouchableOpacity>
            <TouchableOpacity style={tw`w-1/2 p-2`} onPress={() => navigateTo('Garbage/page')}>
              <EmergencyCard icon="trash" title="Garbage Collector" description="Schedule garbage collection" />
            </TouchableOpacity>
            <TouchableOpacity style={tw`w-1/2 p-2`} onPress={() => navigateTo('blogs/page')}>
              <EmergencyCard icon="book-open" title="Read Blogs" description="Articles, Posts & much more" />
            </TouchableOpacity>
            <TouchableOpacity style={tw`w-1/2 p-2`} onPress={() => navigateTo('flood-alert/page')}>
              <EmergencyCard icon="water" title="Flood Alert" description="Get flood warnings" />
            </TouchableOpacity>
            <TouchableOpacity style={tw`w-1/2 p-2`} onPress={() => navigateTo('report-incident/page')}>
              <EmergencyCard icon="exclamation-triangle" title="Report Incident" description="Report any other incident" />
            </TouchableOpacity>
            <TouchableOpacity style={tw`w-1/2 p-2`} onPress={() => navigateTo('first-aid/page')}>
              <EmergencyCard icon="medkit" title="First Aid Tips" description="Learn basic first aid" />
            </TouchableOpacity>
            <TouchableOpacity style={tw`w-1/2 p-2`} onPress={() => navigateTo('Hospitals/page')}>
              <EmergencyCard icon="hospital" title="Nearby Hospitals" description="Find hospitals near you" />
            </TouchableOpacity>
            <TouchableOpacity style={tw`w-1/2 p-2`} onPress={() => navigateTo('emergencyContacts/page')}>
              <EmergencyCard icon="phone" title="Emergency Contacts" description="List of emergency contacts" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

function EmergencyCard({ icon, title, description }) {
  return (
    <View style={tw`w-full bg-white p-4 rounded-xl shadow-md items-center`}>
      <FontAwesome5 name={icon} size={32} color="#6b21a8" />
      <Text style={[tw`text-purple-600 font-bold mt-2 text-center`, { fontFamily: 'outfit-bold' }]}>{title}</Text>
      <Text style={[tw`text-gray-600 text-center mt-1`, { fontFamily: 'outfit' }]}>{description}</Text>
    </View>
  );
}
