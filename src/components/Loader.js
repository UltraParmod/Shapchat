import {ActivityIndicator, Modal, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { moderateScaleVertical } from '../styles/responsiveSize';
import colors from '../styles/colors';

export default function Loader({isLoader = false}) {
  if(isLoader){

    return (
        <Modal>
             <StatusBar
              barStyle="dark-content"
              backgroundColor={colors.white}
              translucent={true}
            />
          <View style={styles.contianer}>
            <ActivityIndicator size={'large'} />
          </View>
        </Modal>
      );
  }
   return null
}

const styles = StyleSheet.create({
  contianer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor:colors.white,
  
  },
});
