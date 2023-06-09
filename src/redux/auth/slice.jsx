import {createSlice} from '@reduxjs/toolkit';
import {handleLogin} from './index';
import {showToast} from '@utils/helpers';

const initialState = {
  isLoggedIn: false,
  error: null,
  token: '',
  userDetails: {}
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    handleLogout: state => {
      state = initialState;
      return state;
    },
  },
  extraReducers: builder => {
    builder.addCase(handleLogin.pending, state => {
      state.error = null;
    });
    builder.addCase(handleLogin.fulfilled, (state, {payload}) => {
      state.token = payload.token;
      state.error = null;
      state.isLoggedIn = true;
      showToast('Success');
    });
    builder.addCase(handleLogin.rejected, (state, {payload}) => {
      state.error = payload.error;
      showToast('Error');
    });
  },
});

export const {handleLogout} = authSlice.actions;

export default authSlice.reducer;
