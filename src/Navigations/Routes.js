import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthStack from './AuthStack'
import MainStack from './MainStack'

import colors from '../styles/colors'
import { useSelector } from 'react-redux'

const Stack=createNativeStackNavigator()
export default function Routes() {
  const isLogin=useSelector((state)=>state.auth.isLogin)
  console.log('login',isLogin)
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.white}
        hidden={false}
        translucent={false}
      />
    <Stack.Navigator>
{/* {MainStack(Stack)}
     {
        isLogin ? MainStack(Stack)
          :
         AuthStack(Stack)
        
      } */}
    
{    AuthStack(Stack)}
    </Stack.Navigator>
  </NavigationContainer>
  )
}

const styles = StyleSheet.create({})