import * as React from 'react';
import renderer from 'react-test-renderer';
import {render, cleanup} from '@testing-library/react-native';
import {Home, EditInventory, CreateInventory} from '../src/screens';

afterEach(cleanup);

describe('Snapshot text of different screens', () => {
  const {} = render(<Home />);

  const mockedParams = {
    route: {params: {refresh: Function}},
    navigation: '',
  };

  it('home screen renders correctly', () => {
    const tree = renderer.create(<Home />);
    expect(tree).toMatchSnapshot();
  });

  it('Create screen renders correctly', () => {
    const tree = renderer.create(<CreateInventory {...mockedParams} />);
    expect(tree).toMatchSnapshot();
  });

  it('Edit screen renders correctly', () => {
    const tree = renderer.create(<EditInventory {...mockedParams} />);
    expect(tree).toMatchSnapshot();
  });
});
