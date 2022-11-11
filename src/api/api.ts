import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin } from '@react-native-google-signin/google-signin';



// axios.defaults.headers.common['Authorization'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk5YjcxZTNlLWE4YzktNDA3MC05MzRhLTRhNDA4NDJhNWJjOCIsImFsZ29yaXRobSI6IkhTMjU2IiwiZXhwIjoxNjY2NDY5Nzc5LCJpYXQiOjE2NjY0MzczNzl9.pX64Cmejc5Zftz8TiAbEpz1xuhJekSB218mj-s0Ifj0'

// const test ={
//   "auth": "gigz.techz@gmail.com",
//   "password": "0000"
// }

axios.defaults.baseURL = 'https://authapi.yliway.com/auth/api/v1'

export const facebook_signin = async (email, firstName, profilePicURL) => {
  console.log('facebook_signIn');
  try {
    let response = await axios.post('/facebook', {
      "email": email,
      "firstName": firstName,
      "profilePicURL": profilePicURL
    });
    console.log(response.data.data);
    await AsyncStorage.setItem('LoginData', JSON.stringify(response.data.data))
    console.log(response.data.data);

    axios.defaults.headers.common['Authorization'] = response.data.data.token
    return response.data.data;
  }
  catch (error) {
    console.log(error)
    return null
  }
}

export const google_signin = async (token) => {
  console.log('google_signIn');

  try {
    let response = await axios.post('/google', {
      "token": token,
    })

    await AsyncStorage.setItem('LoginData', JSON.stringify(response.data.data))
    axios.defaults.headers.common['Authorization'] = response.data.data.token
    return response.data.data;
  }
  catch (error) {
    console.log(error)
    return null
  }
}

export const linkedin_signin = async (token) => {
  console.log('linkedin_signin', token);
  try {
    let response = await axios.post('/linkedin', {
      "code": token,
    })
    await AsyncStorage.setItem('LoginData', JSON.stringify(response.data.data))
    axios.defaults.headers.common['Authorization'] = response.data.data.token
    return response.data.data;
  }
  catch (error) {
    console.log(error)
    return null
  }
}

export const signIn = async (email, password) => {
  console.log('signIn');

  try {
    let response = await axios.post('/login', {
      "auth": email,
      "password": password
    })
    console.log('Response', response);
    await AsyncStorage.setItem('LoginData', JSON.stringify(response.data.data))
    axios.defaults.headers.common['Authorization'] = response.data.data.token
    return response.data.data;
  }
  catch (error) {
    console.log(error)
    return null
  }
}

export const forgotPassword = async (email, navigation) => {
  console.log('forgotPassword');

  try {
    let response = await axios.post('/forgotPassword', {
      "auth": email
    })
    await AsyncStorage.setItem('LoginData', JSON.stringify(response.data.data))
    axios.defaults.headers.common['Authorization'] = response.data.data.token

    return response.data.data;
  }
  catch (error) {
    console.log(error)
    return null
  }

}

export const resetPassword = async (newpassword, conirmpassword) => {
  console.log('resetPassword');

  try {
    let response = await axios.post('/resetPassword', {
      "password": newpassword,
      "confirmPassword": conirmpassword
    })
    return response.data;
  }
  catch (error) {
    console.log(error)
    return null
  }
}

export const verifyOTP = async (otp) => {
  console.log('verifyOTP');
  try {
    let response = await axios.post('/verifyOTP', {
      "otp": otp
    })
    return response.data;
  }
  catch (error) {
    console.log(error)
    return null
  }
}


export const resentOTP = async () => {
  console.log('resentOTP');
  try {
    let response = await axios.post('/resentOTP')
    return response.data;
  }
  catch (error) {
    console.log(error)
    return null
  }
}

export const logOut = async () => {
  console.log('logOut', axios.defaults.headers.common);
  let tokenStr = axios.defaults.headers.common['Authorization']
  try {
    let response = await axios.post('/logout', { headers: { "Authorization": `Bearer ${tokenStr}` }})
    GoogleSignin.revokeAccess()
    GoogleSignin.signOut()
    AsyncStorage.removeItem('LoginData');
    axios.defaults.headers.common['Authorization'] = null
    console.log('Logout' , response)
    return response;
  
  }
  catch (error) {
    AsyncStorage.removeItem('LoginData');
    axios.defaults.headers.common['Authorization'] = null
    console.log(error)
    return null
  }
}



export const getOtp = async (data) => {
  console.log('signIn');
  try {
    let response = await axios.post('/signUp', data)
    // console.log('Get Otp for GigzTechz' , response);
    await AsyncStorage.setItem('token', response.data.data.token)
    axios.defaults.headers.common['Authorization'] = response.data.data.token
    return response.data.data;
  }
  catch (error) {
    console.log(error)
    return null
  }
}

export const signUp = async (formData) => {
  console.log('Sign up');
  // axios.defaults.headers.common['Authorization'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk5YjcxZTNlLWE4YzktNDA3MC05MzRhLTRhNDA4NDJhNWJjOCIsImFsZ29yaXRobSI6IkhTMjU2IiwiZXhwIjoxNjY3MjU0MTc4LCJpYXQiOjE2NjcyMjE3Nzh9.i9_5GsIJHYVgibDOGtr7NLq7P-ET5fT68s8NjOsx1v8'
  try {
    let response = await axios.post('/signUpDetails', formData)
    response.data.data.token = axios.defaults.headers.common['Authorization']
    return response.data.data;
  }
  catch (error) {
    console.log(error)
    return null
  }
};

export const getProfileData = async ( payload ) => {
  console.log('getProfileData');
  try {
      let response = await axios.post('/myProfile', payload ? payload : { });
      console.log('getProfileData', response)
      return response;
  }
  catch (error) {
      console.log(error)
      return null
  }
}

export const UpdateUserDetails = async ( payload ) => {
  console.log('UpdateUserDetails');
  console.log(payload);
  try {
      let response = await axios.post('/updateUserDetails', payload ? payload : { });
      console.log('UpdateUserDetails', response)
      return response;   
  }
  catch (error) {
      console.log(error)
      return null
  }
}
