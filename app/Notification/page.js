import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import tw from 'tailwind-react-native-classnames';

const notifications = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/3174350/pexels-photo-3174350.jpeg',
    title: 'Order Placed',
    description: 'Order ID - #8587293\nDelivering by 16th March',
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/2827735/pexels-photo-2827735.jpeg',
    title: '20% discount',
    description: 'Nearest scrap shop\nShop Now',
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/5192885/pexels-photo-5192885.jpeg',
    title: 'Scrap Driver',
    description: 'Driver arrived\nLocation',
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/128421/pexels-photo-128421.jpeg',
    title: '40% discount on antique',
    description: 'Nearest scrap shop\nShop Now',
  },
];

export default function App() {
  return (
    <View style={[tw`bg-gray-100`, { flex: 1 }]}>
      <View style={tw`p-4 mt-12`}>
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

    </View>
  );
}