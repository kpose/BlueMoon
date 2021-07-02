import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, CreateInventory, EditInventory} from '../screens';
import {AppStackParamList} from '../types/navigationTypes';

const Stack = createStackNavigator<AppStackParamList>();

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CreateInventory" component={CreateInventory} />
      <Stack.Screen name="EditInventory" component={EditInventory} />
    </Stack.Navigator>
  );
}

export default AppStack;
