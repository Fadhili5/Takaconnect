import React, { useEffect } from 'react';
import {
  AntDesign,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { View, Text, Image, ScrollView, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const Post = ({ post }) => (
  <View style={styles.postContainer}>
    <View style={styles.userInfo}>
      <Image source={{ uri: post.user.profilePicture }} style={styles.profilePicture} />
      <Text style={styles.userName}>{post.user.name}</Text>
    </View>
    <Text style={styles.postContent}>{post.content}</Text>
    <View style={styles.postActions}>
      <View style={styles.likesContainer}>
        <FontAwesome name="heart" size={20} color="red" />
        <Text style={styles.likeCount}>{post.likes}</Text>
      </View>
      <View style={styles.commentsContainer}>
        <FontAwesome name="comment" size={20} color="gray" />
        <Text style={styles.commentCount}>{post.comments.length}</Text>
      </View>
    </View>
    <View style={styles.commentsSection}>
      {post.comments.map((comment) => (
        <View key={comment.id} style={styles.commentContainer}>
          <Text style={styles.commentUser}>{comment.user}:</Text>
          <Text style={styles.commentText}>{comment.comment}</Text>
        </View>
      ))}
    </View>
  </View>
);

const CommunityScreen = () => {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    'outfit': require('../../assets/fonts/Outfit-Regular.ttf'),
    'outfit-bold': require('../../assets/fonts/Outfit-Bold.ttf'),
    'outfit-medium': require('../../assets/fonts/Outfit-Medium.ttf'),
  });

  useEffect(() => {
    const prepare = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        // Load any resources or data that we need prior to rendering the app
      } catch (e) {
        console.warn(e);
      } finally {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
      }
    };

    prepare();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const posts = [
    {
      id: 1,
      user: {
        name: 'John Doe',
        profilePicture: 'https://via.placeholder.com/150'
      },
      content: 'Just moved to a new apartment in Kilimani! Loving the new neighborhood.',
      likes: 23,
      comments: [
        { id: 1, user: 'Alice', comment: 'Welcome to the neighborhood!' },
        { id: 2, user: 'Bob', comment: 'Hope you enjoy living there!' }
      ]
    },
    {
      id: 2,
      user: {
        name: 'Jane Smith',
        profilePicture: 'https://via.placeholder.com/150'
      },
      content: 'Quick Mart has great deals on groceries this week. Check it out!',
      likes: 15,
      comments: [
        { id: 1, user: 'Charlie', comment: 'Thanks for the tip!' },
        { id: 2, user: 'Daisy', comment: 'I love their fresh produce.' }
      ]
    }
    // Add more posts as needed
  ];

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#6B21A8" />
      <View style={tw`flex-row items-center py-8 justify-center bg-purple-800 mt-8 mb-4`}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-circle-outline" size={24} color="white" />
        </TouchableOpacity>
        <Text style={[tw`text-white text-2xl ml-4`, { fontFamily: 'outfit-bold' }]}>Community Feed</Text>
      </View>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      <View style={styles.healthSection}>
        <Text style={styles.healthHeader}>Other Discussions</Text>
        <TouchableOpacity style={styles.healthButton}>
          <Text style={styles.healthButtonText}>Health Discussions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.healthButton}>
          <Text style={styles.healthButtonText}>Garbage Discussions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.healthButton}>
          <Text style={styles.healthButtonText}>Green Cover</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7'
  },
  postContainer: {
    backgroundColor: 'white',
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10
  },
  userName: {
    fontFamily: 'outfit-bold',
    fontSize: 16
  },
  postContent: {
    fontFamily: 'outfit',
    fontSize: 14,
    color: '#333',
    marginBottom: 10
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  likesContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  likeCount: {
    marginLeft: 5,
    fontFamily: 'outfit',
    fontSize: 14,
    color: '#333'
  },
  commentsContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  commentCount: {
    marginLeft: 5,
    fontFamily: 'outfit',
    fontSize: 14,
    color: '#333'
  },
  commentsSection: {
    marginTop: 10
  },
  commentContainer: {
    flexDirection: 'row',
    marginBottom: 6
  },
  commentUser: {
    fontFamily: 'outfit-bold',
    fontSize: 14,
    color: '#333'
  },
  commentText: {
    fontFamily: 'outfit',
    fontSize: 14,
    color: '#333'
  },
  healthSection: {
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1
  },
  healthHeader: {
    fontFamily: 'outfit-bold',
    fontSize: 16,
    marginBottom: 12,
    color: '#333'
  },
  healthButton: {
    backgroundColor: '#6B21A8',
    padding: 10,
    borderRadius: 8,
    marginBottom: 8
  },
  healthButtonText: {
    fontFamily: 'outfit-bold',
    color: 'white',
    textAlign: 'center',
    fontSize: 14
  }
});

export default CommunityScreen;
