import { createAction } from '@reduxjs/toolkit';

export const wsConnect = createAction('ws/connect');
export const wsConnected = createAction('ws/connected');
export const wsSendMessage = createAction('ws/sendMessage');
export const wsDisconnect = createAction('ws/disconnect');
export const wsDisconnected = createAction('ws/disconnected');
export const wsError = createAction('ws/error');
