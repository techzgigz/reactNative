import React, { useState } from 'react';
import { Text, Image, TextInput, View, TouchableOpacity,Alert } from 'react-native';
import Logo from '../../assets/icons/Logo.png';
import { verifyOTP, resentOTP } from '../../api/api';
import TextInputWithLabels from '../../components/TextInputWithLabels';
import { WINDOW_WIDTH } from '../../utils/style';

const OtpVerifyScreen = ({ navigation }) => {

  const [otp, setOtp] = useState('')

  const onPress = async () => {
    const data = await verifyOTP(otp)
    if (data) {
      navigation.navigate("ResetPassword")
    }
   else{
    Alert.alert('Somthing went wrong')
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
          <Text style={{ color: '#77838F', fontSize: 14, marginBottom: 24 }}>
            Enter 6 digit OTP that has been sent to your registered mobile
            number or email address.
          </Text>
          <View style={{ borderBottomColor: "black", borderBottomWidth: 0.5 }} />
          <TextInputWithLabels
            styleContainer={{ marginTop: 24, }}
            // messageError={showNotEmailCorrect ? 'Please enter a valid e-mail address' : undefined}
            label={'OTP Number'}
            value={otp}
            onChange={setOtp}
            autoCapitalize={'none'}
            // @ts-ignore
            maxLength={30}
            width={WINDOW_WIDTH - 60}
          />
          <TouchableOpacity
            onPress={() => onPress()}
            style={{
              marginVertical: 20,
              backgroundColor: '#0F6BBF',
              borderRadius: 50,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
              Confirm OTP
            </Text>
          </TouchableOpacity>
          <View style={{
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 24
          }}>
            <Text style={{
              fontWeight: '400',
              fontSize: 14,
              lineHeight: 17,
              color: '#051F4E'
            }}>Didn’t receive the OTP yet?  </Text>
            <TouchableOpacity
              onPress={() => resentOTP}
            >
              <Text style={{
                fontWeight: '700',
                fontSize: 14,
                lineHeight: 17,
                color: '#0F6BBF',
                borderBottomColor: '#0F6BBF',
                borderBottomWidth: 1
              }}>Resend OTP</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }} onPress={() => navigation.navigate("Signin")}>
            <Text style={{
              fontWeight: '700',
              fontSize: 14,
              lineHeight: 17,
              color: '#0F6BBF',
              borderBottomColor: '#0F6BBF',
              borderBottomWidth: 1,
            }}>Back to Login</Text>
          </TouchableOpacity>
        </View>

      </View>


    </View>
  );
};
export default OtpVerifyScreen;
