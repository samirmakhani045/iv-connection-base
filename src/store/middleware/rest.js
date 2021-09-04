import axios from 'axios';

import { getApiHttpBaseUrl } from '@studio/utils/url';

import { httpRequest, httpRequestSuccess, httpRequestError } from '@studio/store/rest';
import { toggleLoader, setError } from '@studio/store/app';

const restMiddleware =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    const { type, payload } = action;

    switch (type) {
      case httpRequest.type: {
        const { url, method, data, onSuccess, onStart, onError } = payload;

        dispatch(toggleLoader(true));

        // Specific functionality on request start (if any)
        if (onStart) dispatch({ type: onStart, payload });

        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.defaults.headers.post['Accept'] = 'application/json';

        /* Check if a token is found in localstorage */
        const token = localStorage.getItem('token');
        if (token) axios.defaults.headers['X-Auth-Token'] = token;

        const baseURL = getApiHttpBaseUrl();

        try {
          const response = await axios.request({ baseURL, url, method, data });
          const responseData = response.data;

          dispatch(httpRequestSuccess({ onSuccess, responseData }));
        } catch (error) {
          dispatch(httpRequestError({ onError, error }));
        }
        break;
      }

      case httpRequestSuccess.type: {
        const { onSuccess, responseData } = action.payload;

        // Specific functionality on request success (if any)
        if (onSuccess) dispatch({ type: onSuccess, payload: responseData });

        dispatch(setError(''));
        dispatch(toggleLoader(false));
        break;
      }

      case httpRequestError.type: {
        const { onError, error } = payload;

        // Specific functionality on request failed (if any)
        if (onError) dispatch({ type: onError, payload: error });

        // TODO: Improve error management (i18n...) & cleanup
        // Currently default AXIOS config error management
        let errorMessage = 'Something went wrong';
        if (error.response) {
          /*
           * The request was made and the server responded with a
           * status code that falls out of the range of 2xx
           */
          console.error(error.response.data);
          console.error(error.response.status);
          console.error(error.response.headers);
          errorMessage = 'Server error';
        } else if (error.request) {
          /*
           * The request was made but no response was received, `error.request`
           * is an instance of XMLHttpRequest in the browser and an instance
           * of http.ClientRequest in Node.js
           */
          console.error(error.request);
          errorMessage = 'Request error';
        } else {
          // Something happened in setting up the request and triggered an Error
          console.error('Error', error.message);
        }

        dispatch(setError(errorMessage));
        dispatch(toggleLoader(false));
        break;
      }

      default:
        return next(action);
    }
  };

export default restMiddleware;
