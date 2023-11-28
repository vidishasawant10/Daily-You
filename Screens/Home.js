// import React from 'react'
// import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

const Home = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            
            {/* <Text>This is a Login Screen</Text> */}
            <Image style={styles.image} source={require("../assets/log2.jpg")} />

            <TouchableOpacity style={styles.loginBtn} onPress={()=>navigation.navigate('Signup')}>
                <Text style={styles.buttonText}>SIGN UP</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginBtn} onPress={()=>navigation.navigate('Login')}>
                <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2e9e4",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: 320,
    height: 320,
    marginBottom: 40,
    borderRadius: 160, // Half of the width/height to make it a circle
    overflow: 'hidden',
  },
 
  inputView: {
    backgroundColor: "#8BE3E3",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
    marginLeft: 20,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#4A4E69",
  },
  buttonText: {
    color: "#fff", // Set your desired text color here
  },
});