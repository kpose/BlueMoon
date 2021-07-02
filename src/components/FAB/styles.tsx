import {StyleSheet} from 'react-native';
import {colors, hp, wp} from '../../utils';

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    height: hp(6),
    width: wp(25),
    bottom: hp(5),
    right: wp(7),
    backgroundColor: colors.PRIMARY,
  },
});

export default styles;
