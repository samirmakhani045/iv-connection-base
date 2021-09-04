import { createSlice } from '@reduxjs/toolkit';

import { httpRequest } from './rest';

const slice = createSlice({
  name: 'group',
  initialState: {
    page: 0,
    pageSize: 10,
    totalPages: 0,
    totalObjects: 0,
    groups: [],
    group: null,
  },
  reducers: {
    fetchGroupsResponse: (state, { payload }) => {
      const { page, pageSize, totalPages, totalObjects, objects } = payload;

      state.page = page;
      state.pageSize = pageSize;
      state.totalPages = totalPages;
      state.totalObjects = totalObjects;
      state.groups = objects;
    },
    fetchGroupResponse: (state, { payload }) => {
      const { group } = payload;

      state.group = group;
    },
  },
});

export const { fetchGroupsResponse, fetchGroupResponse } = slice.actions;

export default slice.reducer;

// TODO: include query params
// TODO: Group endpoints will be living under /organizations/{organizationId}
// "/organizations/{organizationId}/groups"
export const fetchGroups = () => {
  return httpRequest({
    url: '/groups',
    method: 'GET',
    data: {},
    // onStart: null,
    // onError: null,
    onSuccess: fetchGroupsResponse.type,
  });
};

// "/organizations/{organizationId}/groups/{groupId}"
export const fetchGroup = ({ id }) => {
  return httpRequest({
    url: `/groups/${id}`,
    method: 'GET',
    data: {},
    // onStart: null,
    // onError: null,
    onSuccess: fetchGroupResponse.type,
  });
};
