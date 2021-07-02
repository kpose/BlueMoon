import {createInventory, getInventory, deleteInventory} from '../src/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';

beforeEach(async () => {
  await AsyncStorage.clear();
});

describe('get inventory', () => {
  test('if no result at key, return an empty array', async () => {
    const result = await getInventory();
    expect(result).toEqual([]);
  });

  test('Returns an aray of saved inventories', async () => {
    AsyncStorage.setItem('inventory', JSON.stringify([{id: 1}]));
    const result = await getInventory();
    expect(result).toEqual([{id: 1}]);
  });
});

describe('create inventory', () => {
  test('if inventory is empty, add new invwntory', async () => {
    await createInventory({id: 1});
    const result = await getInventory();
    expect(result).toEqual([{id: 1}]);
  });

  test('Add most recent inventory to top of list', async () => {
    await createInventory({id: 1});
    await createInventory({id: 2});
    const result = await getInventory();
    expect(result).toEqual([{id: 2}, {id: 1}]);
  });
});

/* describe('delete inventory', () => {
  test('It should delete a given inventory from storage', async () => {
    await createInventory({id: 1});
    await createInventory({id: 2});
    const result = await deleteInventory({id: 2});
    expect(result).toEqual([{id: 1}]);
  })
}) */
