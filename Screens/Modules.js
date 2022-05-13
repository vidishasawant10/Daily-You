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

const Login = () => {
  const navigation = useNavigation();  
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("/Users/sayalitandel/Downloads/DailyYouBase-Updated-Vidhi 2/assets/log2.jpg")}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Intro')}>
          <Image style={styles.image2}
        source={require("/Users/sayalitandel/Downloads/DailyYouBase-Updated-Vidhi 2/assets/Notes.jpeg")}/>
          <Text style={styles.buttonText}>Notes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('ClockPage')}>
        <Image style={styles.image2}
        source={require("/Users/sayalitandel/Downloads/DailyYouBase-Updated-Vidhi 2/assets/Notes.jpeg")}/>
          <Text style={styles.buttonText}>Clock</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Todo')}>
        <Image style={styles.image2}
        source={require("/Users/sayalitandel/Downloads/DailyYouBase-Updated-Vidhi 2/assets/Todo.jpeg")}/>
          <Text style={styles.buttonText}>To- Do</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
        <Image style={styles.image2}
        source={require("/Users/sayalitandel/Downloads/DailyYouBase-Updated-Vidhi 2/assets/Music.png")}/>
          <Text style={styles.buttonText}>Music</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
        <Image style={styles.image2}
        source={require("/Users/sayalitandel/Downloads/DailyYouBase-Updated-Vidhi 2/assets/SelfCare.png")}/>
        <Text style={styles.buttonText}>Self Care</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
        <Image style={styles.image2}
        source={require("/Users/sayalitandel/Downloads/DailyYouBase-Updated-Vidhi 2/assets/Reminder.jpeg")}/>
          <Text style={styles.buttonText}  onPress={()=>navigation.navigate('Reminder')}>Reminder</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: 190,
    height: 190,
    marginBottom: 40,
  },

  image2: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },

  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    height: 118,
    width: 126,
    backgroundColor: "#8BE3E3",
    borderColor: "white",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  buttonText: {
    color: "black",
    fontSize: 10,
    textAlign: "center",
  },
});
