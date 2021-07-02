import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {fonts} from '../../utils/fonts';
import styles from './styles';

interface Props {
  onPress: () => void;
}

const Fab = ({onPress}: Props) => {
  return (
    <Pressable style={styles.buttonContainer} onPress={onPress}>
      <Text style={[fonts.buttonText]}>Create</Text>
    </Pressable>
  );
};

export default Fab;
