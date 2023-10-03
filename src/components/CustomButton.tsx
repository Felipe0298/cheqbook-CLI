import React from 'react';
import { TouchableWithoutFeedback, View, Text, Image, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

interface ButtonProps {
  buttonState: {
    backgroundColor: string;
    textColor: string;
  };
  handlePressIn: () => void;
  handlePressOut: () => void;
  buttonText: string;
  imageSource?: any;
}

const CustomButton: React.FC<ButtonProps> = ({ buttonState, handlePressIn, handlePressOut, buttonText, imageSource }) => (
  <TouchableWithoutFeedback
    onPressIn={handlePressIn}
    onPressOut={handlePressOut}
  >
    <View style={[
      styles.buttonContainer,
      {
        backgroundColor: buttonState.backgroundColor,
        borderColor: 'black',
        flexDirection: 'row',
        alignItems: 'center',
      },
    ]}>
      {imageSource && (
        <Image
          source={imageSource}
          style={{
            width: wp('6%'), 
            height: hp('3%'), 
            marginRight: wp('5%'), 
          }}
          resizeMode="contain"
        />
      )}
      <Text style={[styles.buttonText, { color: buttonState.textColor }]}>
        {buttonText}
      </Text>
    </View>
  </TouchableWithoutFeedback>
);

export const styles = StyleSheet.create({
  buttonContainer: {
    borderWidth: 1.5,
    paddingVertical: hp('1%'), 
    paddingHorizontal: wp('5%'), 
    borderRadius: wp('2.5%'), 
    marginTop: hp('1%'), 
  },
  buttonText: {
    fontSize: hp('2.25%'), 
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default CustomButton;
