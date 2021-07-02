import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {Button} from '../../components';
import {colors, createInventory} from '../../utils';
import {fonts} from '../../utils/fonts';
import styles from './styles';
import {Formik} from 'formik';
import * as yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppStackNavigationProps} from '../../types/navigationTypes';

interface inventoryProps {
  name: string;
  price: string;
  totalStock: string;
  description: string;
}

const ValidationSchema = yup.object().shape({
  name: yup.string().required('Email Address is Required'),
  totalStock: yup.number().required('Enter totla stock'),
  price: yup.number().required('Enter a valid price'),
  description: yup
    .string()
    .min(3, ({min}) => `Description must be at least ${min} characters`)
    .required('Describe the inventory'),
});

const CreateInventory = ({navigation, route}: AppStackNavigationProps) => {
  const refresh = route.params.refresh;
  const [nameError, setNameError] = useState(false);

  const saveInventory = (values: inventoryProps) => {
    AsyncStorage.getItem('inventory')
      .then(items => {
        const existing = items ? JSON.parse(items) : [];
        const existingName = existing.filter(function (item: inventoryProps) {
          return item.name === values.name;
        });
        if (existingName.length) {
          setNameError(true);
        } else {
          createInventory(values, refresh);
          navigation.navigate('Home');
        }
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <View style={styles.parentContainer}>
      <View style={styles.container}>
        <Formik
          validationSchema={ValidationSchema}
          initialValues={{name: '', price: '', totalStock: '', description: ''}}
          onSubmit={values => saveInventory(values)}>
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
                placeholder="Enter Name"
                value={values.name}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                style={[styles.input, fonts.textInput]}
                placeholderTextColor={colors.PRIMARY}
                textAlign="center"
                maxLength={20}
                testID="nameID"
              />
              {nameError && (
                <Text style={styles.error}>Inventory already exist!!</Text>
              )}
              {errors.name && touched.name && (
                <Text style={styles.error} testID="nameErrorID">
                  {errors.name}
                </Text>
              )}
              <TextInput
                placeholder="Total Stock"
                maxLength={20}
                value={values.totalStock}
                onChangeText={handleChange('totalStock')}
                onBlur={handleBlur('totalStock')}
                style={[styles.input, fonts.textInput]}
                placeholderTextColor={colors.PRIMARY}
                textAlign="center"
                keyboardType="number-pad"
                testID="totalID"
              />
              {errors.totalStock && touched.totalStock && (
                <Text style={styles.error}>{errors.totalStock}</Text>
              )}
              <TextInput
                placeholder="Price"
                maxLength={20}
                value={values.price}
                onChangeText={handleChange('price')}
                onBlur={handleBlur('price')}
                style={[styles.input, fonts.textInput]}
                placeholderTextColor={colors.PRIMARY}
                textAlign="center"
                keyboardType="number-pad"
                testID="priceID"
              />
              {errors.price && touched.price && (
                <Text style={styles.error}>{errors.price}</Text>
              )}
              {errors.description && touched.description && (
                <Text style={styles.error}>{errors.description}</Text>
              )}
              <TextInput
                placeholder="Description"
                value={values.description}
                onChangeText={handleChange('description')}
                onBlur={handleBlur('description')}
                style={[styles.description, fonts.textInput]}
                multiline={true}
                placeholderTextColor={colors.PRIMARY}
                testID="descriptionID"
              />

              <Button
                title="Submit"
                onPress={handleSubmit}
                disabled={!isValid}
                testID="buttonID"
              />
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default CreateInventory;
