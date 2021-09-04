import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import restMiddleware from './middleware/rest';
import websocketMiddleware from './middleware/websocket';

import appSlice from './app';
import userSlice from './user';
import connectionSlice from './connection';
import groupSlice from './group';
import flowSlice from './flow';
import tableSlice from './table';
import elementSlice from './element';
import rowSlice from './row';
import connectorSlice from './connector';

const reducer = {
  appSlice,
  userSlice,
  connectionSlice,
  groupSlice,
  flowSlice,
  tableSlice,
  elementSlice,
  rowSlice,
  connectorSlice,
};

const middleware = [...getDefaultMiddleware(), restMiddleware, websocketMiddleware];

export default function () {
  return configureStore({
    reducer,
    middleware,
  });
}
