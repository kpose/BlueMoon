import AsyncStorage from '@react-native-async-storage/async-storage';

export const createInventory = (newInventory: {}, refresh: Function) => {
  AsyncStorage.getItem('inventory')
    .then(inventory => {
      const existingInventory = inventory ? JSON.parse(inventory) : [];
      //existingInventory.push(newInventory);
      const updatedInventory = [newInventory, ...existingInventory];
      AsyncStorage.setItem('inventory', JSON.stringify(updatedInventory));
    })
    .then(() => {
      refresh();
    })
    .catch(e => {
      console.log(e);
    });
};

export async function getInventory() {
  const inventory = await AsyncStorage.getItem('inventory');
  if (inventory) {
    let newInventory = JSON.parse(inventory);
    return newInventory;
  }
  return [];
}

export const deleteInventory = (name: string, refresh: Function) => {
  AsyncStorage.getItem('inventory')
    .then(items => {
      let inventory = JSON.parse(items);
      const newInventory = inventory.filter(function (item: any) {
        return item.name !== name;
      });
      AsyncStorage.setItem('inventory', JSON.stringify(newInventory));
    })
    .then(() => {
      refresh();
    })
    .catch(e => {
      console.log(e);
    });
};
