
import React from 'react';
import {  StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../Screen/SignInScreen';
import SignUpScreen from '../Screen/SignUpScreen';
import HomeScreen from '../Screen/HomeScreen';

const RootStack = createStackNavigator();

export default function RootStackScreen() {
  return (
    <RootStack.Navigator
    // screenOptions={{
    //   headerShown: true
    // }}
    >
        <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen}/>
        <RootStack.Screen name="HomeScreen" component={HomeScreen}/>
    </RootStack.Navigator>
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