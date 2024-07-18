import { View, Text, Image, StyleSheet, Touchable } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'
import { TouchableOpacity } from 'react-native-gesture-handler'

const login = () => {

    const router = useRouter()
  return (
    <View>
        <Image source={require('../assets/images/haitenangaja_logo.jpeg')} 
            style={{width: 200, height:450}}
        />
        <View style={styles.container}>
            <Text style={{
                fontSize: 30,
                fontFamily: 'outfit-bold',
                textAlign: 'center',
                marginTop: 10
            }}>Therabot</Text>

            <Text style={{
                fontSize: 20,
                fontFamily: 'outfit-bold',
                textAlign: 'center',
                color: Colors.GRAY,
                marginTop: 20
            }}>Never wa</Text>
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
        padding: 15,
        backgroundColor: Colors.WHITE,
        marginTop: -20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: 100,
    },
    button: {
        backgroundColor: Colors.PRIMARY,
        padding: 15,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 99,
        marginTop: '20%'
       
    },
})

export default login