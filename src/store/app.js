import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'app',
  initialState: {
    isLoading: false,
    error: '',
  },
  reducers: {
    toggleLoader: (state, { payload }) => {
      state.isLoading = payload;
    },
    setError: (state, { payload }) => {
      state.error = payload;
    },
  },
});

export const { toggleLoader, setError } = slice.actions;

export default slice.reducer;
