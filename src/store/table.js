import { createSlice } from '@reduxjs/toolkit';

import { wsSendMessage } from './websocket';

const slice = createSlice({
  name: 'table',
  initialState: {
    page: 0,
    pageSize: 10,
    totalPages: 0,
    totalObjects: 0,
    tables: [],
  },
  reducers: {
    fetchTablesResponse: (state, { payload }) => {
      const { page, pageSize, totalPages, totalObjects, objects } = payload;

      state.page = page;
      state.pageSize = pageSize;
      state.totalPages = totalPages;
      state.totalObjects = totalObjects;
      state.tables = objects;
    },
  },
});

export const { fetchTablesResponse } = slice.actions;

export default slice.reducer;

export const fetchTables = ({
  sortBy,
  sortOrder,
  page,
  pageSize,
  search = undefined,
  connectionId = undefined,
  forceRefresh = false,
}) => {
  return wsSendMessage({
    message: {
      name: 'getTables',
      payload: {
        sortBy,
        sortOrder,
        page,
        pageSize,
        search,
        connectionId,
        forceRefresh,
      },
    },
  });
};
