import { createSlice } from '@reduxjs/toolkit';

import { wsSendMessage } from './websocket';
import { fetchElementResponse } from './element';

const slice = createSlice({
  name: 'row',
  initialState: {
    elementRows: [],
  },
  reducers: {
    fetchRowsResponse: (state, { payload }) => {
      state.elementRows = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchElementResponse, (state, { payload }) => {
      const { elementRows } = payload;
      state.elementRows = elementRows;
    });
  },
});

export const { fetchRowsResponse } = slice.actions;

export default slice.reducer;

export const fetchRows = ({ elementId, portId, page, pageSize }) => {
  return wsSendMessage({
    message: {
      name: 'getRows',
      payload: {
        elementId,
        portId,
        page,
        pageSize,
      },
    },
  });
};
