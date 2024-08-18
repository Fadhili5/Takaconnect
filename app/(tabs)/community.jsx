import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Post = ({ post, onUpvote }) => (
  <View style={styles.postContainer}>
    <View style={styles.userInfo}>
      <Image source={{ uri: post.user.profilePicture }} style={styles.profilePicture} />
      <Text style={styles.userName}>{post.user.name}</Text>
    </View>
    <Text style={styles.postContent}>{post.content}</Text>
    <View style={styles.postActions}>
      <TouchableOpacity style={styles.likesContainer} onPress={() => onUpvote(post.id)}>
        <FontAwesome name="heart" size={20} color="red" />
        <Text style={styles.likeCount}>{post.likes}</Text>
      </TouchableOpacity>
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
  const [posts, setPosts] = useState([
    {
      id: 5,
      user: {
        name: 'Dr.Samson Wabumuna',
        profilePicture: 'https://randomuser.me/api/portraits/men/69.jpg',
      },
      content: 'Reports of political harassment in our community are increasing. Let’s stand together against this injustice.',
      likes: 10,
      comments: [
        { id: 1, user: 'Caleb Otieno', comment: 'This needs to stop!' },
        { id: 2, user: 'Onyango Victor', comment: 'We need to take action.' },
      ],
    },
    {
      id: 1,
      user: {
        name: 'Joseph Maina',
        profilePicture: 'https://randomuser.me/api/portraits/men/75.jpg',
      },
      content: 'Our roads remain underdeveloped despite numerous promises. It’s time to hold our leaders accountable.',
      likes: 15,
      comments: [
        { id: 1, user: 'Henry Okoth', comment: 'Absolutely, we need better infrastructure.' },
        { id: 2, user: 'Metronila Johnson', comment: 'When will this change?' },
      ],
    },
    {
      id: 2,
      user: {
        name: 'Esther Wangithi',
        profilePicture: 'https://randomuser.me/api/portraits/women/42.jpg',
      },
      content: 'Corruption in our local government is rampant. We must demand transparency and accountability.',
      likes: 20,
      comments: [
        { id: 1, user: 'Michael Joseph', comment: 'This is unacceptable!' },
        { id: 2, user: 'Sarah Wainaina', comment: 'We need to fight corruption together.' },
      ],
    },
    {
      id: 3,
      user: {
        name: 'Elvis Wanaina',
        profilePicture: 'https://randomuser.me/api/portraits/men/78.jpg',
      },
      content: 'Our community lacks basic healthcare facilities. It’s time to demand better services.',
      likes: 8,
      comments: [
        { id: 1, user: 'Mbru Davis', comment: 'This is a serious issue.' },
        { id: 2, user: 'Joshua Smith', comment: 'We need to raise our voices.' },
      ],
    },
    {
      id: 4,
      user: {
        name: 'Brenda Salama',
        profilePicture: 'https://randomuser.me/api/portraits/women/50.jpg',
      },
      content: 'Education standards in our area are declining. Let’s push for better schools and resources.',
      likes: 25,
      comments: [
        { id: 1, user: 'Chore Albert', comment: 'Our children deserve better.' },
        { id: 2, user: 'Eunice Aulo', comment: 'We need to address this immediately.' },
      ],
    },
  ]);

  const [newPostContent, setNewPostContent] = useState('');

  const handleUpvote = (postId) => {
    setPosts(posts.map(post => post.id === postId ? { ...post, likes: post.likes + 1 } : post));
  };

  const handleAddPost = () => {
    if (newPostContent.trim()) {
      const newPost = {
        id: posts.length + 1,
        user: {
          name: 'New User',
          profilePicture: 'https://randomuser.me/api/portraits/men/1.jpg',
        },
        content: newPostContent,
        likes: 0,
        comments: [],
      };
      setPosts([newPost, ...posts]);
      setNewPostContent('');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Community Feed</Text>
      <View style={styles.newPostContainer}>
        <TextInput
          style={styles.newPostInput}
          placeholder="What's on your mind?"
          value={newPostContent}
          onChangeText={setNewPostContent}
        />
        <TouchableOpacity style={styles.newPostButton} onPress={handleAddPost}>
          <Text style={styles.newPostButtonText}>Post</Text>
        </TouchableOpacity>
      </View>
      {posts.map((post) => (
        <Post key={post.id} post={post} onUpvote={handleUpvote} />
      ))}
      <View style={styles.governmentSection}>
        <Text style={styles.governmentHeader}>Government Discussions</Text>
        <TouchableOpacity style={styles.governmentButton}>
          <Text style={styles.governmentButtonText}>Corruption in Nairobi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.governmentButton}>
          <Text style={styles.governmentButtonText}>Sign the Recall Governor Petition</Text>
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
    marginTop: 40,
  },
  newPostContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  newPostInput: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
  },
  newPostButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  newPostButtonText: {
    color: '#fff',
    fontSize: 16,
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
  },
  postContent: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
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
  },
  commentsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentCount: {
    marginLeft: 5,
    fontSize: 16,
    color: '#333',
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
  },
  commentText: {
    color: '#666',
  },
  governmentSection: {
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
  governmentHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  governmentButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 5,
  },
  governmentButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default CommunityScreen;