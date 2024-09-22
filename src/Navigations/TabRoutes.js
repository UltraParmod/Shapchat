import React from 'react';
import navigationStrings from '../constants/navigationStrings';
import {Map, Chat, Camera, Stories} from '../screens';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import colors from '../styles/colors';
import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';
import imagePath from '../constants/imagePath';

const BottomTab = createBottomTabNavigator();

export default TabRoutes = () => {
  return (
    <BottomTab.Navigator
      tabBar={tabsProps => (
        <>
          <BottomTabBar {...tabsProps} />
        </>
      )}
      initialRouteName={navigationStrings.CHAT}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.black,
          height: moderateScaleVertical(62),
        },
        tabBarShowLabel: false,
        headerShown:false,
      }}>
      <BottomTab.Screen name={navigationStrings.MAP} component={Map} 
        options={{
          tabBarIcon:({focused})=>{
            return <Image style={{tintColor:focused?colors.green:colors.white,width:moderateScaleVertical(30),height:moderateScale(30),resizeMode:'contain'}} source={imagePath.maps} />
          }
        }}
      />
      <BottomTab.Screen name={navigationStrings.CHAT} component={Chat} 
       options={{
        tabBarIcon:({focused})=>{
          return <Image style={{tintColor:focused?colors.green:colors.white,width:moderateScaleVertical(30),height:moderateScale(30),resizeMode:'contain'}} source={imagePath.chat} />
        }
      }}
      />
      <BottomTab.Screen name={navigationStrings.CAMERA} component={Camera} 
       options={{
        tabBarIcon:({focused})=>{
          return <Image style={{tintColor:focused?colors.green:colors.white,width:moderateScaleVertical(30),height:moderateScale(30),resizeMode:'contain'}} source={imagePath.camera} />
        }
      }}
      />
      <BottomTab.Screen name={navigationStrings.STORIES} component={Stories} 
       options={{
        tabBarIcon:({focused})=>{
          return <Image style={{tintColor:focused?colors.green:colors.white,width:moderateScaleVertical(30),height:moderateScale(30),resizeMode:'contain'}} source={imagePath.user} />
        }
      }}
      />
    </BottomTab.Navigator>
  );
};
