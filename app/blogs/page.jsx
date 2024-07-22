import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, StatusBar, Image } from 'react-native';
import axios from 'axios';
import tw from 'tailwind-react-native-classnames';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
// import { useNavigation } from '@react-navigation/native';


const categories = ['Anxiety', 'Depression', 'Stress', 'Well-being'];

const BlogScreen = ({ navigation }) => {
    // const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    'outfit': require('../../assets/fonts/Outfit-Regular.ttf'),
    'outfit-bold': require('../../assets/fonts/Outfit-Bold.ttf'),
    'outfit-medium': require('../../assets/fonts/Outfit-Medium.ttf'),
  });
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      // Mocking image URLs for demonstration purposes
      const blogsWithImages = response.data.map(blog => ({
        ...blog,
        imageUrl: 'https://images.pexels.com/photos/4672710/pexels-photo-4672710.jpeg' // Replace with actual image URLs
      }));
      setBlogs(blogsWithImages);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      setLoading(false);
    }
  };

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity style={tw`bg-white p-3 rounded-lg mr-3 shadow`}>
      <Text style={tw`text-lg font-semibold`}>{item}</Text>
    </TouchableOpacity>
  );

  const renderBlogItem = ({ item }) => (
    <View style={tw`bg-white p-4 rounded-lg mb-4 shadow mt-3`}>
      <Image source={{ uri: item.imageUrl }} style={tw`w-full h-40 rounded-lg mb-4`} />
      <Text style={[tw`text-xl font-bold mb-2`, { fontFamily: 'outfit-bold' }]}>{item.title}</Text>
      <Text style={[tw`text-base`, { fontFamily: 'outfit' }]}>{item.body}</Text>
    </View>
  );

  if (!fontsLoaded) {
    return (
      <View style={tw`flex-1 justify-center items-center`}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (loading) {
    return (
      <View style={tw`flex-1 justify-center items-center`}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={tw`flex-1 bg-gray-100`}>
      <StatusBar barStyle="dark-content" backgroundColor="#6B21A8" />
      <View style={tw`flex-row items-center py-8 justify-center  bg-purple-800 mt-8`}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-circle-outline" size={24} color="white" />
        </TouchableOpacity>
        <Text style={[tw`text-white text-2xl ml-4`, { fontFamily: 'outfit-bold' }]}>Read Blogs</Text>
      </View>
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={tw`mt-4 mb-4`}
      />
      <FlatList
        data={blogs}
        renderItem={renderBlogItem}
        keyExtractor={(item) => item.id.toString()}
        style={tw`p-4`}
      />
    </View>
  );
};

export default BlogScreen;
