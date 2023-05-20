import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from '@utils/responsiveUI';
import {colors} from '@styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: responsiveFontSize(3),
    color: colors.black,
  },
  test: {
    height: responsiveHeight(5),
    width: responsiveWidth(10),
    backgroundColor: colors.black,
  },
});
