import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Tabnav } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Icon,SearchBar} from 'react-native-elements'
import  HomeScreen from './src/Screens/Tabs/HomeScreen'
import  BookmarksScreen from './src/Screens/Tabs/BookmarksScreen'
import  NotificationsScreen from './src/Screens/Tabs/NotificationsScreen'
import  SettingsScreen from './src/Screens/Tabs/SettingsScreen'
import { Header } from 'react-native/Libraries/NewAppScreen';
const stack = createStackNavigator();
const tab = createBottomTabNavigator();
function myTabs(){
  return (
    <tab.Navigator screenOptions={({route}) =>({
      tabBarIcon:({focused,color,size,type})=>{
        let iconName;
        let iconType;
        if(route.name==='Home'){
          iconName=focused='home'
          iconType=type='ionicon'
        }
        if(route.name==='Favs'){
          iconName=focused='favorite'
          iconType=type='material'
        }
      if(route.name==='MyAcc'){
          iconName=focused='account-circle'
          iconType=type='material'
        }
        if(route.name==='Notif'){
          iconName=focused='notifications'
          iconType=type='material-two-tones'
        }
        return <Icon name={iconName}  size={size} color={color} type={iconType}/>
      }
    })}  tabBarOptions={{showLabel:'true'}} >
      <tab.Screen name="Home" component={HomeScreen} />
      <tab.Screen name="Favs" component={BookmarksScreen}/>
      <tab.Screen name="Notif" component={NotificationsScreen}/>
      <tab.Screen name="MyAcc" component={SettingsScreen}/>
  
    </tab.Navigator>
  );
};
export default function App() {
  return (
   
      <NavigationContainer> 
        <stack.Navigator>
          <stack.Screen name="home" component={myTabs} options={{title:null, headerTransparent:'true'}}/>
        </stack.Navigator>
        <StatusBar hidden={true}/>
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
