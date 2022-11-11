import React, { useState } from 'react';

import {
  Text,
  Image,
  TextInput,
  View,
  Pressable,
  StyleSheet,
  Alert,
} from 'react-native';
import Logo from '../../assets/icons/Logo.png';
import { verifyOTP, resentOTP } from '../../api/api';

const OtpVerifyScreen = ({ navigation }) => {
  const [otp, setOTP] = useState('');
  const handleVerifyOTP = async () => {
    const data = await verifyOTP(otp)
    if (data) {
      navigation.navigate("PersonalDetails")
    }
   else{
    Alert.alert('Somthing went wrong');
    // navigation.navigate("PersonalDetails")
   }

  }
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#A400FF',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={Logo} style={{ width: '40%', height: 30 }} />
      </View>
      <View style={{ flex: 2 }}>
        <View
          style={{
            marginTop: -80,
            elevation: 8,
            borderRadius: 8,
            backgroundColor: 'white',
            margin: 15,
            padding: 15,
          }}>
          <Text style={{ color: '#051F4E', fontSize: 25, fontWeight: 'bold' }}>
            OTP Verfication
          </Text>
          <Text style={{ color: '#77838F', fontSize: 14, marginBottom: 30 }}>
            Enter 6 digit OTP that has been sent to your registered mobile
            number or email address.
          </Text>
          <Text
            style={{
              marginTop: 30,
              fontWeight: 'bold',
              color: '#051F4E',
              fontSize: 14,
              letterSpacing: 1,
            }}>
            OTP Number
          </Text>

          <TextInput
            onChangeText={e => {setOTP(e) ; 
           }}
            placeholder="Enter OTP here"
            keyboardType="numeric"
            style={{
              height: 50,
              marginTop: 8,
              borderWidth: 1,
              borderRadius: 8,
              borderColor: '#D1D5DB',
              backgroundColor: 'white',
              paddingHorizontal: 10,
              paddingVertical: 10,
            }}
          />
          {/* <Pressable onPress={() => navigation.navigate('PersonalDetails')}> */}
          <Pressable onPress={() => handleVerifyOTP() }>
            <View
              style={{
                marginVertical: 20,
                backgroundColor: '#0F6BBF',
                borderRadius: 50,
                height: 49,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
                Confirm OTP
              </Text>
            </View>
          </Pressable>

          <View
            style={{
              flexDirection: 'row',
              marginBottom: 25,
              justifyContent: 'center',
            }}>
            <Text>
              Didn’t receive the OTP yet?
              <Text
                style={{
                  color: '#0F6BBF',
                  paddingHorizontal: 10,
                  textDecorationLine: 'underline',
                  letterSpacing: 0.5,
                }}>
                Resend OTP
              </Text>
            </Text>
          </View>
          {/* <Text
            style={{
              marginTop: 5,
              color: '#77838F',
              fontSize: 14,
              letterSpacing: 0.5,
            }}>
            By clicking Agree & Sign up, you agree to
          </Text>
          <Text
            style={{
              color: '#77838F',
              fontSize: 14,
              letterSpacing: 0.5,
            }}>
            <Text style={{color: '#0F6BBF'}}> Terms & Conditions </Text> and
            <Text style={{color: '#0F6BBF'}}> Privacy Policy. </Text>
          </Text> */}
        </View>
      </View>

      {/* <Text style={this.styles.header}>
        Welcome to React Native Storybook
      </Text>
      <Text style={this.styles.content}>
        This is a UI Component development environment for your React Native
        app. Here you can display and interact with your UI components as
        stories. A story is a single state of one or more UI components. You
        can have as many stories as you want. In other words a story is like a
        visual test case.
      </Text>
      <Text style={this.styles.content}>
        We have added some stories inside the "storybook/stories" directory
        for examples. Try editing the "storybook/stories/Welcome.js" file to
        edit this message.
      </Text> */}
      {/* <View
        style={{
          flexDirection: 'row',
          marginBottom: 25,
          justifyContent: 'center',
        }}>
        <Text>
          Already a member?
          <Text
            style={{
              color: '#0F6BBF',
              paddingHorizontal: 10,
              textDecorationLine: 'underline',
              letterSpacing: 0.5,
            }}>
            Login
          </Text>
        </Text>
      </View> */}
    </View>
  );
};
const styles = StyleSheet.create({
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },
});
export default OtpVerifyScreen;
