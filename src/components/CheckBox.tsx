import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> { }

const CheckBox = ({navigation}: Props) => {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={{
      flexDirection: 'row',
    }}>
      <TouchableWithoutFeedback style={styles.container} onPress={() => setSelection(!isSelected)}>
        <View style={isSelected ? styles.boxSelected : styles.box} />
      </TouchableWithoutFeedback>
      <Text style={styles.label}>By checking this box I expressly agree with Cheqbook’s
        <Text
          style={{ color: 'blue' }}
          onPress={() => navigation.navigate('TermsAndConditions')}
        >
          {' '}Terms and Conditions{' '}
        </Text>

        &
        <Text
          style={{ color: 'blue' }}
          onPress={() => navigation.navigate('SecurityAndPrivacyPolicy')}
        >
          {' '}Security and Privacy Policy
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  box: {
    height: hp('4%'),
    width: wp('6%'),
    borderWidth: 2,
    borderColor: '#000',
    marginRight: wp('2%'),
    borderRadius: 5
  },
  boxSelected: {
    height: hp('4%'),
    width: wp('6%'),
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: '#000',
    marginRight: wp('2%'),
    borderRadius: 5
  },
  label: {
    fontSize: hp('1.7%'),
    flexWrap: 'wrap',
    flex: 1,
    textAlign: 'justify',
    fontWeight:'700'
  },
});

export default CheckBox;
