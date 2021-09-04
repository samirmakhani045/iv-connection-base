import { createSlice } from '@reduxjs/toolkit';

import { httpRequest } from './rest';

const slice = createSlice({
  name: 'connection',
  initialState: {
    page: 0,
    pageSize: 10,
    totalPages: 0,
    totalObjects: 0,
    connections: [],
    connection: null,
  },
  reducers: {
    fetchConnectionsResponse: (state, { payload }) => {
      const { page, pageSize, totalPages, totalObjects, objects } = payload;
      state.page = page;
      state.pageSize = pageSize;
      state.totalPages = totalPages;
      state.totalObjects = totalObjects;
      state.connections = objects;
    },
    fetchConnectionResponse: (state, { payload }) => {
      const { connection } = payload;
      state.connection = connection;
    },
  },
});

export const { fetchConnectionsResponse, fetchConnectionResponse } = slice.actions;

export default slice.reducer;

// TODO: include query params
export const fetchConnections = () => {
  return httpRequest({
    url: '/connections',
    method: 'GET',
    data: {},
    // onStart: null,
    // onError: null,
    onSuccess: fetchConnectionsResponse.type,
  });
};

export const fetchConnection = ({ id }) => {
  return httpRequest({
    url: `/connections/${id}`,
    method: 'GET',
    data: {},
    // onStart: null,
    // onError: null,
    onSuccess: fetchConnectionResponse.type,
  });
};
