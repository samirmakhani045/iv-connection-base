import React from 'react';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';

import i18n from '@studio/i18n';
import localTranslations from '@studio/translations';
import configureStore from '@studio/store/configureStore';
import { flatten } from '@utils/flatten';

const withTranslation = (story) => {
  const store = configureStore();
  i18n.addResources('en', 'translations', flatten(localTranslations));

  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>{story()}</Provider>
    </I18nextProvider>
  );
};

export default withTranslation;
