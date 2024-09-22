import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import imagePath from '../constants/imagePath'
import { useNavigation } from '@react-navigation/native'
import { moderateScale, moderateScaleVertical } from '../styles/responsiveSize'
import colors from '../styles/colors'

export default function Header({
    leftImg=imagePath.back,
    headerStyle,
    onPress}) {

        const navigation=useNavigation()
  return (
    <View style={{...styles.headerStyle,...headerStyle}}>
        <TouchableOpacity onPress={!!onPress? onPress:()=>navigation.goBack()}>
    <Image source={leftImg} style={styles.leftImg}/>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    headerStyle:{
        // minHeight:moderateScale(48),
    },leftImg:{
        width:moderateScale(20),
        height:moderateScaleVertical(30),
        resizeMode:'contain',
        tintColor:colors.blue
    }
})