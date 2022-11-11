import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: {
    name: 'Testing....',
  }, // for user object
  // userToken where we are saving Token in redux
  userToken: null,
  // These are used for Signup 
  personDetails: {},
  userInstitute: [],
  userCertificates: [],
  userlanguages: [],
  userExperiance: [],
  userSignUpData : {},
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveAuthProfile: (state, action) => {
      state.userInfo = action.payload;
    },
    saveUserToken: (state, action) => {
      state.userToken = action.payload;
    },
    savePersonDetails: (state, action) => {
      state.personDetails = action.payload;
    },
    saveUserInstitute: (state, action) => {
      state.userInstitute = action.payload;
    },
    saveUserCertificates: (state, action) => {
      state.userCertificates = action.payload;
    },
    saveUserLanguages: (state, action) => {
      state.userlanguages = action.payload;
    },
    saveUserExperiance: (state, action) => {
      state.userExperiance = action.payload;
    },
    saveUserSignupData: (state, action) => {
      state.userSignUpData = action.payload;
    },

  },
});

export const {
  saveAuthProfile,
  saveUserToken,
  savePersonDetails,
  saveUserInstitute,
  saveUserCertificates,
  saveUserLanguages,
  saveUserExperiance,
  saveUserSignupData,
} = authSlice.actions;
const authReducer = authSlice.reducer;

export default authReducer;
