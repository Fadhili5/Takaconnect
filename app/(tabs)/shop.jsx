import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import tw from 'tailwind-react-native-classnames';

const data = [
  { id: '1', name: 'Ceramic', img: require('../../assets/images/ceramic.jpg') },
  { id: '2', name: 'Bags', img: require('../../assets/images/plastic.jpg') },
  { id: '3', name: 'Watches', img: require('../../assets/images/watch.jpg') },
  { id: '4', name: 'Chairs', img: require('../../assets/images/chairs.jpg') },
];

const recyclableData = [
  { id: '1', name: 'Pots', img: require('../../assets/images/pots.jpg') },
  { id: '2', name: 'Furniture', img: require('../../assets/images/furniture.jpg') },
  { id: '3', name: 'Electric', img: require('../../assets/images/electric.jpg') },
  { id: '4', name: 'Books', img: require('../../assets/images/books.jpg') },
];

const bioFertilizersData = [
  { id: '1', name: 'Organic', img: require('../../assets/images/organic.jpg') },
  { id: '2', name: 'Fertilizer', img: require('../../assets/images/fertilizer.jpg') },
  { id: '3', name: 'Incense', img: require('../../assets/images/incense.jpg') },
  { id: '4', name: 'Manure', img: require('../../assets/images/manure.jpg') },
];

const bioFertilizersData1 = [
  { id: '1', name: 'Organic', img: require('../../assets/images/organic.jpg') },
  { id: '2', name: 'Fertilizer', img: require('../../assets/images/fertilizer.jpg') },
  { id: '3', name: 'Incense', img: require('../../assets/images/incense.jpg') },
  { id: '4', name: 'Manure', img: require('../../assets/images/manure.jpg') },
];

const CategoryItem = ({ item }) => (
  <View style={tw`flex-col items-center`}>
    <Image source={item.img} style={styles.image} />
    <Text style={tw`mt-2 text-center`}>{item.name}</Text>
  </View>
);

export default function ProductScreen() {
  return (
    <ScrollView style={[tw`bg-gray-100`, { flex: 1 }]}>
      <View style={tw`p-4 mt-7`}>
        
        {/* Header */}
        <View style={tw`flex flex-row justify-between items-center mb-2`}>
          <View>
            <Text style={tw`font-semibold text-lg`}>Hi, Fadhili</Text>
            <Text style={tw`text-gray-500 text-sm`}>Nairobi, Kenya</Text>
          </View>
          <View style={tw`flex flex-row items-center`}>
            <Ionicons name="notifications-outline" size={24} color="gray" style={tw`mr-4`} />
            <Image source={{ uri: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg' }} style={tw`w-10 h-10 rounded-full`} />
          </View>
        </View>

        {/* Search Bar */}
        <View style={tw`bg-white flex flex-row items-center rounded-full px-4 py-2 mb-4`}>
          <Ionicons name="search" size={20} color="gray" />
          <TextInput placeholder="Search" style={tw`ml-2 flex-1`} />
        </View>

        {/* Product Categories */}
        <Text style={tw`font-bold text-lg mb-4`}>Product</Text>
        <FlatList
          data={data}
          renderItem={({ item }) => <CategoryItem item={item} />}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />

        <Text style={tw`font-bold text-lg mt-6 mb-4`}>Recyclable products</Text>
        <FlatList
          data={recyclableData}
          renderItem={({ item }) => <CategoryItem item={item} />}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />

        <Text style={tw`font-bold text-lg mt-6 mb-4`}>Bio-fertilizers</Text>
        <FlatList
          data={bioFertilizersData}
          renderItem={({ item }) => <CategoryItem item={item} />}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <Text style={tw`font-bold text-lg mt-6 mb-4`}>Bio-fertilizers</Text>
        <FlatList
          data={bioFertilizersData1}
          renderItem={({ item }) => <CategoryItem item={item} />}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

     
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: '#f0f0f0', // Placeholder background color
    marginRight: 15,
  },
  navigationContainer: {
    position: 'absolute',
    bottom: 20,
    left: '50%',
    marginLeft: -40, // Center the button
    alignItems: 'center',
  },
  navigateButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 50,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
});