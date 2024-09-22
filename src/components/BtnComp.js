import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../styles/colors'
import fontFamily from '../styles/fontFamily'
import { moderateScale } from '../styles/responsiveSize'
import commonStyle from '../styles/commonStyle'

export default function BtnComp({title,onPress,btnstyle,btnTitle,
  isDisabled=false
}) {
  return (
    <TouchableOpacity disabled={isDisabled} style={{...styles.btnContainer,...btnstyle}} onPress={onPress} activeOpacity={.8}>
      <Text style={{...styles.btnTitle,...btnTitle}}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    btnContainer:{
        backgroundColor:colors.red,
        height:moderateScale(54),
        alignItems:'center',
        justifyContent:'center',      
      },
      btnTitle:{
        ...commonStyle.fontSize20,
        textTransform:'uppercase',
        color:colors.white,
      }
})