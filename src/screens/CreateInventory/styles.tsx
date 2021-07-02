import {StyleSheet} from 'react-native';
import {colors, hp, wp} from '../../utils';

const styles = StyleSheet.create({
  parentContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    height: hp(70),
    width: wp(95),
    backgroundColor: colors.LIGHT_GRAY,
    borderRadius: wp(2),
    //alignSelf: 'center',
    marginTop: hp(1),
    marginBottom: hp(2),
    elevation: hp(10),
  },
  input: {
    width: wp(80),
    height: hp(7),
    borderRadius: wp(3),
    alignSelf: 'center',
    marginTop: hp(2),
    backgroundColor: colors.BLACK,
    color: colors.WHITE,
  },
  description: {
    width: wp(80),
    height: hp(20),
    borderRadius: wp(3),
    alignSelf: 'center',
    marginTop: hp(2),
    marginBottom: hp(4),
    backgroundColor: colors.BLACK,
    color: colors.WHITE,
  },
  error: {
    color: colors.WARNING,
    alignSelf: 'center',
    marginTop: hp(0.2),
  },
});

export default styles;
