import {ImageBackground, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import BtnComp from '../../components/BtnComp';
import navigationStrings from '../../constants/navigationStrings';

export default function InitailScreen({navigation}) {
  const moveToScreen = screen => {
    navigation.navigate(screen);
  };
  return (
    <ImageBackground
      style={{flex: 1, justifyContent: 'flex-end'}}
      source={imagePath.bgImage}>
       <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent={true}
        />
      <BtnComp
        title="Log in"
        onPress={() => {
          moveToScreen(navigationStrings.LOGIN);
        }}
      />
      <BtnComp
        title="Sign up"
        btnstyle={{backgroundColor: colors.blue}}
        onPress={() => {
          moveToScreen(navigationStrings.SIGNUP);
        }}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({});
