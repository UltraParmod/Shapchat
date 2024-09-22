import {StatusBar, StyleSheet, Text, View} from 'react-native';
import colors from '../styles/colors';
import Loader from './Loader';
import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';

export default function WrapperContainer({
  barStyle = 'dark-content',
  statusBarColor = colors.white,
  children,
  isLoader,
  contianer
}) {
  return (
    <View style={{...styles.contianer,...contianer}}>
      <StatusBar barStyle={barStyle} backgroundColor={statusBarColor} />
      {children}
      <Loader isLoader={isLoader} />
    </View>
  );
}

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: moderateScaleVertical(28),
    paddingHorizontal: moderateScale(15),
  },
});
