import AsynStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import authSlice from './auth/slice';
import loaderSlice from './loader/slice';

const authPersistConfig = {
  key: 'auth',
  whitelist: ['isLoggedIn'],
  storage: AsynStorage,
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authSlice),
  loader: loaderSlice,
});

export default rootReducer;
