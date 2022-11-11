import React, {useState} from 'react';
import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import tickMark from '../../assets/icons/tickMark.png';
import { saveAuthProfile, saveUserToken } from '../../redux/features/AuthSlice';
import { saveRedirectDashBoard } from '../../redux/features/DashBoardSlice';

const GotoDashBoard = ({ navigation }) => {
  const { userSignUpData} = useSelector(state => state.userLogin);
  const dispatch = useDispatch();
  const handleRedirection = () =>{
    dispatch(saveUserToken(userSignUpData.token))
    dispatch(saveAuthProfile(userSignUpData))
    // dispatch(saveRedirectDashBoard(true));
    // navigation.navigate('DrawerStack');
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{justifyContent: 'center'}}>
        <Image style={{width: 80, height: 80}} source={tickMark} />
      </View>
      <Text style={{color: '#051F4E', fontWeight: 'bold', fontSize: 30}}>
        Congratulations!
      </Text>
      <View style={{alignItems: 'center'}}>
        <Text
          style={{
            paddingHorizontal: 40,
            fontSize: 15,
            color: '#303439',
          }}>
          Your sign up is completed
        </Text>
        <Text
          style={{
            paddingHorizontal: 40,
            fontSize: 15,
            color: '#303439',
          }}>
          successfully. Now, you can go to{' '}
        </Text>
        <Text
          style={{
            paddingHorizontal: 40,
            fontSize: 15,
            color: '#303439',
          }}>
          {' '}
          dashboard and enjoy!!
        </Text>
      </View>
      {/* <Pressable onPress={()=> navigation.navigate('HomeScreen')}> */}
      <Pressable onPress={() => handleRedirection()}>
      <View
        style={{
          marginVertical: 20,
          backgroundColor: '#0F6BBF',
          borderRadius: 50,
          height: 49,
          justifyContent: 'center',
          alignItems: 'center',
          width: 250,
        }}>
        <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
        Go to Dashboard
        </Text>
      </View>
      </Pressable>
    </View>
  );
};
const Styles = StyleSheet.create({});
export default GotoDashBoard;
