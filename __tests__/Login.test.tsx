import { fireEvent, render } from '@testing-library/react-native';
import LoginScreen from '../src/screens/LoginScreen';
import { RouteProp } from '@react-navigation/native';
import { act } from 'react-test-renderer';

const navigation: any = {
  navigate: jest.fn(),
};

const route: RouteProp<any, 'LoginScreen'> = {
  key: 'login',
  name: 'LoginScreen',
};

test('renders email and password inputs', () => {

  const { getByTestId } = render(
    <LoginScreen navigation={navigation} route={route} />
  );

  const emailInput = getByTestId('emailInput');
  const passwordInput = getByTestId('passwordInput');

  expect(emailInput).toBeTruthy();
  expect(passwordInput).toBeTruthy();
});

test('can type in email and password inputs', () => {
  const { getByTestId } = render(
    <LoginScreen navigation={navigation} route={route} />
  );

  const emailInput = getByTestId('emailInput');
  const passwordInput = getByTestId('passwordInput');

  fireEvent.changeText(emailInput, 'example@email.com');
  fireEvent.changeText(passwordInput, 'password123');
});

test('navigates to SignUpScreen when pressing Sign up', () => {
  const { getByTestId } = render(<LoginScreen navigation={navigation} route={route}/>);

  const signUpButton = getByTestId('redirect-to-signup');

  // Simulate a press event on the button wrapped in act
  act(() => {
    fireEvent.press(signUpButton);
  });

  // Verify that the navigate function was called with 'SignUpScreen'
  expect(navigation.navigate).toHaveBeenCalledWith('SignUpScreen');
});