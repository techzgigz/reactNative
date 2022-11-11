import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity,Alert } from 'react-native';
import Logo from '../../assets/icons/Logo.png';
import Button from '../../components/Button';
import { signIn } from '../../api/api';
import TextInputWithLabels from '../../components/TextInputWithLabels';
import { WINDOW_WIDTH } from '../../utils/style';
import { useDispatch } from 'react-redux';
import { saveAuthProfile, saveUserToken } from '../../redux/features/AuthSlice';

const SigninScreen = ({ navigation }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const onPress = async () => {
    const data = await signIn(email, password);
    if (data) {
      dispatch(saveUserToken(data.token))
      dispatch(saveAuthProfile(data.user))
    }
    else {
      Alert.alert('Somthing went wrong')
    }
    // navigation.navigate("Dashboard")
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
            Sign in to YLIWAY
          </Text>
          <Text style={{ color: '#77838F', marginBottom: 5 }}>
            Accelerate your success!
          </Text>
          <View style={{ borderBottomColor: "black", borderBottomWidth: 0.5 }} />
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
          <TextInputWithLabels
            // messageError={showNotPasswordCorrect ? 'Incorrect password' : undefined}
            value={password}
            onChange={setPassword}
            label={'Password'}
            placeholder={"* * * * * * * *"}
            secureTextEntry={true}
            autoCapitalize={'none'}
            // @ts-ignore
            maxLength={30}
            width={WINDOW_WIDTH - 56}
          />
          <TouchableOpacity
            style={{
              marginVertical: 24,
              backgroundColor: '#0F6BBF',
              borderRadius: 50,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => onPress()}
          >
            <Text style={{ color: '#FFFFFF', fontSize: 14, fontWeight: '700' }}>
              Login
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
            <Text style={{ color: '#0F6BBF', fontSize: 14, fontWeight: '700', lineHeight: 17, textAlign: 'center' }}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
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
        }}>Not a member yet?  </Text>
        <TouchableOpacity>
          <Text style={{
            fontWeight: '700',
            fontSize: 14,
            lineHeight: 17,
            color: '#0F6BBF',
            borderBottomColor: '#0F6BBF',
            borderBottomWidth: 1
          }}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SigninScreen;
