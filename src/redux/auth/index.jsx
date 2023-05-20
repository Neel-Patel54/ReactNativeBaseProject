import {createAsyncThunk} from '@reduxjs/toolkit';
import {callPostAPI} from '@utils/axios';
import { loadingStart, loadingEnd } from '../loader/slice';

export const handleLogin = createAsyncThunk(
  'login/post',
  async (params, {rejectWithValue, dispatch}) => {
    dispatch(loadingStart());
    try {
      const response = await callPostAPI({
        route: 'auth/login',
        body: params,
        isAuthenticated: false,
      });
      const data = response.data;
      dispatch(loadingEnd());
      return data;
    } catch (err) {
      const error = err.response.data;
      dispatch(loadingEnd());
      return rejectWithValue(error);
    } finally {
      dispatch(loadingEnd());
    }
  },
);
