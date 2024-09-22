import React from 'react';
import navigationStrings from '../constants/navigationStrings';
import {InitailScreen, Login, Signup} from '../screens';

export default function (Stack) {
  return (
    <>
      <Stack.Screen
        name={navigationStrings.INITIAL_SCREEN}
        component={InitailScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name={navigationStrings.LOGIN} component={Login} />
      <Stack.Screen name={navigationStrings.SIGNUP} component={Signup} />
    </>
  );
}
