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
        source={require("../assets/log2.jpg")}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button,{ backgroundColor: '#FFAAA5'}]} onPress={()=>navigation.navigate('Intro')}>
          <Image style={styles.image2}
        source={require("../assets/Notes.jpeg")}/>
          <Text style={styles.buttonText}>Notes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button,{ backgroundColor: '#808080'}]} onPress={()=>navigation.navigate('ClockPage')}>
        <Image style={styles.image2}
        source={require("../assets/clock.png")}/>
          <Text style={styles.buttonText}>Clock</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button,{ backgroundColor: '#EBAF8A'}]} onPress={()=>navigation.navigate('Todo')}>
        <Image style={styles.image2}
        source={require("../assets/Todo.jpeg")}/>
          <Text style={styles.buttonText}>To- Do</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button,{ backgroundColor: '#7ADECD'}]}>
        <Image style={styles.image2}
        source={require("../assets/Music.png")}/>
          <Text style={styles.buttonText}>Music</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button,{ backgroundColor: '#FE83C6'}]}>
        <Image style={styles.image2}
        source={require("../assets/SelfCare.png")}/>
        <Text style={styles.buttonText}>Self Care</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button,{ backgroundColor: '#A6C1E5'}]}>
        <Image style={styles.image2}
        source={require("../assets/Reminder.jpeg")}/>
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
    width: 70,
    height: 70,
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
    fontSize: 15,
    textAlign: "center",
  },
});
