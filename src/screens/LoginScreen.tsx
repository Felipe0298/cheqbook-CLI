import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import CustomButton from '../components/CustomButton';
import CheqbookLogoHeader from '../components/CheqbookLogoHeader';
import { useButtonStates } from '../hooks/useButtonStates ';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StackScreenProps } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props extends StackScreenProps<any, any> { }

export const LoginScreen = ({ navigation }: Props) => {

  const { buttonStates, handleButtonPressIn, handleButtonPressOut } = useButtonStates();

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={{
            marginBottom: hp('2%')
          }}>
            <CheqbookLogoHeader logoWidthPercentage={70} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              style={styles.input}
              selectionColor="gray"
              testID='emailInput'
            />
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              selectionColor="gray"
              testID='passwordInput'
            />
          </View>

          <CustomButton
            buttonState={buttonStates.login}
            handlePressIn={() => handleButtonPressIn('login')}
            handlePressOut={() => handleButtonPressOut('login')}
            buttonText="Login"
          />

          <View style={styles.separatorContainer}>
            <View style={styles.separatorLine} />
            <Text style={styles.separatorText}>OR</Text>
            <View style={styles.separatorLine} />
          </View>

          <View style={styles.buttonContainer}>
            <View>
              <CustomButton
                buttonState={buttonStates.receiveLoginLink}
                handlePressIn={() => handleButtonPressIn('receiveLoginLink')}
                handlePressOut={() => handleButtonPressOut('receiveLoginLink')}
                buttonText="Receive Login Link"
                imageSource={buttonStates.receiveLoginLink.textColor === 'black' ?
                  require('../../assets/icon-link-black.png') : require('../../assets/icon-link-white.png')}
              />
            </View>

            <View>
              <CustomButton
                buttonState={buttonStates.loginWithGoogle}
                buttonText='Login with Google'
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
                buttonText="Login with Facebook"
                imageSource={require('../../assets/facebook-logo.png')}
              />
            </View>

            <View>
              <CustomButton
                buttonState={buttonStates.loginWithLinkedIn}
                handlePressIn={() => handleButtonPressIn('loginWithLinkedIn')}
                handlePressOut={() => handleButtonPressOut('loginWithLinkedIn')}
                buttonText="Login with LinkedIn"
                imageSource={require('../../assets/linkedin-logo.png')}
              />
            </View>
          </View>

          <View style={{
            marginVertical: hp('1%'),
          }}>
            <View style={styles.linkContainer}>
              <TouchableOpacity>
                <Text style={styles.linkText}>Forgot password?</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.linkContainer}>
              <TouchableOpacity>
                <Text style={styles.linkText}>Didn't Receive Confirmation?</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.separatorContainer}>
            <View style={styles.separatorLine} />
          </View>

          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Don't have an account?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('SignUpScreen')}
            >
              <Text style={styles.signUpButton} testID='redirect-to-signup'>Sign up</Text>
            </TouchableOpacity>
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
    margin: '5%',
  },
  inputContainer: {
    width: wp('80%'),
  },
  inputLabel: {
    fontSize: hp('2.5%'),
    marginBottom: hp('1%'),
    fontWeight: 'bold',
    textAlign: 'center',
    color:'black'
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
    marginVertical: hp('1%'),
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
    width: '75%',
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
  signUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('1%'),
  },
  signUpText: {
    fontSize: hp('2%'),
    marginRight: wp('2%'),
    fontWeight: 'bold',
  },
  signUpButton: {
    fontSize: hp('2%'),
    fontWeight: 'bold',
    color: 'blue',
  },
});


export default LoginScreen;