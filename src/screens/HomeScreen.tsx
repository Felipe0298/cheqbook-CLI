import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import FlatListScreen from '../components/FlatListScreen';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


interface Props extends StackScreenProps<any, any> {}

export const HomeScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>

      <View style={styles.flatListContainer}>
        <FlatListScreen />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('LoginScreen')}
          style={styles.buttons}
          activeOpacity={0.5}>
          <Text style={styles.text}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignUpScreen')}
          style={styles.buttons}
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
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('2%'),
  },
  buttons: {
    backgroundColor: '#1e8536',
    borderRadius: 100,
    height: hp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1, 
    marginHorizontal: wp('2%'), 
    marginBottom: hp('2%')
  },
  text: {
    fontSize: hp('2.5%'),
    color: 'white',
    textAlign: 'center',
  },
});
