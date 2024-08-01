import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { FontAwesome5 } from '@expo/vector-icons';
import tw from 'twrnc';

const trends = [
  {
    "year": "2023",
    "description": "Significant increase in green cover in urban areas.",
    "link": "https://lewiskuria.projects.earthengine.app/view/kilimani-vegetation-cover-monitor"
  }
];

const GreenCoverTrends = () => {
  const openLink = (url) => {
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };

  return (
    <ScrollView>
      <View style={tw`bg-green-800 p-6 pb-12`}>
        <View style={tw`flex-row items-center mt-10`}>
          <FontAwesome5 name="leaf" size={24} color="white" />
          <Text style={[tw`text-white text-2xl ml-4`, { fontFamily: 'outfit-bold' }]}>Green Cover Trends</Text>
        </View>
      </View> 
      {trends.map((trend, index) => (
        <Card key={index}>
          <Card.Title>{trend.year}</Card.Title>
          <Card.Divider/>
          <Text style={{ marginBottom: 10 }}>
            {trend.description}
          </Text>
          <Button
            icon={<Icon name='link' color='#ffffff' />}
            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
            title='Learn More'
            onPress={() => openLink(trend.link)}
          />
        </Card>
      ))}
    </ScrollView>
  );
}

export default GreenCoverTrends;
