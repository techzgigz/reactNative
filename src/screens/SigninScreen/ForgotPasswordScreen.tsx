import React, { useState } from 'react';
import { Text, Image, TextInput, View, TouchableOpacity,Alert } from 'react-native';
import Logo from '../../assets/icons/Logo.png';
import { forgotPassword } from '../../api/api';
import { WINDOW_WIDTH } from '../../utils/style';
import TextInputWithLabels from '../../components/TextInputWithLabels';
import { useDispatch } from 'react-redux';
import { saveUserToken } from '../../redux/features/AuthSlice';

const ForgotPasswordScreen = ({ navigation }) => {

  const[email,setEmail]=useState('')
  const dispatch = useDispatch()

  const onPress = async () => {
    const data= await forgotPassword(email) 
    if (data) {
      // dispatch(saveUserToken(data.token))
      navigation.navigate("otp")
    }
    else {
      Alert.alert('Somthing went wrong')
    }

  }

  
  return (
    <View style={{ flex: 1.2 }}>
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
      <View style={{ flex: 1.8 }}>
        <View
          style={{
            marginTop: -100,
            elevation: 8,
            borderRadius: 8,
            backgroundColor: 'white',
            margin: 15,
            padding: 15,
          }}>
          <Text style={{ color: '#051F4E', fontSize: 25, fontWeight: 'bold' }}>
            Forgot Password?
          </Text>
          <Text style={{ color: '#77838F', fontSize: 14, marginBottom: 24 }}>
            Enter your mobile number or email address and we will send you an OTP from which you can reset your password.
          </Text>
          <View style={{ borderBottomColor: "black", borderBottomWidth: 0.5}} />
          <TextInputWithLabels
            styleContainer={{ marginTop: 24, }}
            // messageError={showNotEmailCorrect ? 'Please enter a valid e-mail address' : undefined}
            label={'Emai or Mobile Number'}
            value={email}
            onChange={setEmail}
            placeholder={'Email or Mobile Number'}
            autoCapitalize={'none'}
            // @ts-ignore
            maxLength={30}
            width={WINDOW_WIDTH - 56}
          />
          <TouchableOpacity
            onPress={() => onPress()}
            style={{
              marginVertical: 24,
              backgroundColor: '#0F6BBF',
              borderRadius: 50,
              height: 49,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
              Submit
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Signin")}
            style={{
              flexDirection: 'row',
              marginBottom: 25,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#0F6BBF',
                paddingHorizontal: 10,
                textDecorationLine: 'underline',
                letterSpacing: 0.5,
                fontWeight: '700'
              }}>
              Back to Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default ForgotPasswordScreen;
