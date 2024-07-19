
import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { useEffect } from 'react'

export default function index() {
    const navigation = useNavigation()
    const router = useRouter()

    // useEffect(() => {
    //     navigation.setOptions({
    //         headerShown: false
    // }, []),
    return (
        <View style={{
            padding: 25,  
            backgroundColor: Colors.WHITE,
            paddingTop: 80,    
            height: '100%',
        }}>
          <Text style={{
                fontSize: 30,
                fontFamily: 'outfit-bold',
          }}>Signing You in</Text>
          <Text style={{
                fontSize: 30,
                fontFamily: 'outfit',
                color: Colors.GRAY,
                marginTop: 20,
          }}>WeIcome bac</Text>
          <Text style={{
                fontSize: 30,
                fontFamily: 'outfit',
                color: Colors.GRAY,
                marginTop: 10,
          }}>You Have Been Missed</Text>
    
          <View style={{
                marginTop: 50,
          }}>
            <Text style={{
                fontFamily: 'outfit',
            }}>Email</Text>
            <TextInput style={styles.input} 
                placeholder="Enter your email"
            />
          </View>
          <View style={{
                marginTop: 20,
          }}>
            <Text style={{
                fontFamily: 'outfit',
            }}>Password</Text>
            <TextInput style={styles.input}
                secureTextEntry={true}
                type="password"
                placeholder="Enter Password"
            />
          </View>
    
          {/* sign in button */}
          <TouchableOpacity 
            // onPress={() => router.replace('auth/sign-up')}
          style={{
            padding: 20,
            backgroundColor: Colors.PRIMARY,
            borderRadius: 15,
            marginTop: 50,    
          }}>
            <Text style={{
                fontFamily: 'outfit',
                textAlign: 'center',
                color: Colors.WHITE,
            }}>Sign In</Text>
          </TouchableOpacity>
    
            {/* sign up button */}
            <TouchableOpacity 
                onPress={() => router.replace('auth/sign-up')}
            style={{
                padding: 20,
                backgroundColor: Colors.WHITE,
                borderRadius: 15,
                marginTop: 20,
                borderwidth: 1,
            }}>
                <Text style={{
                    fontFamily: 'outfit',
                    textAlign: 'center',
                    color: Colors.PRIMARY,
                }}>Sign Up</Text>
            </TouchableOpacity>
        </View>
      )
  
}

const styles = StyleSheet.create({
    input:{
        padding: 15,
        borderRadius: 15,
        borderwidth: 1,
        fontFamily: 'outfit',
    }
})