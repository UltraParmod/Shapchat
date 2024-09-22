import React from 'react';
import navigationStrings from '../constants/navigationStrings';
import TabRouter from './TabRoutes'


export default function (Stack) {
  return (
    <>
      <Stack.Screen
        name={navigationStrings.CHAT}
        component={TabRouter}
        options={{headerShown: false}}
      />
    </>
  );
}
