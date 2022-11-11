import {configureStore} from '@reduxjs/toolkit';
import authReducer from './features/AuthSlice';
import dashboardReducer from './features/DashBoardSlice';
import profileReducer from './features/myProfile';


const store = configureStore({
  reducer: {
    userLogin: authReducer,
    userDashBoard : dashboardReducer,
    profile : profileReducer,
  },
});

export default store;
