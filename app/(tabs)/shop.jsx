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

const CategoryItem = ({ item }) => (
  <View style={styles.categoryItem}>
    <Image source={item.img} style={styles.image} />
    <Text style={styles.categoryText}>{item.name}</Text>
  </View>
);

export default function ProductScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.innerContainer}>
        
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hi, Fadhili</Text>
            <Text style={styles.location}>Nairobi, Kenya</Text>
          </View>
          <View style={styles.headerIcons}>
            <Ionicons name="notifications-outline" size={24} color="gray" style={styles.notificationIcon} />
            <Image source={{ uri: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg' }} style={styles.profileImage} />
          </View>
        </View>

        {/* Search Bar */}
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="gray" />
          <TextInput placeholder="Search" style={styles.searchInput} />
        </View>

        {/* Product Categories */}
        <Text style={styles.sectionTitle}>Product</Text>
        <FlatList
          data={data}
          renderItem={({ item }) => <CategoryItem item={item} />}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />

        <Text style={styles.sectionTitle}>Recyclable products</Text>
        <FlatList
          data={recyclableData}
          renderItem={({ item }) => <CategoryItem item={item} />}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />

        <Text style={styles.sectionTitle}>Bio-fertilizers</Text>
        <FlatList
          data={bioFertilizersData}
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
  container: {
    backgroundColor: '#f8f8f8',
    flex: 1,
  },
  innerContainer: {
    padding: 16,
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  location: {
    color: 'gray',
    fontSize: 14,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationIcon: {
    marginRight: 16,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchBar: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  searchInput: {
    marginLeft: 8,
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  categoryItem: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 16,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    marginBottom: 8,
  },
  categoryText: {
    textAlign: 'center',
    fontSize: 14,
  },
});