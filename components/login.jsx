import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';

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
          <Text style={styles.title}>kiliSpeaks</Text>
          <Text style={styles.subtitle}>
            I'm powered by AI, so surprises and mistakes are
            possible. Make sure to verify any generated code or suggestions.
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
    height: 520,

  },
  content: {
    padding: 25,
    backgroundColor: Colors.WHITE,
    marginTop: 30,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    height: 100,
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    fontFamily: 'outfit-bold',
    textAlign: 'center',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 17,
    fontFamily: 'outfit',
    textAlign: 'center',
    color: Colors.GRAY,
    marginTop: 15,
  },
  button: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 99,
    marginTop: '20%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'outfit',
    textAlign: 'center',
    color: Colors.WHITE,
  },
});

export default Login;
