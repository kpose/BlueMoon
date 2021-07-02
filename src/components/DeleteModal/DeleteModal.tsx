import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../utils';
import {fonts} from '../../utils/fonts';
import styles from './styles';

interface Props {
  title: string;
  onDelete: () => void;
  onCancel: () => void;
}

const DeleteModal = ({title, onDelete, onCancel}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, fonts.caption]}>
        Are you sure you want to delete this {title} inventory?
      </Text>
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.button} onPress={onCancel}>
          <Text>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onDelete}
          style={[styles.button, {backgroundColor: colors.WARNING}]}>
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DeleteModal;
