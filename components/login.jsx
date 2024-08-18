import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';

const { width, height } = Dimensions.get('window');

const Login = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image
          source={require('../assets/images/Logo.png')}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.content}>
          <Text style={styles.title}>HakiSpeaks</Text>
          <Text style={styles.subtitle}>
            Speak out your rights and let your voice be heard
            lets stop corruption and injustice in our society
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('auth/sign-in')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: height * 0.5,
  },
  content: {
    padding: 25,
    backgroundColor: Colors.WHITE,
    marginTop: 30,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    height: height * 0.3,
    justifyContent: 'center',
  },
  title: {
    fontSize: width * 0.1,
    fontFamily: 'outfit-bold',
    textAlign: 'center',
    marginTop: 10,
  },
  subtitle: {
    fontSize: width * 0.04,
    fontFamily: 'outfit',
    textAlign: 'center',
    color: Colors.GRAY,
    marginTop: 15,
  },
  button: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 99,
    marginTop: '10%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: width * 0.05,
    fontFamily: 'outfit',
    textAlign: 'center',
    color: Colors.WHITE,
  },
});

export default Login;