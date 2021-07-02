import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {render, fireEvent, cleanup} from '@testing-library/react-native';
import AppStack from '../src/navigation/AppStack';
import {Home} from '../src/screens';
import {InventoryCard} from '../src/components';

afterEach(cleanup);

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('Testing App Navigation', () => {
  test('page contains the welcome note', async () => {
    const component = (
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    );

    const {findByText} = render(component);
    const welcomeHeader = await findByText('Welcome to inventory');
    expect(welcomeHeader).toBeTruthy();
  });

  /* test('clicking on inventory card takes you to the edit screen', async () => {
    const component = (
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    );

    const {findByText} = render(<Home />);
    const {findByTestId} = render(<InventoryCard />);
    const toClick = await findByTestId('1111');

    fireEvent(toClick, 'press');
    const newHeading = await findByText('1111 Inventory');

    expect(newHeading).toBeTruthy();
  }); */
});
