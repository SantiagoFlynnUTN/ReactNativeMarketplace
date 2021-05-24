import React from 'react';
import { StyleSheet, Text, View, Tabnav } from 'react-native';
import { StatusBar } from 'expo-status-bar';


function NotificationsScreen(props) {
    return (
        <View style={styles.container}>
        <Text>NotificationsScreen</Text>
        <StatusBar style="auto" />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})

export default NotificationsScreen;