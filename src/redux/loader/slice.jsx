import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false
};

export const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    loadingStart: (state) => {
      state.isLoading = true;
    },
    loadingEnd: (state) => {
      state.isLoading = false;
    },
  },
});

export const { loadingStart, loadingEnd } = loaderSlice.actions;

export default loaderSlice.reducer;
