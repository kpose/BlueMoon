import React, {useRef} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {Button, DeleteModal} from '../../components';
import {colors, hp, deleteInventory, createInventory} from '../../utils';
import {fonts} from '../../utils/fonts';
import styles from './styles';
import {Formik} from 'formik';
import * as yup from 'yup';
import {AppStackNavigationProps} from '../../types/navigationTypes';
import {Modalize} from 'react-native-modalize';
import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ValidationSchema = yup.object().shape({
  name: yup.string().required('Inventory name is Required'),
  totalStock: yup.number().required('Enter total stock'),
  price: yup.number().required('Enter a valid price'),
  description: yup
    .string()
    .min(3, ({min}) => `Description must be at least ${min} characters`)
    .required('Describe the inventory'),
});

interface inventoryProps {
  name: string;
  price: string;
  totalStock: string;
  description: string;
}

const EditInventory = ({route, navigation}: AppStackNavigationProps) => {
  const {name, totalStock, price, description, refresh} = route.params;
  const modalizeRef = useRef<Modalize>(null);
  //const [isDisabledButton, setIsDisabledButton] = useState(true);
  const [nameError, setNameError] = useState(false);

  const openModal = () => {
    modalizeRef.current?.open();
  };

  const closeModal = () => {
    modalizeRef.current?.close();
  };

  const deleteItem = () => {
    deleteInventory(name, refresh);
    navigation.navigate('Home');
  };

  const updateInventory = (values: inventoryProps) => {
    const oldInventory = JSON.stringify({name, price, totalStock, description});
    const newInventory = JSON.stringify(values);

    /* if (oldInventory === newInventory) {
      setIsDisabledButton(true);
    } else {
      setIsDisabledButton(false);
    } */

    AsyncStorage.getItem('inventory')
      .then(items => {
        const existing = items ? JSON.parse(items) : [];
        const existingName = existing.filter(function (item: any) {
          return item.name === values.name;
        });
        console.log(existingName);
        if (existingName.length) {
          setNameError(true);
        } else {
          const objIndex = existing.findIndex(
            (obj: inventoryProps) => obj.name === name,
          );
          const updatedObj = {
            ...existing[objIndex],
            name: values.name,
            price: values.price,
            totalStock: values.totalStock,
            description: values.description,
          };
          const updatedInventory = [
            ...existing.slice(0, objIndex),
            updatedObj,
            ...existing.slice(objIndex + 1),
          ];

          AsyncStorage.setItem('inventory', JSON.stringify(updatedInventory));
          refresh();
          navigation.navigate('Home');
        }
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <View style={styles.parentContainer}>
      <Modalize ref={modalizeRef} modalHeight={hp(20)}>
        <DeleteModal title={name} onCancel={closeModal} onDelete={deleteItem} />
      </Modalize>

      <Text style={[fonts.subheading, styles.subheading]}>
        {name} Inventory
      </Text>
      <View style={styles.container}>
        <Formik
          validationSchema={ValidationSchema}
          initialValues={{
            name: name,
            price: price,
            totalStock: totalStock,
            description: description,
          }}
          onSubmit={values => updateInventory(values)}>
          {({
            handleSubmit,
            handleChange,
            values,
            handleBlur,
            errors,
            touched,
            isValid,
          }) => (
            <>
              <TextInput
                value={values.name}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                style={[styles.input, fonts.textInput]}
                placeholderTextColor={colors.PRIMARY}
                textAlign="center"
              />
              {nameError && (
                <Text style={styles.error}>Inventory already exist!!</Text>
              )}
              {errors.name && touched.name && (
                <Text style={styles.error}>{errors.name}</Text>
              )}
              <TextInput
                placeholder={totalStock}
                value={values.totalStock}
                onChangeText={handleChange('totalStock')}
                onBlur={handleBlur('totalStock')}
                style={[styles.input, fonts.textInput]}
                placeholderTextColor={colors.PRIMARY}
                textAlign="center"
                keyboardType="number-pad"
              />
              {errors.totalStock && touched.totalStock && (
                <Text style={styles.error}>{errors.totalStock}</Text>
              )}
              <TextInput
                placeholder={price}
                value={values.price}
                onChangeText={handleChange('price')}
                onBlur={handleBlur('price')}
                style={[styles.input, fonts.textInput]}
                placeholderTextColor={colors.PRIMARY}
                textAlign="center"
                keyboardType="number-pad"
              />
              {errors.price && touched.price && (
                <Text style={styles.error}>{errors.price}</Text>
              )}
              {errors.description && touched.description && (
                <Text style={styles.error}>{errors.description}</Text>
              )}
              <TextInput
                placeholder={description}
                value={values.description}
                onChangeText={handleChange('description')}
                onBlur={handleBlur('description')}
                style={styles.description}
                multiline={true}
                placeholderTextColor={colors.PRIMARY}
              />

              <Button
                title="Update"
                onPress={handleSubmit}
                //disabled={isDisabledButton}
              />
            </>
          )}
        </Formik>
        <TouchableOpacity onPress={openModal}>
          <Text style={[styles.delete, fonts.caption]}>
            Delete this Inventory
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditInventory;
