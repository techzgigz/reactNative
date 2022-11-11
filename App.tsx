import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
} from 'react-native';
import SplashScreen from './src/screens/SigninScreen/SplashScreen';
import DrawerStack from './src/Navigation/DashboardStack';
import { Provider } from 'react-redux';
import store from './src/redux/store';

const storybookApp = 'false';
const App = () => {

  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <SplashScreen />
      </SafeAreaView>
    </Provider>
  )
}
export default App