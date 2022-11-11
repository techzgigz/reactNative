import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import Logo from '../../assets/icons/Logo.png';
import Button from '../../components/Button';
import { resetPassword } from '../../api/api';
import TextInputWithLabels from '../../components/TextInputWithLabels';
import { WINDOW_WIDTH } from '../../utils/style';

const ResetPasswordScreean = ({ navigation }) => {

  const [newpassword, setNewpassword] = useState('')
  const [conirmpassword, setConfirmpassword] = useState('')

  const onPress = async () => {
    const data = await resetPassword(newpassword, conirmpassword)
    if (data) {
      navigation.navigate("Signin")
      Alert.alert('Succesfully reset')
    } else {
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
            Reset Password
          </Text>
          <Text style={{ color: '#77838F', marginBottom: 24 }}>
            Enter your new password to access your {"\n"} account
          </Text>
          <View style={{ borderBottomColor: "black", borderBottomWidth: 0.5, marginBottom: 24 }} />
          <TextInputWithLabels
            // messageError={showNotPasswordCorrect ? 'Incorrect password' : undefined}
            value={newpassword}
            onChange={setNewpassword}
            label={'New Password'}
            placeholder={"* * * * * * * *"}
            secureTextEntry={true}
            autoCapitalize={'none'}
            // @ts-ignore
            maxLength={30}
            width={WINDOW_WIDTH - 56}
          />
          <TextInputWithLabels
            // messageError={showNotPasswordCorrect ? 'Incorrect password' : undefined}
            value={conirmpassword}
            onChange={setConfirmpassword}
            label={'Confirm New Password'}
            placeholder={"* * * * * * * *"}
            secureTextEntry={true}
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
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: '#FFFFFF', fontSize: 14, fontWeight: '700' }}>
              Reset Password
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default ResetPasswordScreean;
