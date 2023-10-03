import { render, fireEvent, act } from '@testing-library/react-native';
import React from 'react';
import { App } from '../App';
import { Dimensions } from 'react-native';
import FlatListScreen from '../src/components/FlatListScreen';


test('navigates to LoginScreen when pressing Log In', () => {
  const { getByText, queryByText } = render(<App />);

  // Find the "Log In" button
  const button = getByText('Log In');

  // Verify that the LoginScreen is not visible at the beginning
  expect(queryByText('Forgot password?')).toBeNull();

  // Simulate a press event on the button wrapped in act
  act(() => {
    fireEvent.press(button);
  });

  // Verify that the "LoginScreen" is visible after pressing the button
  expect(getByText('Forgot password?')).toBeTruthy();
});

test('navigates to SignUpScreen when pressing SignUp Free', () => {
  const { getByText, queryByText } = render(<App />);

  // Find the "Sign Up Free" button
  const button = getByText('Sign Up Free');

  // Verify that the SignUpScreen is not visible at the beginning
  expect(queryByText('SignUpScreen')).toBeNull();

  // Simulate a press event on the button wrapped in act
  act(() => {
    fireEvent.press(button);
  });

  // Verify that the "footer text" is visible after pressing the button
  expect(getByText('We guarantee 100% privacy. Your financial information will not be shared.')).toBeTruthy();
});

test('FlatListScreen changes information when swiping', () => {
  const { getByText, getByTestId } = render(<FlatListScreen />);

  // Verify that the text of the first slide is rendered
  expect(getByText('Slide 1: Swipe to learn more')).toBeTruthy();

  // Find the FlatList
  const flatList = getByTestId('flat-list');

  // Simulate a scroll event on the FlatList wrapped in act
  act(() => {
    fireEvent(flatList, 'onMomentumScrollEnd', {
      nativeEvent: {
        contentOffset: {
          x: Dimensions.get('window').width, // Make sure to adjust this value to your slide width
        },
      },
    });
  });

  // Verify that the text of the second slide is rendered
  expect(getByText('Slide 2: Swipe to learn more')).toBeTruthy();
});