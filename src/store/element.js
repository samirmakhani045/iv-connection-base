import { createSlice } from '@reduxjs/toolkit';

import { stageElement, stageElements } from '@studio/utils/element';

import { httpRequest } from './rest';
import { wsSendMessage } from './websocket';
import { fetchFlowResponse } from './flow';

const slice = createSlice({
  name: 'element',
  initialState: {
    page: 0,
    pageSize: 10,
    totalPages: 0,
    totalObjects: 0,
    elements: [],
    element: null,
  },
  reducers: {
    fetchElementsResponse: (state, { payload }) => {
      const { page, pageSize, totalPages, totalObjects, objects } = payload;

      state.page = page;
      state.pageSize = pageSize;
      state.totalPages = totalPages;
      state.totalObjects = totalObjects;
      state.elements = stageElements(objects);
    },
    fetchElementResponse: (state, { payload }) => {
      const { elementRows, ...element } = payload;

      state.element = stageElement(element);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFlowResponse, (state, { payload }) => {
      const { page, pageSize, totalPages, totalObjects, objects } = payload.flow.elements;

      state.page = page;
      state.pageSize = pageSize;
      state.totalPages = totalPages;
      state.totalObjects = totalObjects;
      state.elements = stageElements(objects);
    });
  },
});

export const { fetchElementsResponse, fetchElementResponse } = slice.actions;

export default slice.reducer;

export const fetchElements = ({ sortBy, sortOrder, page, pageSize, flowId, isRest }) => {
  if (isRest && flowId) {
    return httpRequest({
      url: `/flows/${flowId}/elements`,
      method: 'GET',
      data: {},
      // onStart: null,
      // onError: null,
      onSuccess: fetchElementsResponse.type,
    });
  }

  return wsSendMessage({
    message: {
      name: 'getElements',
      payload: {
        sortBy,
        sortOrder,
        page,
        pageSize,
      },
    },
  });
};

export const fetchElement = ({ id, elementRows }) => {
  return wsSendMessage({
    message: {
      name: 'getElement',
      payload: { id, elementRows },
    },
  });
};
