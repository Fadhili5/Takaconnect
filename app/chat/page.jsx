import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  FlatList,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Icon from 'react-native-vector-icons/FontAwesome';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState('');
  const [loading, setLoading] = useState(false);
  const [awaitingResponseForId, setAwaitingResponseForId] = useState(null);
  const flatListRef = useRef();

  useEffect(() => {
    // Add a hardcoded welcome message when the component mounts
    setMessages([{ id: 0, text: "🌟 Welcome to Your AI Therapy Companion 🌟", isAI: true }]);
  }, []);

  const sendMessage = async () => {
    if (messageText.trim()) {
      const messageId = Date.now();
      const newMessage = { id: messageId, text: messageText, isAI: false };
      setMessages(currentMessages => [...currentMessages, newMessage]);
      setMessageText('');
      setLoading(true);
      setAwaitingResponseForId(messageId); // Set the ID for the message we're waiting to get a response for

      try {
        const response = await fetch('https://therabot-assistant-v1.vercel.app/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: messageText }),
        });
        const data = await response.json();
        
        setMessages(currentMessages => [
          ...currentMessages.filter(message => message.id !== awaitingResponseForId),
          { id: messageId + 1, text: data.response, isAI: true }
        ]);
      } catch (error) {
        console.error('Error sending message:', error);
        setMessages(currentMessages => [
          ...currentMessages.filter(message => message.id !== awaitingResponseForId),
          { id: messageId + 1, text: "Error getting response.", isAI: true }
        ]);
      } finally {
        setLoading(false);
        setAwaitingResponseForId(null); // Reset the awaiting response ID
      }
    }
  };

  const renderMessage = ({ item }) => {
    let messageContent;
    if (loading && item.isAI && item.id === awaitingResponseForId + 1) {
      messageContent = (
        <View style={tw`flex-row items-center`}>
          <Text style={tw`bg-red-400`}>Typing...</Text>
          <ActivityIndicator style={tw`ml-2`} size="small" color="#0000ff" />
        </View>
      );
    } else {
      messageContent = <Text>{item.text}</Text>;
    }

    return (
      <View
        style={[
          tw`p-3 m-2 rounded-lg mt-10`,
          item.isAI ? tw`bg-blue-100 self-start` : tw`bg-pink-100 self-end`,
        ]}
      >
        {messageContent}
      </View>
    );
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={tw`flex-1`}
      >
        <FlatList
          ref={flatListRef}
          data={messages}
          renderItem={renderMessage}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={tw`p-4`}
          showsVerticalScrollIndicator={false}
          onContentSizeChange={() => flatListRef.current.scrollToEnd({ animated: true })}
        />
        <View style={tw`flex-row items-center p-4 bg-white border-t border-gray-200`}>
          <TextInput
            style={tw`flex-1 pl-4 pr-4 py-2 bg-gray-100 rounded-full`}
            placeholder="Type a message"
            value={messageText}
            onChangeText={setMessageText}
            onSubmitEditing={sendMessage}
          />
          <TouchableOpacity onPress={sendMessage} style={tw`ml-4`}>
            <Icon name="send" size={24} color="#fb7185" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default ChatScreen;