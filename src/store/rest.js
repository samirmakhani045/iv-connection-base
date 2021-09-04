import { createAction } from '@reduxjs/toolkit';

export const httpRequest = createAction('http/request');
export const httpRequestSuccess = createAction('http/requestSuccess');
export const httpRequestError = createAction('http/requestError');
