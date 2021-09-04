import { createSlice } from '@reduxjs/toolkit';

import { httpRequest } from './rest';

const slice = createSlice({
  name: 'connector',
  initialState: {
    connectors: [],
  },
  reducers: {
    fetchConnectorResponse: (state, { payload }) => {
      const { objects } = payload;
      console.log('Line----13 connector.js', payload);
      state.connectors = objects;
    },
  },
});

export const { fetchConnectorResponse } = slice.actions;

export default slice.reducer;

export const fetchConnector = () => {
  return httpRequest({
    url: '/connector',
    method: 'GET',
    data: {},
    // onStart: null,
    // onError: null,
    onSuccess: fetchConnectorResponse.type,
  });
};
