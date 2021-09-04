import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '@studio/store/configureStore';

const withStore = (story) => {
  const store = configureStore();

  return <Provider store={store}>{story()}</Provider>;
};

export default withStore;
