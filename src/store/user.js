import { createSlice } from '@reduxjs/toolkit';

// Reducers
const slice = createSlice({
  name: 'user',
  initialState: {
    id: 1,
    language: 'fr',
    role: 'admin',
    name: 'John Smith',
    email: 'john@domain.com',
  },
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = slice.actions;

// Selectors
export const selectLanguage = (state) => state.user.language;

export default slice.reducer;
