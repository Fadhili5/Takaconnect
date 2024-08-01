import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, Animated, Easing } from 'react-native';
import tw from 'twrnc';
import { FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const tips = [
  {
    id: 1,
    title: 'Green Spaces',
    description: 'Incorporate parks and green areas to enhance the quality of life and environmental health. Green spaces provide numerous benefits, including improved air quality, mental health benefits, and opportunities for physical activity. They also support biodiversity by creating habitats for various species.',
    icon: 'tree',
    image: 'https://plus.unsplash.com/premium_photo-1664117187583-6d1738b01b18?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    title: 'Sustainable Transport',
    description: 'Promote walking, cycling, and public transport to reduce traffic and pollution. Sustainable transport options help in decreasing greenhouse gas emissions, reducing traffic congestion, and improving public health. Investing in infrastructure for biking and walking, as well as expanding public transit options, are key strategies.',
    icon: 'bicycle',
    image: 'https://images.unsplash.com/photo-1561314696-16fe32581852?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFN1c3RhaW5hYmxlJTIwVHJhbnNwb3J0fGVufDB8fDB8fHww',
  },
  {
    id: 3,
    title: 'Efficient Waste Management',
    description: 'Implement effective waste collection and recycling systems. Efficient waste management helps in minimizing environmental impact, conserving resources, and promoting public health. Strategies include waste segregation, regular collection services, recycling programs, and community awareness campaigns.',
    icon: 'recycle',
    image: 'https://plus.unsplash.com/premium_photo-1661963024527-c855211ad31d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    title: 'Smart Infrastructure',
    description: 'Utilize smart technology for efficient city management and services. Smart infrastructure involves using technology to enhance urban services, improve energy efficiency, and manage resources effectively. Examples include smart traffic lights, intelligent waste collection systems, and energy-efficient buildings.',
    icon: 'building',
    image: 'https://images.unsplash.com/photo-1506765515384-028b60a970df',
  },
];

const TipsScreen = () => {
  const [selectedTip, setSelectedTip] = useState(null);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const drawerAnimation = new Animated.Value(-400);
  const router = useRouter();

  const handleTipPress = (tip) => {
    setSelectedTip(tip);
    setDrawerVisible(true);
    Animated.timing(drawerAnimation, {
      toValue: 0,
      duration: 300,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: false,
    }).start();
  };

  const closeDrawer = () => {
    Animated.timing(drawerAnimation, {
      toValue: -400,
      duration: 300,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: false,
    }).start(() => {
      setDrawerVisible(false);
    });
  };

  return (
    <View style={tw`flex-1 bg-white`}>
      {/* Header */}
      <View style={tw`bg-purple-800 p-6 pb-12`}>
        <View style={tw`flex-row items-center mt-10`}>
          <TouchableOpacity onPress={() => router.back()}>
            <FontAwesome5 name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
          <Text style={[tw`text-white text-2xl ml-4`, { fontFamily: 'outfit-bold' }]}>Urban Planning Tips</Text>
        </View>
      </View>

      {/* Tips Cards */}
      <ScrollView contentContainerStyle={tw`p-4`}>
        {tips.map((tip) => (
          <TouchableOpacity key={tip.id} style={styles.card} onPress={() => handleTipPress(tip)}>
            <Image source={{ uri: tip.image }} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <FontAwesome5 name={tip.icon} size={24} color="#6b21a8" />
              <Text style={[tw`text-lg font-bold ml-2`, { fontFamily: 'outfit-bold' }]}>{tip.title}</Text>
              <Text style={[tw`text-sm ml-2`, { fontFamily: 'outfit' }]}>{tip.description.slice(0, 100)}...</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Tip Details Drawer */}
      {drawerVisible && (
        <Animated.View style={[styles.drawer, { bottom: drawerAnimation }]}>
          <View style={styles.drawerContent}>
            <Text style={styles.title}>{selectedTip?.title}</Text>
            <Text style={styles.info}>{selectedTip?.description}</Text>
            <TouchableOpacity style={styles.closeButton} onPress={closeDrawer}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  cardImage: {
    width: '100%',
    height: 150,
  },
  cardContent: {
    padding: 12,
    flexDirection: 'column',
    alignItems: 'center',
  },
  drawer: {
    position: 'absolute',
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
  },
  drawerContent: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: '#FF5252',
    borderRadius: 20,
    padding: 12,
    alignSelf: 'center',
    marginTop: 10,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TipsScreen;
