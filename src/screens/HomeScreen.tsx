import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import FlatListScreen from '../components/FlatListScreen';

interface Props extends StackScreenProps<any, any> {}

export const HomeScreen = ({ navigation, route }: Props) => {
  return (
    <View style={styles.container}>

      <View style={styles.flatListContainer}>
        <FlatListScreen />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('LoginScreen')}
          style={styles.login}
          activeOpacity={0.5}>
          <Text style={styles.text}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignUpScreen')}
          style={styles.signup}
          activeOpacity={0.5}>
          <Text style={styles.text}>Sign Up Free</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  login: {
    backgroundColor: '#1e8536',
    borderRadius: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1, 
    marginHorizontal: 10, 
  },
  signup: {
    backgroundColor: '#1e8536',
    borderRadius: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1, 
    marginHorizontal: 10, 
  },
  text: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
});
