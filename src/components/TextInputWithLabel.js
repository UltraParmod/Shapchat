import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../styles/colors'
import commonStyle from '../styles/commonStyle'
import fontFamily from '../styles/fontFamily'
import { moderateScale, moderateScaleVertical } from '../styles/responsiveSize'
import imagePath from '../constants/imagePath'

export default function TextInputWithLabel({
  label,
  value,
  placeholder,
  onChangeTxt,
  inputStyle,
  textStyle,
  isSecure,
  onPressSecure,
  ...props
}) {
  return (
    <View style={{marginTop:moderateScaleVertical(20)}}>
      <Text style={styles.labelStyle}>{label}</Text>
      <View style={{ ...styles.inputStyle, ...inputStyle }}>


        <TextInput
          value={value}
          placeholder={placeholder}
          onChangeText={onChangeTxt}
          style={{...styles.textStyle,...textStyle}}
          {...props}
        />
      {!!onPressSecure &&   <TouchableOpacity onPress={onPressSecure}>
          <Image source={isSecure?imagePath.eyeHide:imagePath.eyeShow} style={{width:moderateScaleVertical(23),height:moderateScale(23)}}/>
        </TouchableOpacity>

      }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  inputStyle: {
    borderBottomWidth: 1,
    borderBottomColor: colors.blackOpacity20,
    padding: 0,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between'
  },
  labelStyle: {
    ...commonStyle.fontSize14,
    textTransform: 'uppercase',
    fontFamily: fontFamily.medium,
    color: colors.blackOpacity70
  },
  textStyle:{
    ...commonStyle.fontSize14,
    flex:1
  }
})