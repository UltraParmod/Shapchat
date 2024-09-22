import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Routes from './src/Navigations/Routes'
import { Provider } from 'react-redux'
import store from './src/redux/store'

export default function App() {
 
  return (
    <Provider store={store} >
      <View style={{flex:1}}>

     <Routes />
      </View>
    </Provider>
  )
}

