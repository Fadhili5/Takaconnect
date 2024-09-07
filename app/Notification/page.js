import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import tw from 'tailwind-react-native-classnames';

const notifications = [
  {
    id: 1,
    image: 'https://via.placeholder.com/60',
    title: 'Order Placed',
    description: 'Order ID - #8587293\nDelivering by 16th March',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/60',
    title: '20% discount',
    description: 'Nearest scrap shop\nShop Now',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/60',
    title: 'Scrap Driver',
    description: 'Driver arrived\nLocation',
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/60',
    title: '40% discount on antique',
    description: 'Nearest scrap shop\nShop Now',
  },
];

export default function App() {
  return (
    <View style={[tw`bg-gray-100`, { flex: 1 }]}>
      <View style={tw`p-4`}>
        {/* Header */}
        <View style={tw`flex flex-row items-center mb-4`}>
          <TouchableOpacity>
            <Ionicons name="arrow-back-outline" size={24} color="black" />
          </TouchableOpacity>
          <Text style={tw`text-xl font-bold ml-4`}>Notification</Text>
        </View>

        {/* Notifications List */}
        <ScrollView showsVerticalScrollIndicator={false}>
          {notifications.map((notification) => (
            <View
              key={notification.id}
              style={tw`bg-white rounded-lg mb-4 p-4 flex flex-row items-center`}
            >
              <Image
                source={{ uri: notification.image }}
                style={tw`w-16 h-16 rounded-lg`}
              />
              <View style={tw`ml-4`}>
                <Text style={tw`font-semibold`}>{notification.title}</Text>
                <Text style={tw`text-gray-600`}>{notification.description}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Bottom Navigation */}
      <View style={tw`flex flex-row justify-around items-center bg-white py-2`}>
        <TouchableOpacity>
          <Ionicons name="ios-home-outline" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="ios-calendar-outline" size={24} color="gray" />
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