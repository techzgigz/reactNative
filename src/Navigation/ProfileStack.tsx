import React from 'react';

// Core Components
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SigninScreen from '../screens/SigninScreen/SigninScreen';
import OnboardingScreen from '../screens/SigninScreen/OnboardingScreen';
import ForgotPasswordScreen from '../screens/SigninScreen/ForgotPasswordScreen';
import ResetPasswordScreean from '../screens/SigninScreen/ResetPasswordScreean';
import OtpVerifyScreen from '../screens/SigninScreen/OtpVerfiyScreen';
import SignupStack from './SignUpStack';
import MyProfile from '../screens/myProfile/myProfile';
import AddEducation from '../screens/myProfile/addEducation';
import AddExperiance from '../screens/myProfile/addExperiance';
import addLanguage from '../screens/myProfile/addLanguage';
const Stack = createStackNavigator();
const ProfileStack = () => {
  return (
    // <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="profile">
        <Stack.Screen name="profile" component={MyProfile} />
        <Stack.Screen name="addEduation" component={AddEducation} />
        <Stack.Screen name="addExperinace" component={AddExperiance} />
        <Stack.Screen name="addLanguage" component={addLanguage} />
      </Stack.Navigator>
    // </NavigationContainer>
  );
};
export default ProfileStack;
