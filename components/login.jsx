import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'

const login = () => {

    const router = useRouter()
  return (
    <View>
        <Image source={require('../assets/images/image.png')} 
            style={{width: '100%', height:520}}
        />
        <View style={styles.container}>
            <Text style={{
                fontSize: 40,
                fontFamily: 'outfit-bold',
                textAlign: 'center',
                marginTop: 10
            }}>Therabot 🫂</Text>

            <Text style={{
                fontSize: 17,
                fontFamily: 'outfit',
                textAlign: 'center',
                color: Colors.GRAY,
                marginTop: 15
            }}>I'm powered by AI, so surprises and mistakes are 
                possible. Make sure to verify any generated code or suggestions </Text>
        </View>
        <TouchableOpacity style={styles.button}
            onPress={() => router.push('auth/sign-in')}
        >
            <Text style={{
                fontSize: 20,
                fontFamily: 'outfit',
                textAlign: 'center',
                color: Colors.WHITE
            }}>Get Started</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 25,
        backgroundColor: Colors.WHITE,
        marginTop: -20,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        height: 100,
    },
    button: {
        padding: 15,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 99,
        marginTop: '20%'
       
    },
})

export default login