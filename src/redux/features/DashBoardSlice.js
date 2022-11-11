import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  redirectDashBoard : true,
    // This array is For Just Testing you may delete this and Create your's acc to the need...
  listofPosts :  []
};

const dashBoardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    saveListofPosts: (state, action) => {
      state.listofPosts = action.payload;
    },
    saveRedirectDashBoard: (state, action) => {
      state.redirectDashBoard = action.payload;
    },
    
  },
});

export const {
  saveListofPosts,
  saveRedirectDashBoard,
} = dashBoardSlice.actions;
const dashboardReducer = dashBoardSlice.reducer;

export default dashboardReducer;
