import './App.scss';

import React from 'react';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';

import localTranslations from '@studio/translations';
import configureStore from '@studio/store/configureStore';
import GlobalStyle from '@studio/theme/global';
import { flatten } from '@utils/flatten';

import { Routes } from './routes';
import i18n from './i18n';

function App() {
  // TODO: handle language change
  const lang = 'en';
  const store = configureStore();

  i18n.changeLanguage(lang);
  i18n.addResources(lang, 'translations', flatten(localTranslations));

  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <GlobalStyle />
        <Routes />
      </Provider>
    </I18nextProvider>
  );
}

export default App;
