import {StyleSheet} from 'react-native';
import {colors, hp, wp} from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: hp(2),
  },
  text: {
    color: colors.WARNING,
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: hp(2),
  },
  button: {
    height: hp(5),
    width: wp(25),
    backgroundColor: colors.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(3),
  },
});

export default styles;
