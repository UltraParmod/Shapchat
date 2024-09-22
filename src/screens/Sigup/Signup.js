import {Alert, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {moderateVerticalScale} from 'react-native-size-matters';
import Loader from '../../components/Loader';
import Header from '../../components/Header';
import WrapperContainer from '../../components/WrapperContainer';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import strings from '../../constants/lang';
import commonStyle from '../../styles/commonStyle';
import colors from '../../styles/colors';
import BtnComp from '../../components/BtnComp';
import { moderateScale } from '../../styles/responsiveSize';

export default function Signup() {
  const [state, setState] = useState({
    isLoading: false,
    firstname:'',
    lastName:'',
    userName:'',
    email: '',
    password: '',
    isSecure:true
  });
  const {isLoading, email, password,isSecure,firstname,lastName,userName} = state;
  const updateState = data => setState(state => ({...state, ...data}));

  const onSignup =()=>{
    Alert.alert('lll')
  }
  return (
    <WrapperContainer>
      <Header />
      <Text style={styles.createAccount}>{strings.CREATE_YOUR_ACCOUNT}</Text>
      <TextInputWithLabel
        placeholder={strings.ENTER_YOUR_FIRST_NAME}
        label={strings.FIRST_NAME}
        value={firstname}
        onChangeTxt={firstname => updateState({firstname})}
      />
      <TextInputWithLabel
        placeholder={strings.ENTER_YOUR_LAST_NAME}
        label={strings.LAST_NAME}
        value={lastName}
        onChangeTxt={lastName => updateState({lastName})}
      />
      <TextInputWithLabel
        placeholder={strings.ENTER_YOUR_USER_NAME}
        label={strings.USER_NAME}
        value={userName}
        onChangeTxt={userName => updateState({userName})}
      />
       <TextInputWithLabel
        placeholder={strings.PLEASE_ENTER_YOUR_EMAIL}
        label={strings.USER_OR_EMAIL}
        value={email}
        onChangeTxt={email   => updateState({email})}
      />
      <TextInputWithLabel
        placeholder={strings.PLEASE_ENTER_YOUR_PASSWORD}
        label={strings.PASSWORD}
        value={password}
        onChangeTxt={password => updateState({password})}
        secureTextEntry={isSecure}
        isSecure={isSecure}
        onPressSecure={()=>updateState({isSecure: !isSecure})}
      />
      <Text style={styles.forgotTxt} 
        onPress={()=>{
          Alert.alert('ALert')
        }}
      >{strings.FORGOT_YOUR_PASSWORD}</Text>
        
        <View style={{flex:1,justifyContent:'flex-end', marginBottom:moderateVerticalScale(20)}}>
        <BtnComp btnstyle={styles.btnstyle} 
        btnTitle={styles.btnTitle}
          title={strings.SIGNUP_AND_ACCEPT}
          onPress={onSignup}
        />
        </View>

    </WrapperContainer>
  );
}
const styles = StyleSheet.create({
  contianer: {
    
  },
  createAccount:{
    ...commonStyle.fontSize16,
    color:colors.blackOpacity70,
    alignSelf:'center',
    marginVertical:moderateVerticalScale(5)
  },
  forgotTxt:{
    ...commonStyle.fontSize14,
    color:colors.blue,
    marginVertical:moderateVerticalScale(20),
    textDecorationLine:'underline',
    alignSelf:'center',
    paddingVertical:moderateVerticalScale(5)
  },
  btnstyle:{
    borderRadius:moderateVerticalScale(60),
    height:moderateVerticalScale(44),
    backgroundColor:colors.blackOpacity20,
    marginHorizontal:moderateScale(8)
  },
  btnTitle:{
    ...commonStyle.fontSize20,
    color:colors.white
  }
});
