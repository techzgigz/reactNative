import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Logo from '../../assets/icons/Logo.png';
import { useDispatch, useSelector } from 'react-redux';
import DrawerStack from '../../Navigation/DashboardStack';
import SignInStack from '../../Navigation/SignInStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { saveAuthProfile, saveUserToken } from '../../redux/features/AuthSlice';
import axios from "axios";
// import jwt_decode from "jwt-decode";

const SplashScreen = () => {
  const dispatch = useDispatch();
  //Login with token
  // const [user_Token, setUserToken] = useState('')
  const { userInfo, userToken } = useSelector(state => state.userLogin);

  const fetck_tokn = async () => {
    if (!userToken) {
      let userToken0 = await AsyncStorage.getItem('LoginData')
      console.log('userToken0',userToken0);
      if (userToken0) {
        userToken0= JSON.parse(userToken0);
        axios.defaults.headers.common['Authorization'] = userToken0.token
        // var decoded = jwt_decode(userToken0.token+"1");
        // console.log('decoded',decoded);        
        dispatch(saveUserToken(userToken0.token)) 
        dispatch(saveAuthProfile(userToken0.user))
      }
    }
  }

  const [splash, SetSplash] = useState(true)

  useEffect(() => {
    if(!userToken){
      fetck_tokn()
    }
    setTimeout(() => {
      SetSplash(false)
    }, 1000)
  },[userToken]);


  return (
    <View style={{ flex: 1 }}>
      {splash ? <View style={styles.container}>
        <Image
          source={Logo}
          style={styles.logo}
          resizeMode='contain'
        />
      </View> : userToken  ? <DrawerStack /> : <SignInStack />}
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: '#A400FF'
  },
  logo: {
    height: 50,
    width: '100%'
  }
})
