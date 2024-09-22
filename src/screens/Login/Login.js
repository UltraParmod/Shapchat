import {Alert, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {moderateVerticalScale} from 'react-native-size-matters';
import Loader from '../../components/Loader';
import Header from '../../components/Header';
import WrapperContainer from '../../components/WrapperContainer';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import strings from '../../constants/lang';
import commonStyle from '../../styles/commonStyle';
import colors from '../../styles/colors';
import BtnComp from '../../components/BtnComp';
import {moderateScale} from '../../styles/responsiveSize';
import {isEnabled} from 'react-native/Libraries/Performance/Systrace';
import action from './../../redux/actions/index'
import actions from './../../redux/actions/index';
import navigationStrings from '../../constants/navigationStrings';
import { useNavigation } from '@react-navigation/native';
export default function Login({}) {

  const navigation=useNavigation()
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    isSecure: true,
    isEnabled: false,
  });
  const {isLoading, email, password, isSecure, isEnabled} = state;
  const updateState = data => setState(state => ({...state, ...data}));
  useEffect(() => {
    if (email !== '' && password !== '') {
      updateState({isEnabled: true});
      return;
    }
    updateState({isEnabled: false});
  }, [email, password]);
  const onLogin=()=>{
      // actions.login(true)
      // action
      navigation.native(navigationStrings.CHAT)
      Alert.alert('Login Alert ')
  }
  return (
    <WrapperContainer>
      <Header />
      <Text style={styles.loginTxt}>{strings.LOGIN}</Text>
      <TextInputWithLabel
        placeholder={strings.PLEASE_ENTER_YOUR_EMAIL}
        label={strings.USER_OR_EMAIL}
        value={email}
        onChangeTxt={email => updateState({email})}
      />
      <TextInputWithLabel
        placeholder={strings.PLEASE_ENTER_YOUR_PASSWORD}
        label={strings.PASSWORD}
        value={password}
        onChangeTxt={password => updateState({password})}
        secureTextEntry={isSecure}
        isSecure={isSecure}
        onPressSecure={() => updateState({isSecure: !isSecure})}
      />
      <Text
        style={styles.forgotTxt}
        onPress={() => {
          Alert.alert('ALert');
        }}>
        {strings.FORGOT_YOUR_PASSWORD}
      </Text>

      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          marginBottom: moderateVerticalScale(20),
        }}>
        <BtnComp
          // onPress={onLogin}
          onPress={()=>{
            navigation.navigate(navigationStrings.CHAT)
          }}
          isDisabled={!isEnabled}
          btnstyle={{
            ...styles.btnstyle,
            backgroundColor: isEnabled ? colors.blue : colors.blackOpacity20,
          }}
          btnTitle={styles.btnTitle}
          title={strings.LOGIN}
        />
      </View>
    </WrapperContainer>
  );
}
const styles = StyleSheet.create({
  contianer: {},
  loginTxt: {
    ...commonStyle.fontSize16,
    color: colors.blackOpacity70,
    alignSelf: 'center',
    marginTop: moderateVerticalScale(5),
  },
  forgotTxt: {
    ...commonStyle.fontSize14,
    color: colors.blue,
    marginVertical: moderateVerticalScale(20),
    textDecorationLine: 'underline',
    alignSelf: 'center',
    paddingVertical: moderateVerticalScale(5),
  },
  btnstyle: {
    borderRadius: moderateVerticalScale(60),
    height: moderateVerticalScale(44),
    backgroundColor: colors.blackOpacity20,
    marginHorizontal: moderateScale(8),
  },
  btnTitle: {
    ...commonStyle.fontSize20,
    color: colors.white,
  },
});
