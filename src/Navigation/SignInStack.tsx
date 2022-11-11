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

// for Signup
// import OtpVerifyScreen from '../screens/SignupScreen/OtpVerfiyScreen';
// import PersonalDetails from '../screens/SignupScreen/PersonalDetails';
// import EducationDetails from '../screens/SignupScreen/EducationDetails';
// import ExperianceDetails from '../screens/SignupScreen/ExpersianceDetails';
// import GotoDashBoard from '../screens/SignupScreen/gotoDhashBoard';
// import SignupScreen from '../screens/SignupScreen/SignupScreen';


const Stack = createStackNavigator();
const SignInStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Onboarding">
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Signin" component={SigninScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="otp" component={OtpVerifyScreen} />
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreean} />
         <Stack.Screen name="SignupStack" component={SignupStack} />
        {/*<Stack.Screen name="otp" component={OtpVerifyScreen} />
        <Stack.Screen name="PersonalDetails" component={PersonalDetails} />
        <Stack.Screen name="EducationDetails" component={EducationDetails} />
        <Stack.Screen name="ExperianceDetails" component={ExperianceDetails} />
        <Stack.Screen name="RedirectDhashBoard" component={GotoDashBoard} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default SignInStack;
