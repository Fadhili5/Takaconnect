import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import tw from "tailwind-react-native-classnames";
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();
  
  const navigateTo = (path) => {
    router.push(path);
  };

  return (
    <ScrollView style={tw`flex-1`}>
      <View style={tw`bg-purple-800 p-6 pb-12`}>
        <View style={tw`flex-row items-center mt-10`}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/images/jeph.jpg')}
              style={tw`w-16 h-16 rounded-full mr-4`}
            />
          </TouchableOpacity>
          <View>
            <Text style={[tw`text-white text-lg`, { fontFamily: 'outfit-bold' }]}>Welcome!</Text>
            <Text style={[tw`text-white text-xl`, { fontFamily: 'outfit' }]}>Caleb Jephunneh</Text>
            <Text style={[tw`text-white text-xl`, { fontFamily: 'outfit' }]}>Kilimani Prop Tech</Text>
          </View>
        </View>
      </View>

      <View style={[tw`bg-white -mt-7 px-2`, { borderRadius: 30 }]}>
        <View style={tw`p-6 rounded-2xl border border-purple-700 mt-4`}>
          <View style={tw`flex-row items-center`}>
            <FontAwesome5 name="exclamation-circle" size={48} color="#6b21a8" />
            <View style={tw`ml-4`}>
              <Text style={[tw`text-black text-lg mt-1`, { fontFamily: 'outfit-bold' }]}>Emergency Services</Text>
              <Text style={[tw`text-gray-600`, { fontFamily: 'outfit' }]}>Quickly access emergency contacts and services</Text>
              <TouchableOpacity onPress={() => navigateTo('emergencyContacts/page')}>
                <Text style={[tw`text-purple-700 mt-2`, { fontFamily: 'outfit-medium' }]}>Access Now &gt;&gt;</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={tw`mt-2`}>
          <View style={tw`flex-row flex-wrap justify-between`}>
            <TouchableOpacity style={tw`w-1/2`} onPress={() => navigateTo('')}>
              <Card icon="ambulance" title="My Neighbourhood " description="Development trends" />
            </TouchableOpacity>
            <TouchableOpacity style={tw`w-1/2`} onPress={() => navigateTo('ambulance/page')}>
              <Card icon="ambulance" title="Call Ambulance" description="Get medical help fast" />
            </TouchableOpacity>
            <TouchableOpacity style={tw`w-1/2`} onPress={() => navigateTo('firefighter/page')}>
              <Card icon="fire-extinguisher" title="Call Firefighter" description="Report a fire emergency" />
            </TouchableOpacity>
            <TouchableOpacity style={tw`w-1/2`} onPress={() => navigateTo('Garbage/page')}>
              <Card icon="trash" title="Garbage Collector" description="Schedule garbage collection" />
            </TouchableOpacity>
            <TouchableOpacity style={tw`w-1/2`} onPress={() => navigateTo('blogs/page')}>
              <Card icon="book-open" title="Read Blogs" description="Articles, Posts & much more" />
            </TouchableOpacity>
            <TouchableOpacity style={tw`w-1/2`} onPress={() => navigateTo('flood-alert/page')}>
              <Card icon="water" title="Flood Alert" description="Get flood warnings" />
            </TouchableOpacity>
            <TouchableOpacity style={tw`w-1/2`} onPress={() => navigateTo('report-incident/page')}>
              <Card icon="exclamation-triangle" title="Report Incident" description="Report any other incident" />
            </TouchableOpacity>
            <TouchableOpacity style={tw`w-1/2`} onPress={() => navigateTo('first-aid/page')}>
              <Card icon="medkit" title="First Aid Tips" description="Learn basic first aid" />
            </TouchableOpacity>
            <TouchableOpacity style={tw`w-1/2`} onPress={() => navigateTo('Hospitals/page')}>
              <Card icon="hospital" title="Nearby Hospitals" description="Find hospitals near you" />
            </TouchableOpacity>
            <TouchableOpacity style={tw`w-1/2`} onPress={() => navigateTo('emergencyContacts/page')}>
              <Card icon="phone" title="Emergency Contacts" description="List of emergency contacts" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

function Card({ icon, title, description }) {
  return (
    <View style={tw`w-40 bg-white p-4 m-2 rounded-xl shadow-md`}>
      <View style={tw`items-center`}>
        <FontAwesome5 name={icon} size={32} color="#6b21a8" />
        <Text style={[tw`text-purple-600 font-bold mt-2 text-center`, { fontFamily: 'outfit-bold' }]}>{title}</Text>
        <Text style={[tw`text-gray-600 text-center mt-1`, { fontFamily: 'outfit' }]}>{description}</Text>
      </View>
    </View>
  );
}
