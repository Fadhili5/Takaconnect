import React, { useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, ScrollView, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import tw from 'tailwind-react-native-classnames';

const { width } = Dimensions.get('window');

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
  <TouchableOpacity style={styles.categoryItem}>
    <Image source={item.img} style={styles.image} />
    <Text style={styles.categoryText}>{item.name}</Text>
  </TouchableOpacity>
);

const FeaturedItem = ({ item }) => (
  <TouchableOpacity style={styles.featuredItem}>
    <Image source={item.img} style={styles.featuredImage} />
    <View style={styles.featuredTextContainer}>
      <Text style={styles.featuredName}>{item.name}</Text>
      <Text style={styles.featuredPrice}>$19.99</Text>
    </View>
  </TouchableOpacity>
);

const EcoStatsCard = () => (
  <View style={styles.ecoStatsCard}>
    <Text style={styles.ecoStatsTitle}>Your Eco Impact</Text>
    <View style={styles.ecoStatsRow}>
      <View style={styles.ecoStatItem}>
        <FontAwesome5 name="tree" size={24} color="#4CAF50" />
        <Text style={styles.ecoStatValue}>50</Text>
        <Text style={styles.ecoStatLabel}>Trees Saved</Text>
      </View>
      <View style={styles.ecoStatItem}>
        <MaterialCommunityIcons name="water" size={24} color="#2196F3" />
        <Text style={styles.ecoStatValue}>1000L</Text>
        <Text style={styles.ecoStatLabel}>Water Saved</Text>
      </View>
      <View style={styles.ecoStatItem}>
        <FontAwesome5 name="leaf" size={24} color="#FFC107" />
        <Text style={styles.ecoStatValue}>200kg</Text>
        <Text style={styles.ecoStatLabel}>CO2 Reduced</Text>
      </View>
    </View>
  </View>
);

export default function ProductScreen() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Recyclable', 'Bio-fertilizers', 'Eco-friendly'];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.innerContainer}>
        
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Welcome back, Fadhili</Text>
            <Text style={styles.location}>Nairobi, Kenya</Text>
          </View>
          <View style={styles.headerIcons}>
            <TouchableOpacity>
              <Ionicons name="notifications-outline" size={28} color="gray" style={styles.notificationIcon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={{ uri: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg' }} style={styles.profileImage} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Search Bar */}
        <View style={styles.searchBar}>
          <Ionicons name="search" size={24} color="gray" />
          <TextInput placeholder="Search eco-friendly products" style={styles.searchInput} />
        </View>

        {/* Eco Stats Card */}
        <EcoStatsCard />

        {/* Category Tabs */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryTabs}>
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.categoryTab,
                activeCategory === category && styles.activeCategoryTab
              ]}
              onPress={() => setActiveCategory(category)}
            >
              <Text style={[
                styles.categoryTabText,
                activeCategory === category && styles.activeCategoryTabText
              ]}>{category}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Featured Products */}
        <Text style={styles.sectionTitle}>Featured Products</Text>
        <FlatList
          data={data}
          renderItem={({ item }) => <FeaturedItem item={item} />}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />

        {/* Product Categories */}
        <Text style={styles.sectionTitle}>Product Categories</Text>
        <FlatList
          data={data}
          renderItem={({ item }) => <CategoryItem item={item} />}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />

        <Text style={styles.sectionTitle}>Recyclable Products</Text>
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
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  location: {
    color: 'gray',
    fontSize: 16,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationIcon: {
    marginRight: 16,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  searchBar: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  searchInput: {
    marginLeft: 12,
    flex: 1,
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop: 24,
  },
  categoryItem: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 15,
    backgroundColor: '#f0f0f0',
    marginBottom: 8,
  },
  categoryText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  ecoStatsCard: {
    backgroundColor: '#E8F5E9',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
  ecoStatsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#2E7D32',
  },
  ecoStatsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ecoStatItem: {
    alignItems: 'center',
  },
  ecoStatValue: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
  ecoStatLabel: {
    fontSize: 14,
    color: '#4CAF50',
  },
  categoryTabs: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  categoryTab: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: '#E0E0E0',
  },
  activeCategoryTab: {
    backgroundColor: '#4CAF50',
  },
  categoryTabText: {
    fontSize: 16,
    fontWeight: '500',
  },
  activeCategoryTabText: {
    color: 'white',
  },
  featuredItem: {
    width: width * 0.6,
    marginRight: 20,
  },
  featuredImage: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginBottom: 10,
  },
  featuredTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  featuredName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  featuredPrice: {
    fontSize: 16,
    color: '#4CAF50',
    fontWeight: '500',
  },
});