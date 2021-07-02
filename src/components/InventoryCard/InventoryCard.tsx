import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {fonts} from '../../utils/fonts';
import styles from './styles';

interface Props {
  title: string;
  price: number;
  totalStock: number;
  onPress: () => void;
  testID: string;
}

const InventoryCard = ({title, price, totalStock, onPress, testID}: Props) => {
  return (
    <Pressable style={styles.container} onPress={onPress} testID={testID}>
      <Text style={[fonts.heading, styles.title]}>{title}</Text>
      <Text style={[fonts.subheading, styles.price]}> Price: {price} </Text>
      <Text style={[fonts.subheading, styles.price]}>
        {' '}
        Total Stock: {totalStock}
      </Text>
    </Pressable>
  );
};

export default InventoryCard;
