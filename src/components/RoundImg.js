import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale } from '../styles/responsiveSize'

export default function RoundImg({
        size=40,
        image
}) {
  return (
    <View >
        <Image 
            source={{uri:image}}
            style={{
                height:moderateScale(size),
                width:moderateScale(size),
                borderRadius:moderateScale(size/2)
            }}

        />
    </View>
  )
}

const styles = StyleSheet.create({})