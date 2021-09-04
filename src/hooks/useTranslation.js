import { useCallback, useContext } from 'react';
import { ReactReduxContext } from 'react-redux';
import { useTranslation as i18nUseTranslation } from 'react-i18next';

import { defaultLanguage } from '@studio/i18n';

export const useTranslation = (translationContextKey) => {
  const {
    store: { getState },
  } = useContext(ReactReduxContext);
  const state = getState();
  const { t, ...i18nProps } = i18nUseTranslation();

  const lang = state?.userSlice?.language;

  const translate = useCallback(
    (translationKey, ...rest) =>
      translationContextKey
        ? t(
            [
              `${lang}.${translationContextKey}.${translationKey}`,
              `${defaultLanguage}.${translationContextKey}.${translationKey}`,
            ],
            ...rest,
          )
        : t(translationKey, ...rest),
    [t, translationContextKey, lang],
  );

  return { t: translate, ...i18nProps };
};

export default useTranslation;
