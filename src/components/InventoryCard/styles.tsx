import {StyleSheet} from 'react-native';
import {colors, hp, wp} from '../../utils';

const styles = StyleSheet.create({
  container: {
    height: hp(13),
    width: wp(95),
    backgroundColor: colors.LIGHT_GRAY,
    borderRadius: wp(3),
    marginTop: hp(2),
  },
  title: {
    textAlign: 'center',
    marginTop: hp(0.5),
    fontWeight: 'bold',
  },
  price: {
    marginTop: hp(1),
  },
});

export default styles;
