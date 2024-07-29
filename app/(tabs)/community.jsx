import React from 'react';
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
import AppLoading from 'expo-app-loading';

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

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const posts = [
    {
      id: 1,
      user: {
        name: 'Alex Njuguna',
        profilePicture: 'https://randomuser.me/api/portraits/men/10.jpg',
      },
      content: 'We successfully organized a community clean-up last weekend! The streets look amazing now.',
      likes: 25,
      comments: [
        { id: 1, user: 'Mary Kimani', comment: 'Great job, Alex! The neighborhood looks much better.' },
        { id: 2, user: 'John Doe', comment: 'Let’s do this more often.' },
      ],
    },
    {
      id: 2,
      user: {
        name: 'Sarah Wambui',
        profilePicture: 'https://randomuser.me/api/portraits/women/12.jpg',
      },
      content: 'The traffic congestion on Market Street is getting worse every day. Any suggestions for improvement?',
      likes: 10,
      comments: [
        { id: 1, user: 'Peter Kamau', comment: 'We need better public transportation options.' },
        { id: 2, user: 'Grace Njeri', comment: 'Maybe we can organize a carpool system.' },
      ],
    },
    {
      id: 3,
      user: {
        name: 'James Karanja',
        profilePicture: 'https://randomuser.me/api/portraits/men/15.jpg',
      },
      content: 'Proud to announce that our community garden project is finally up and running!',
      likes: 40,
      comments: [
        { id: 1, user: 'Lucy Wanjiku', comment: 'Fantastic news! Can’t wait to visit.' },
        { id: 2, user: 'Samuel Mwangi', comment: 'Great initiative, James!' },
      ],
    },
    {
      id: 4,
      user: {
        name: 'Nancy Otieno',
        profilePicture: 'https://randomuser.me/api/portraits/women/16.jpg',
      },
      content: 'The new park has become a hub for families and kids. Such a positive change for our area!',
      likes: 30,
      comments: [
        { id: 1, user: 'David Onyango', comment: 'The park is fantastic! My kids love it.' },
        { id: 2, user: 'Jane Wafula', comment: 'So happy to see this development.' },
      ],
    },
    {
      id: 5,
      user: {
        name: 'Emma Mwangi',
        profilePicture: 'https://randomuser.me/api/portraits/women/20.jpg',
      },
      content: 'There has been an increase in noise pollution in our area lately. Any thoughts on how to tackle this issue?',
      likes: 5,
      comments: [
        { id: 1, user: 'Peter Njoroge', comment: 'We should petition the local government to enforce noise regulations.' },
        { id: 2, user: 'Anne Kariuki', comment: 'Maybe we can create awareness campaigns about the impact of noise pollution.' },
      ],
    },
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
    backgroundColor: '#f0f0f0',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  },
  postContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    fontFamily: 'outfit-bold',
  },
  postContent: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
    fontFamily: 'outfit',
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  likesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeCount: {
    marginLeft: 5,
    fontSize: 16,
    color: '#333',
    fontFamily: 'outfit-medium',
  },
  commentsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentCount: {
    marginLeft: 5,
    fontSize: 16,
    color: '#333',
    fontFamily: 'outfit-medium',
  },
  commentsSection: {
    marginTop: 10,
  },
  commentContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  commentUser: {
    fontWeight: 'bold',
    marginRight: 5,
    color: '#333',
    fontFamily: 'outfit-bold',
  },
  commentText: {
    color: '#666',
    fontFamily: 'outfit',
  },
  healthSection: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  healthHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    fontFamily: 'outfit-bold',
  },
  healthButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 5,
  },
  healthButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'outfit',
  },
});

export default CommunityScreen;
