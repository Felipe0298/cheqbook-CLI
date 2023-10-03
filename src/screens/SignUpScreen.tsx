import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import CheqbookLogoHeader from '../components/CheqbookLogoHeader';
import CustomButton from '../components/CustomButton';
import { useButtonStates } from '../hooks/useButtonStates ';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StackScreenProps } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';
import CheckBox from '../components/CheckBox';

interface Props extends StackScreenProps<any, any> { }

export const SignUpScreen = ({ navigation, route }: Props) => {

  const { buttonStates, handleButtonPressIn, handleButtonPressOut } = useButtonStates();

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={{
            flex: 1,
            marginVertical: '2%'
          }}>
            <CheqbookLogoHeader logoWidthPercentage={70} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Name</Text>
            <TextInput
              style={styles.input}
              selectionColor="gray"
              testID='nameInput'
            />
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              selectionColor="gray"
              testID='emailInput'
            />
          </View>

          <CustomButton
            buttonState={buttonStates.login}
            handlePressIn={() => handleButtonPressIn('login')}
            handlePressOut={() => handleButtonPressOut('login')}
            buttonText="Sign up"
          />

          <View style={{
            width: '80%', marginTop: hp('1.5%')
          }}>
            <CheckBox navigation={navigation} route={route} />
          </View>

          <View style={styles.separatorContainer}>
            <View style={styles.separatorLine} />
            <Text style={styles.separatorText}>OR</Text>
            <View style={styles.separatorLine} />
          </View>

          <View style={styles.buttonContainer}>
            <View>
              <CustomButton
                buttonState={buttonStates.loginWithGoogle}
                buttonText='Sign up with Google'
                handlePressIn={() => handleButtonPressIn('loginWithGoogle')}
                handlePressOut={() => handleButtonPressOut('loginWithGoogle')}
                imageSource={require('../../assets/google-logo.png')}
              />
            </View>

            <View>
              <CustomButton
                buttonState={buttonStates.loginWithFacebook}
                handlePressIn={() => handleButtonPressIn('loginWithFacebook')}
                handlePressOut={() => handleButtonPressOut('loginWithFacebook')}
                buttonText="Sign up with Facebook"
                imageSource={require('../../assets/facebook-logo.png')}
              />
            </View>

            <View>
              <CustomButton
                buttonState={buttonStates.loginWithLinkedIn}
                handlePressIn={() => handleButtonPressIn('loginWithLinkedIn')}
                handlePressOut={() => handleButtonPressOut('loginWithLinkedIn')}
                buttonText="Sign up with LinkedIn"
                imageSource={require('../../assets/linkedin-logo.png')}
              />
            </View>
          </View>

          <View style={styles.separatorContainer}>
            <View style={styles.separatorLine} />
          </View>

          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('LoginScreen')}
              testID='redirect-to-login'
            >
              <Text style={styles.signUpButton}>Log in</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>We guarantee 100% privacy. Your financial information will not be shared.</Text>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: '5%'
  },
  inputContainer: {
    width: wp('80%'),
  },
  inputLabel: {
    fontSize: hp('2.5%'),
    marginBottom: hp('1%'),
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black'
  },
  input: {
    borderWidth: 1.5,
    borderColor: 'black',
    borderRadius: wp('2.5%'),
    paddingHorizontal: wp('2%'),
    marginBottom: hp('1%'),
    paddingVertical: hp('0.5%'),
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('1%'),
    width: wp('80%'),
  },
  separatorLine: {
    flex: 1,
    height: hp('0.4%'),
    backgroundColor: 'gray',
  },
  separatorText: {
    fontSize: hp('2.5%'),
    marginHorizontal: wp('2%'),
    fontWeight: 'bold',
    color: 'gray',
  },
  buttonContainer: {
    width: '73%',
    marginVertical: hp('1.5%')
  },
  linkContainer: {
    marginTop: hp('0.5%'),
    alignItems: 'center',
  },
  linkText: {
    color: 'blue',
    fontSize: hp('2%'),
    fontWeight: 'bold',
    marginRight: wp('2%'),
  },
  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('1%'),
  },
  loginText: {
    fontSize: hp('2%'),
    marginRight: wp('2%'),
    fontWeight: 'bold',
    color: 'black'
  },
  signUpButton: {
    fontSize: hp('2%'),
    fontWeight: 'bold',
    color: 'blue',
  },
  footerContainer: {
    width: '90%',
    marginTop: hp('1%')
  },
  footerText: {
    fontSize: hp('1.6%'),
    textAlign: 'center',
    color: 'gray',
    fontWeight: '600',
  }
});


export default SignUpScreen;