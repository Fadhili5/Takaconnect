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
          <Text style={[tw`text-white text-2xl ml-4`, { fontFamily: 'outfit-bold' }]}>HakiAI Services</Text>
        </View>
      </View>

      <View style={[tw`bg-white -mt-7 px-2`, { borderRadius: 30 }]}>
        {/* <View style={tw`mt-4 p-6`}>
          <Text style={[tw`text-black text-lg`, { fontFamily: 'outfit-bold' }]}>Quick Access to Emergency Services</Text>
          <Text style={[tw`text-gray-600 mt-2`, { fontFamily: 'outfit' }]}>
            Select an option below to quickly access emergency contacts and services.
          </Text>
        </View> */}

        <View style={tw`mt-2`}>
        <View style={tw`flex-row flex-wrap justify-between`}>
            <TouchableOpacity style={tw`w-1/2`} onPress={() => navigateTo('')}>
              <Card icon="users" title="Report a corrupt police " description=" " />
              {/* <FontAwesome5 name="users" size={24} color="black" /> */}
            </TouchableOpacity>
            <TouchableOpacity style={tw`w-1/2`} onPress={() => navigateTo('')}>
              <Card icon="users" title="Goverment projects around you " description="exp " />
              {/* <FontAwesome5 name="users" size={24} color="black" /> */}
            </TouchableOpacity>
            <TouchableOpacity style={tw`w-1/2`} onPress={() => navigateTo('')}>
              <Card icon="users" title="Community forum " description="discrover whats cooking  " />
            </TouchableOpacity>
            <TouchableOpacity style={tw`w-1/2`} onPress={() => navigateTo('')}>
              <Card icon="users" title="Recall your governor " description="Join 20,000 members to recall DR.Susan  " />
            </TouchableOpacity>
            <TouchableOpacity style={tw`w-1/2`} onPress={() => navigateTo('')}>
              <Card icon="users" title="How your leaders are performing " description="Join 20,000 members to recall DR.Susan  " />
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

