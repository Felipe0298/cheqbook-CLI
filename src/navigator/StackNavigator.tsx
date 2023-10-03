import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { SignUpScreen } from '../screens/SignUpScreen';
import CheqbookLogoHeader from '../components/CheqbookLogoHeader';

const Stack = createStackNavigator();

export function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen" // Establecer HomeScreen como la pantalla inicial
      screenOptions={{
        cardStyle: { backgroundColor: 'white' },
        headerStyle: {
          backgroundColor: 'white',
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        headerBackTitle: '',
      }}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          header: () => (
            <CheqbookLogoHeader logoWidthPercentage={70} />
          ),
        }}
      />
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}
