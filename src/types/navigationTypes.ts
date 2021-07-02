import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';


export type AppStackParamList = {
  Home: undefined;
  CreateInventory: {refresh: any};
  EditInventory: {name: string, totalStock: string, price: string, description: string, refresh: Function}
};

type AppStackNavigationProp = StackNavigationProp<
  AppStackParamList,
  'Home'
>;

type AppStackRouteProp = RouteProp<AppStackParamList, 'EditInventory'>;

export type AppStackNavigationProps = {
  navigation: AppStackNavigationProp;
  route: AppStackRouteProp
};

