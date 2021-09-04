import { createSlice } from '@reduxjs/toolkit';

import { stageFlows, stageFlow } from '@studio/utils/flow';

import { httpRequest } from './rest';
import { wsConnect, wsSendMessage } from './websocket';

const slice = createSlice({
  name: 'flow',
  initialState: {
    page: 0,
    pageSize: 10,
    totalPages: 0,
    totalObjects: 0,
    flows: [],
    flow: null,
  },
  reducers: {
    fetchFlowsResponse: (state, { payload }) => {
      const { page, pageSize, totalPages, totalObjects, objects } = payload;

      state.page = page;
      state.pageSize = pageSize;
      state.totalPages = totalPages;
      state.totalObjects = totalObjects;
      state.flows = stageFlows(objects);
    },
    fetchFlowResponse: (state, { payload }) => {
      const { elements, ...flow } = payload.flow;

      state.flow = stageFlow(flow);
    },
    updateFlowResponse: (state, { payload }) => {
      // TODO: figure out how to handle updateFlow errors
      // and where these should live (flow or element slice?)
      const { elementsWithError, globalErrors } = payload;

      if (elementsWithError) console.log('Element with errors', elementsWithError);
      if (globalErrors) console.log('Global errors', globalErrors);

      console.log(state);
    },
    updateFlowLocally: (state, { payload }) => {
      state.flow = payload;
    },
  },
});

export const { updateFlowLocally, updateFlowResponse, fetchFlowsResponse, fetchFlowResponse } =
  slice.actions;

export default slice.reducer;

// TODO: include query params
export const fetchFlows = () => {
  return httpRequest({
    url: '/flows',
    method: 'GET',
    data: {},
    // onStart: null,
    // onError: null,
    onSuccess: fetchFlowsResponse.type,
  });
};

export const fetchFlow = ({ id }) => {
  return httpRequest({
    url: `/flows/${id}`,
    method: 'GET',
    data: {},
    // onStart: null,
    // onError: null,
    onSuccess: fetchFlowResponse.type,
  });
};

export const updateFlow = ({ flow, isRest }) => {
  if (isRest) {
    return httpRequest({
      url: `/flows/${flow.id}`,
      method: 'PUT',
      data: {},
      // onStart: null,
      // onError: null,
      onSuccess: updateFlowResponse.type,
    });
  }

  return wsSendMessage({
    message: {
      name: 'putFlow',
      payload: flow,
    },
  });
};

export const connectToFlowMessages = ({ id }) => {
  return wsConnect(id);
};
