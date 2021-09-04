import { v4 as uuid } from 'uuid';

import { getMessagesUrl } from '@studio/utils/url';
import {
  wsConnect,
  wsConnected,
  wsSendMessage,
  wsDisconnect,
  wsDisconnected,
  wsError,
} from '@studio/store/websocket';
import { updateFlowResponse } from '@studio/store/flow';
import { fetchTablesResponse } from '@studio/store/table';
import { fetchElementsResponse, fetchElementResponse } from '@studio/store/element';
import { fetchRowsResponse } from '@studio/store/row';
import { setError } from '@studio/store/app';

const websocketMiddleware = () => {
  let socket = null;

  const onOpen = (dispatch, resolve) => (event) => {
    resolve(event.currentTarget);
    dispatch(wsConnected(event.currentTarget.url));
  };
  const onError = (dispatch, reject) => (event) => {
    // TODO: consider retry reconnection to WS server? Number of attempts?
    reject(event);
    dispatch(wsError(event.currentTarget.url));
  };

  const onClose = (dispatch) => () => {
    dispatch(wsDisconnected());
  };

  const onMessage = (dispatch) => (event) => {
    const { name, payload } = JSON.parse(event.data);

    switch (name) {
      case 'getTablesResponse':
        dispatch(fetchTablesResponse(payload));
        break;

      case 'getElementsResponse':
        dispatch(fetchElementsResponse(payload));
        break;

      case 'getElementResponse':
        dispatch(fetchElementResponse(payload));
        break;

      case 'getRowsResponse':
        dispatch(fetchRowsResponse(payload));
        break;

      case 'putFlowResponse':
        dispatch(updateFlowResponse(payload));
        break;

      default:
        break;
    }
  };

  return ({ dispatch }) =>
    (next) =>
    (action) => {
      const { type, payload } = action;

      switch (type) {
        case wsConnect.type: {
          const wsUrl = getMessagesUrl(payload);

          if (socket !== null) {
            if (socket.url !== wsUrl) {
              socket.close();
            } else {
              // Connection to that specific channel is already up, so simply resolve the promise
              return new Promise((resolve) => {
                resolve(socket);
              });
            }
          }

          return new Promise((resolve, reject) => {
            // Try to stablish WS connection to exchange messages
            socket = new WebSocket(wsUrl);

            // websocket handlers
            socket.onopen = onOpen(dispatch, resolve);
            socket.onerror = onError(dispatch, reject);
            socket.onclose = onClose(dispatch);
            socket.onmessage = onMessage(dispatch);
          });
        }

        case wsDisconnect.type: {
          if (socket !== null) socket.close();

          socket = null;
          break;
        }

        // TODO: consider creating ws slice to keep a specific ws-state
        // and reducers for all the below action types instead of using the middleware
        case wsConnected.type: {
          console.log('WS CONNECTION ESTABLISHED', payload);
          break;
        }

        case wsDisconnected.type: {
          console.log('WS CONNECTION CLOSED', payload);
          break;
        }

        case wsSendMessage.type: {
          const { message } = payload;
          const id = uuid();
          const time = new Date().getTime();

          socket.send(JSON.stringify({ ...message, id, time }));
          break;
        }

        case wsError.type: {
          console.error('onError event', payload);
          dispatch(setError('Something went wrong with the websocket'));
          break;
        }

        default:
          return next(action);
      }
    };
};

export default websocketMiddleware();
