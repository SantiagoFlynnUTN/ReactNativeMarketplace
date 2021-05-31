import 'react-native-gesture-handler'
import React from 'react';
import { StyleSheet, Text, View, Tabnav, StatusBar,Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Icon,SearchBar} from 'react-native-elements'
import  HomeScreen from './Tabs/HomeScreen'
import  BookmarksScreen from './Tabs/BookmarksScreen'
import  NotificationsScreen from './Tabs/NotificationsScreen'
import  SettingsScreen from './Tabs/SettingsScreen'
import { SafeAreaView } from 'react-native';

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
export default function TabsScreen() {

  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <NavigationContainer> 
        <SafeAreaView style={styles.androidSafeArea}/>
        
        <StatusBar hidden={false}/>
        <View style={styles.searchBarIconsContainer}>
        <View style={styles.searchBarContainer}>
        <SearchBar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          containerStyle={styles.searchBar}
          renderToHardwareTextureAndroid
         />
        </View>
        <View style={styles.iconsContainer}>
            
          <Button title='fav' />
          <Icon name='home' type='material'/>
          <Icon name='home' type='material'/>
        </View>
        </View>
        <stack.Navigator>
          <stack.Screen 
            name="Main" 
            component={myTabs} 
            options={{title:null, headerTransparent:'true'}}/>
        </stack.Navigator>

      </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  androidSafeArea: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  searchBarIconsContainer: {
    backgroundColor: '#FDD7E4',
    flexDirection:'row'
  },
  searchBarContainer: {
    flexGrow:1
  },
  iconsContainer: {
    flexDirection:'row'
  },
  searchBar: {
    backgroundColor: '#FDD7E4',
    borderTopColor: '#FDD7E4',
    borderBottomColor: '#FDD7E4',
  },
});
