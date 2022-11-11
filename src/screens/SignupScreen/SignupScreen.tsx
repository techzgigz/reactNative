import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {text} from '@storybook/addon-knobs';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Pressable,
  Alert,
} from 'react-native';
import Button from '../../../storybook/stories/Button';
import style from '../../../storybook/stories/Button/style';
import Logo from '../../assets/icons/Logo.png';
import {apiHandler} from '../../api';
import Toast from 'react-native-toast-message';
import {useDispatch, useSelector} from 'react-redux';
import {saveAuthProfile, saveUserToken} from '../../redux/features/AuthSlice';
import { saveRedirectDashBoard } from '../../redux/features/DashBoardSlice';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { signUp , getOtp } from '../../api/api';

const SignupScreen = ({navigation}) => {
  const {userToken} = useSelector(state => state.userLogin);
  const [showLogin , setShowLogin] = useState(true);
  console.log('userToken', userToken);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    auth: '',
    countryCode: '+91',
    password: '',
  });
  const handleChange = (fieldname, e) => {
    // console.log('e.target.value', e);
    setFormData({
      ...formData,
      [fieldname]: e,
    });
  };
  const SignUpCall = async () => {
    // signUp
    dispatch(saveRedirectDashBoard(false));
    const data = await getOtp(formData);
    if (data) {
      navigation.navigate('otp2')
    }
    else {
      Alert.alert('Somthing went wrong')
    }    

  };
  return (
    <View style={{flex: 1}}>
      <View style={styles.logoBox}>
        <Image source={Logo} style={styles.logo} />
      </View>
      <View style={{flex: 2}}>
        <View style={styles.headingBox}>
          <Text style={styles.heading}>Sign Up to YLIWAY</Text>
          <Text style={{color: '#77838F', marginBottom: 30}}>
            Accelerate your success!
          </Text>
          <Text style={styles.label}>Email or Mobile Number</Text>
          <TextInput
            onChangeText={e => handleChange('auth', e)}
            placeholder="Email or Mobile Number"
            // onFocus={ ()=> setShowLogin(false)}
            // onBlur={()=> setShowLogin(true)}
            style={styles.inputTypeBox}
          />
          <Text style={styles.label}>Password</Text>
          <TextInput
            onChangeText={e => handleChange('password', e)}
            // onFocus={ ()=> setShowLogin(false)}
            // onBlur={()=> setShowLogin(true)}
            secureTextEntry={true}
            placeholder="Password"
            style={styles.inputTypeBox}
          />
          <Text style={styles.label}>
            By clicking Agree & Sign up, you agree to
          </Text>
          <Text style={styles.labelBox}>
            <Text style={styles.labelBlue}> Terms & Conditions </Text> and
            <Text style={styles.labelBlue}> Privacy Policy. </Text>
          </Text>
          {/* <Pressable onPress={() => {navigation.navigate('otp2') }}> */}

          <Pressable onPress={() => { SignUpCall(); }}>
            <View
              style={{
                marginVertical: 20,
                backgroundColor: '#0F6BBF',
                borderRadius: 50,
                height: 49,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
                Agree & Sign up
              </Text>
            </View>
          </Pressable>
        </View>
      </View>

    {/* {showLogin &&  */}
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 25,
          justifyContent: 'center',
          marginRight : 20 , 
        }}>
        <Text>
          Already a member?
        </Text>
        {/* <TouchableOpacity onPress={()=> navigation.navigate('SignInStack')}> */}
        <Text
            style={{
              fontSize : 15 , 
              color: '#0F6BBF',
              textDecorationLine: 'underline',
              letterSpacing: 0.5,
              marginHorizontal : 8 ,
            }}>
            Login
          </Text>
          {/* </TouchableOpacity> */}
      </View>
  {/* } */}
    </View>
  );
};
const styles = StyleSheet.create({
  logoBox: {
    flex: 1,
    backgroundColor: '#A400FF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {width: '40%', height: 30},
  headingBox: {
    marginTop: -80,
    elevation: 8,
    borderRadius: 8,
    backgroundColor: 'white',
    margin: 15,
    padding: 15,
  },
  heading: {
    fontFamily: 'Inter-Bold',
    color: '#051F4E',
    fontSize: 25,
    fontWeight: 'bold',
  },
  label: {
    marginTop: 30,
    fontWeight: 'bold',
    color: '#051F4E',
    fontSize: 14,
    letterSpacing: 1,
  },
  inputTypeBox: {
    height: 50,
    marginTop: 8,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#D1D5DB',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 10,
    color: '#77838F',
  },
  labelBox: {
    color: '#77838F',
    fontSize: 14,
    letterSpacing: 0.5,
  },
  labelBlue: {color: '#0F6BBF'},
});
export default SignupScreen;
