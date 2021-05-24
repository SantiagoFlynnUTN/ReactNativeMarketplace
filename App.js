import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Tabnav } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import  HomeScreen from './src/Screens/Tabs/HomeScreen'
import  BookmarksScreen from './src/Screens/Tabs/BookmarksScreen'
import  NotificationsScreen from './src/Screens/Tabs/NotificationsScreen'
import  SettingsScreen from './src/Screens/Tabs/SettingsScreen'

const stack = createStackNavigator();
const tab = createBottomTabNavigator();

function myTabs(){
  return (
    <tab.Navigator tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',}}>
      <tab.Screen name="Home" component={HomeScreen}/>
      <tab.Screen name="Favs" component={BookmarksScreen}/>
      <tab.Screen name="Notif" component={NotificationsScreen}/>
      <tab.Screen name="MyAcc" component={SettingsScreen}/>
    </tab.Navigator>
  );
}

//<stack.Screen name="main" component={myTabs}/>
export default function App() {
  return (
   
      <NavigationContainer> 
        <stack.Navigator>
          <stack.Screen name="home" component={myTabs}/>
        </stack.Navigator>
      </NavigationContainer>
      
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
