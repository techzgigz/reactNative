import React from 'react';

// Core Components
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OtpVerifyScreen from '../screens/SignupScreen/OtpVerfiyScreen';
import PersonalDetails from '../screens/SignupScreen/PersonalDetails';
import EducationDetails from '../screens/SignupScreen/EducationDetails';
import ExperianceDetails from '../screens/SignupScreen/ExpersianceDetails';
import GotoDashBoard from '../screens/SignupScreen/gotoDhashBoard';
import SignupScreen from '../screens/SignupScreen/SignupScreen';

const Stack = createStackNavigator();
const SignupStack = () => {
  return (
    // <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Signup">
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="otp2" component={OtpVerifyScreen} />
        <Stack.Screen name="PersonalDetails" component={PersonalDetails} />
        <Stack.Screen name="EducationDetails" component={EducationDetails} />
        <Stack.Screen name="ExperianceDetails" component={ExperianceDetails} />
        <Stack.Screen name="RedirectDhashBoard" component={GotoDashBoard} />
      </Stack.Navigator>
    // </NavigationContainer>
  );
};
export default SignupStack;
