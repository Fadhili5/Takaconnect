import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { FontAwesome5 } from '@expo/vector-icons';
import tw from 'twrnc';
import { useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const developments = [
  {
    "image": "https://cdn.standardmedia.co.ke/images/wysiwyg/images/F6Oq67K4RPkQehgH8AMNGuQ05PWiREv2runieriJ.jpg",
    "title": "Kilimani BLOCK 48",
    "description": "Rental Appartment"
  },
  {
    "image": "https://pbs.twimg.com/media/FVy1NJwaIAAVAKx.jpg",
    "title": "Quick Mart",
    "description": "SuperMarket."
  },
  {
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNDJfl9jMYmd42TvuMA0OOHbqDkao691q1NA&s",
    "title": "Kilimani Food Market",
    "description": "Food Market."
  }
];

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    // Hide the splash screen once your app is ready to be displayed
    SplashScreen.hideAsync();
  }, []);

  const navigateTo = (path) => {
    router.push(path);
  };

  return (
    <ScrollView>
      <View style={tw`bg-purple-800 p-6 pb-12`}>
        <View style={tw`flex-row items-center mt-10`}>
          <TouchableOpacity onPress={() => navigateTo('/community')}>
            <FontAwesome5 name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
          <Text style={[tw`text-white text-2xl ml-4`, styles.title]}>New Developments</Text>
        </View>
      </View>
      {developments.map((development, index) => (
        <Card key={index}>
          <Card.Title>{development.title}</Card.Title>
          <Card.Divider />
          <Card.Image source={{ uri: development.image }} />
          <Text style={styles.description}>
            {development.description}
          </Text>
          <Button
            icon={<FontAwesome5 name='comment-dots' size={15} color='#ffffff' />}
            buttonStyle={styles.button}
            title='Comment on Community Forum'
            onPress={() => navigateTo('/community')}
          />
        </Card>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'outfit-bold'
  },
  description: {
    marginBottom: 10,
    fontFamily: 'outfit'
  },
  button: {
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    backgroundColor: '#4B0082',
    marginBottom: 0
  }
});

export default Page;
