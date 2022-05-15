import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import React, { useEffect, useState } from 'react';
import Toast from 'react-native-toast-message';
import Home from './Screens/Home';
import Signup from './Screens/Signup';
import Login from './Screens/Login';
import Modules from './Screens/Modules';
// import Notes from './Screens/Notes';
// import NewScreen from './Screens/NewScreen';
import Reminder from './Screens/Reminder';
import Todo from './Screens/Todo';
import ClockPage from './Screens/ClockPage';
import Intro from './Screens/Intro';
import NoteScreen from './Screens/NoteScreen';
import NoteDetail from './components/NoteDetail';
import NoteProvider from './contexts/NoteProvider';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
export default function App() {
  const [user, setUser] = useState({});
  const [isAppFirstTimeOpen, setIsAppFirstTimeOpen] = useState(false);
  const findUser = async () => {
    const result = await AsyncStorage.getItem('user');

    if (result === null) return setIsAppFirstTimeOpen(true);

    setUser(JSON.parse(result));
    setIsAppFirstTimeOpen(false);
  };

  useEffect(() => {
    findUser();
  }, []);

  const renderNoteScreen = props => <NoteScreen {...props} user={user} />;

  if (isAppFirstTimeOpen) return <Intro onFinish={findUser} />;
  return (

    <NavigationContainer>
      
      <Stack.Navigator>
        <Stack.Screen  name="Home" component={Home} />
        <Stack.Screen  name="Signup" component={Signup} />
        <Stack.Screen  name="Login" component={Login} />
        <Stack.Screen  name="Modules" component={Modules} />
        {/* <Stack.Screen  name="Notes" component={Notes} options={{headerStyle: {backgroundColor: '#8BE3E3'}, headerTintColor: '#fff'}} /> */}
        {/* <Stack.Screen  name="NewScreen" component={NewScreen} options={{headerStyle: {backgroundColor: '#8BE3E3'},headerTintColor: '#fff'}} /> */}
        <Stack.Screen  name="Reminder" component={Reminder} />
        <Stack.Screen name= "Todo" component={Todo}/>
        <Stack.Screen name= "Intro" component={Intro}/>
        <Stack.Screen name="ClockPage" component={ClockPage} />
        <Stack.Screen component={NoteProvider} name='NoteProvider' />
        <Stack.Screen name= "NoteScreen" component={NoteScreen}/>
        <Stack.Screen component={NoteDetail} name='NoteDetail' />
        
  
      
      </Stack.Navigator>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </NavigationContainer>
  );
}