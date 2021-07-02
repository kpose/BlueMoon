import {StyleSheet} from 'react-native';
import {colors, hp, wp} from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  fab: {
    position: 'absolute',
    margin: wp(7),
    right: 0,
    bottom: 0,
    backgroundColor: colors.PRIMARY,
  },
});

export default styles;
