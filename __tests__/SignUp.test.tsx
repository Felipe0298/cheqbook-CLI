import { fireEvent, render } from '@testing-library/react-native';
import { RouteProp } from '@react-navigation/native';
import { act } from 'react-test-renderer';
import SignUpScreen from '../src/screens/SignUpScreen';

const navigation: any = {
  navigate: jest.fn(),
};

const route: RouteProp<any, 'SignUp'> = {
  key: 'singup',
  name: 'SignUp'
};

test('renders email and password inputs', () => {

  const { getByTestId } = render(
    <SignUpScreen navigation={navigation} route={route} />
  );

  const nameInput = getByTestId('nameInput');
  const emailInput = getByTestId('emailInput');

  expect(nameInput).toBeTruthy();
  expect(emailInput).toBeTruthy();
});

test('can type in email and password inputs', () => {
  const { getByTestId } = render(
    <SignUpScreen navigation={navigation} route={route} />
  );

  const nameInput = getByTestId('nameInput');
  const emailInput = getByTestId('emailInput');

  fireEvent.changeText(nameInput, 'name');
  fireEvent.changeText(emailInput, 'example@email.com');
});

test('navigates to SignUpScreen when pressing Sign up', () => {
  const { getByTestId } = render(<SignUpScreen navigation={navigation} route={route} />)

  const loginButton = getByTestId('redirect-to-login');

  // Simulate a press event on the button wrapped in act
  act(() => {
    fireEvent.press(loginButton);
  });

  // Verify that the navigate function was called with 'SignUpScreen'
  expect(navigation.navigate).toHaveBeenCalledWith('LoginScreen');
});
