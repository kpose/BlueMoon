import React, {useEffect, useState} from 'react';
import {View, FlatList, Text} from 'react-native';
import styles from './styles';
import {InventoryCard, Fab} from '../../components';
import {AppStackNavigationProps} from '../../types/navigationTypes';
import {getInventory} from '../../utils';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({navigation}: AppStackNavigationProps) => {
  const [inventoryArray, setInventoryArray] = useState([]);

  useEffect(() => {
    loadInventories();
    //clearAll();
  }, []);

  async function clearAll() {
    await AsyncStorage.clear();
  }

  async function loadInventories() {
    const inventory = await getInventory();
    setInventoryArray(inventory);
  }

  const renderInventories = ({item}: any) => (
    <InventoryCard
      title={item.name}
      price={item.price}
      totalStock={item.totalStock}
      testID={item.name}
      onPress={() =>
        navigation.navigate('EditInventory', {
          name: item.name,
          totalStock: item.totalStock,
          price: item.price,
          description: item.description,
          refresh: loadInventories,
        })
      }
    />
  );

  return (
    <View style={styles.container}>
      <Text>Welcome to inventory</Text>
      {inventoryArray && (
        <FlatList
          data={inventoryArray}
          renderItem={renderInventories}
          keyExtractor={item => item.name}
        />
      )}

      <Fab
        onPress={() =>
          navigation.navigate('CreateInventory', {
            refresh: loadInventories,
          })
        }
      />
    </View>
  );
};

export default Home;
