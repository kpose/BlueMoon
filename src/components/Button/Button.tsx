import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../utils';
import {fonts} from '../../utils/fonts';
import styles from './styles';

interface Props {
  onPress: () => void;
  title: string;
  disabled?: boolean;
  testID?: string;
}

const Button = ({onPress, title, disabled, testID}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && {backgroundColor: colors.WHITE}]}
      onPress={onPress}
      disabled={disabled}
      testID={testID}>
      <Text style={[styles.text, fonts.buttonText]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
