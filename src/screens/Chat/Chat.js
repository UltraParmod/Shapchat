import {
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import WrapperContainer from '../../components/WrapperContainer';
import HomeHeade from '../../components/HomeHeade';
import data from './data';
import RoundImg from '../../components/RoundImg';
import {
  moderateScale,
  moderateScaleVertical,
} from '../../styles/responsiveSize';
import commonStyle from '../../styles/commonStyle';
import colors from '../../styles/colors';
import imagePath from '../../constants/imagePath';

export default function Chat() {
  const renderItem = ({item, index}) => {
    // console.log('data is hre,,', item)
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <RoundImg image={item.img} size={50} />
          <View style={{marginLeft: moderateScale(10)}}>
            <Text
              numberOfLines={1}
              style={{
                maxWidth: moderateScale(150),
                ...commonStyle.fontSize16,
                fontWeight: '600',
              }}>
              {item.name}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: moderateScaleVertical(-3),
              }}>
              <Text style={styles.newShapStyle}>New Shap </Text>
              <Text style={styles.timeStyle}>{item.time} </Text>
              <Text style={styles.streakStyle}>{item.streak}</Text>
            </View>
          </View>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={imagePath.emojiHeartEye} style={styles.emoji} />
          <Image source={imagePath.smile} style={styles.emoji} />
          {/* <Image source={imagePath.smileHeartChick} style={styles.emoji}/> */}
          <TouchableOpacity
            onPress={() => {
              Alert.alert('Alert');
            }}
            style={styles.vertiucalLine}>
            <Image source={imagePath.chat} style={styles.chatStyle} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <WrapperContainer contianer={{paddingBottom: moderateScaleVertical(40)}}>
      <HomeHeade
        centreText={'Chat'}
        headerStyle={{marginBottom: moderateScaleVertical(15)}}
      />
      <View>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.id}
          ItemSeparatorComponent={() => <View style={styles.lineStyle}></View>}
        />
      </View>
    </WrapperContainer>
  );
}

const styles = StyleSheet.create({
  newShapStyle: {
    ...commonStyle.fontSize14,
    color: colors.red,
    fontWeight: '700',
  },
  timeStyle: {
    marginHorizontal: moderateScale(10),
    ...commonStyle.fontSize12,
    color: 'gray',
  },
  streakStyle: {
    marginHorizontal: moderateScale(10),
    ...commonStyle.fontSize14,
    fontWeight: '700',
  },
  lineStyle: {
    borderBottomWidth: 0.2,
    borderColor: colors.blackOpacity40,
    marginVertical: moderateScaleVertical(13),
  },
  emoji: {
    width: moderateScale(20),
    marginHorizontal: moderateScale(2),
    height: moderateScale(20),
  },
  vertiucalLine: {
    height: moderateScaleVertical(40),
    borderLeftWidth: 0.3,
    marginLeft: moderateScale(10),
    borderColor: colors.blackOpacity40,
    justifyContent: 'center',
  },
  chatStyle: {
    marginLeft: moderateScale(10),
    tintColor: colors.blackOpacity40,
    width: moderateScale(27),
    height: moderateScaleVertical(27),
    resizeMode: 'contain',
  },
});
