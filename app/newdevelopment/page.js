import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { FontAwesome5 } from '@expo/vector-icons';
import tw from 'twrnc';
import { useRouter } from 'expo-router';

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
          <Text style={[tw`text-white text-2xl ml-4`, { fontFamily: 'outfit-bold' }]}>New Developments</Text>
        </View>
      </View> 
      {developments.map((development, index) => (
        <Card key={index}>
          <Card.Title>{development.title}</Card.Title>
          <Card.Divider/>
          <Card.Image source={{ uri: development.image }} />
          <Text style={{ marginBottom: 10 }}>
            {development.description}
          </Text>
          <Button
            icon={<Icon name='code' color='#ffffff' />}
            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0,backgroundColor:'#4B0082', marginBottom: 0 }}
            title='Comment on Community Forum'
            onPress={() => navigateTo('/community')}
          />
        </Card>
      ))}
    </ScrollView>
  );
}

export default Page;
