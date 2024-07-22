import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import tw from "tailwind-react-native-classnames";
import { useRouter } from 'expo-router'

export default function HomeScreen() {
  const router = useRouter();
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
          </View>
        </View>
      </View>

      <View style={[tw`bg-white -mt-7 px-2`, { borderRadius: 30 }]}>
        <View style={tw`p-6 rounded-2xl border border-purple-700 mt-4`}>
          <View style={tw`flex-row items-center`}>
            <FontAwesome5 name="school" size={48} color="#6b21a8" />
            <View style={tw`ml-4`}>
              <Text style={[tw`text-black text-lg mt-1`, { fontFamily: 'outfit-bold' }]}>Build my Journey</Text>
              <Text style={[tw`text-gray-600`, { fontFamily: 'outfit' }]}>Complete today's plan to meet your daily goals</Text>
              <TouchableOpacity
                // style={tw`bg-purple-700 px-4 py-2 mt-2 rounded-lg`}
                onPress={() => router.push('plans/journey1/page')}
              >
                <Text style={[tw`text-purple-700 mt-2`, { fontFamily: 'outfit-medium' }]}>Explore Now &gt;&gt;</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={tw`mt-2`}>
          <View style={tw`flex-row flex-wrap justify-between`}>
            <View style={tw`w-1/2 `}>
              <Card icon="gamepad" title="Play Games" description="Play games and relax in your free time" />
            </View>
            <View style={tw`w-1/2 `}>
              <Card icon="dumbbell" title="Do Exercise" description="Breathing exercises and much more" />
            </View>
            <View style={tw`w-1/2`}>
              <Card icon="journal-whills" title="Daily Journal" description="Keep track of your daily writing" />
            </View>
            <TouchableOpacity style={tw`w-1/2`}
              onPress={() => router.push('blogs/page')}

            >
              <Card icon="book-open" title="Read Blogs" description="Articles, Posts & much more" />
            </TouchableOpacity>
            <View style={tw`w-1/2`}>
              <Card icon="user-md" title="Attend Therapy" description="Speak with one of our amazing clinicians" />
            </View>
            <View style={tw`w-1/2`}>
              <Card icon="book-reader" title="Bibliotherapy" description="Take a walk through into our module" />
            </View>
            <View style={tw`w-1/2`}>
              <Card icon="user-md" title="Attend Therapy" description="Speak with one of our amazing clinicians" />
            </View>
            <View style={tw`w-1/2`}>
              <Card icon="book-reader" title="Bibliotherapy" description="Take a walk through into our module" />
            </View>
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
        <Text style={[tw`text-purple-600 font-bold mt-2 text-center`, { fontFamily: 'outfit-bold' }]}>{title}</Text>
        <Text style={[tw`text-gray-600 text-center mt-1`, { fontFamily: 'outfit' }]}>{description}</Text>
        <FontAwesome5 name={icon} size={32} color="#6b21a8" />
      </View>
    </View>
  );
}
