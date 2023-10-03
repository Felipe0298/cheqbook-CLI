import 'react-native-gesture-handler';
import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from '../src/navigator/StackNavigator';

test('App renders correctly', () => {
  const {} = render(
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
});

test('App starts on HomeScreen with CheqbookLogoHeader', () => {
  const { getByTestId } = render(
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );

  const cheqbookLogoHeaderElement = getByTestId('cheqbook-logo');
  expect(cheqbookLogoHeaderElement).toBeDefined();
});
