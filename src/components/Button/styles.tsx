import {StyleSheet} from 'react-native';
import {colors, hp, wp} from '../../utils';

const styles = StyleSheet.create({
  container: {},
  button: {
    height: hp(7),
    width: wp(50),
    borderRadius: wp(5),
    backgroundColor: colors.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  text: {
    fontWeight: 'bold',
  },
});

export default styles;
