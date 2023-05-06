import { Dimensions, Platform } from 'react-native';
import Toast from 'react-native-toast-message';

export const showToast = (text) => {
  Toast.show({
    text1: text,
    type: 'success',
    visibilityTime: 2500,
    autoHide: true,
    position: 'bottom',
    bottomOffset: 0,
  })
};

export const isTablet = () => {
  const { height, width } = Dimensions.get('window');
  const aspectRatio = height / width;

  if (Platform.OS === 'ios') {
    return aspectRatio < 1.6;
  } else {
    return aspectRatio < 1.1;
  }
};

export const isMobile = () => !isTablet();

export const isIOS = () => Platform.OS === 'ios';

export const isEmptyObject = (obj) => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)){
      return false;
    }
    return true;
  }
};
