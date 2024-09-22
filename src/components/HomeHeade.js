import {Alert, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import imagePath from '../constants/imagePath';
import {useNavigation} from '@react-navigation/native';
import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';
import colors from '../styles/colors';
import commonStyle from '../styles/commonStyle';
import RoundImg from './RoundImg';

export default function HomeHeade({
  leftImg = imagePath.back,
  headerStyle,
  onPress,
  centreText,
  lastImg=imagePath.more
}) {
  const navigation = useNavigation();
  return (
    <View style={{...styles.headerStyle, ...headerStyle}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {/* <Image
          source={{
            uri: 'https://avatars.githubusercontent.com/u/155316197?v=4',
          }}
          style={styles.leftImg}
        /> */}
        <RoundImg image={'https://avatars.githubusercontent.com/u/155316197?v=4'} />
        <TouchableOpacity onPress={()=>{
          Alert.alert('Alert')
        }}>
          <Image
            source={imagePath.search}
            style={[
              styles.leftImg,
              {
                marginLeft: moderateScale(10),
                width: moderateScale(27),
                height: moderateScale(27),
              },
            ]}
          />
        </TouchableOpacity>
      </View>
      <Text style={{...commonStyle.fontSize20, fontWeight: '700'}}>
        {centreText}
      </Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>

      <TouchableOpacity onPress={()=>{
          Alert.alert('Alert')
        }}>
        <Image
          source={imagePath.addFriend}
          style={[
            styles.leftImg,
            {
              marginLeft: moderateScale(10),
              width: moderateScale(30),
              height: moderateScale(22),
              resizeMode:'contain',
              borderRadius:moderateScale(0)
            },
          ]}
        />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
          Alert.alert('Alert')
        }}>
        <Image
          source={lastImg}
          style={[
            styles.leftImg,
            {
              marginLeft: moderateScale(20),
              width: moderateScale(20),
              height: moderateScale(30),
              resizeMode:'contain'
            },
          ]}
        />
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    marginTop: moderateScaleVertical(-20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

});
