import React from 'react';
import { addLocaleData, IntlProvider } from 'react-intl';
import zhLocaleData from 'react-intl/locale-data/zh';
import enLocaleData from 'react-intl/locale-data/en';
// import UserContainer from '../../containers/i18NContainer/i18NContainer';
import User from '../User/User';

import zhCN from './zh-CN';
import enUS from './en-US';

// console.log('zhLocaleData', zhLocaleData, 'enLocaleData', enLocaleData);
addLocaleData([...zhLocaleData, ...enLocaleData]);

const chooseLocale = (lang) => {
  switch (lang) {
    case 'EN':
      return enUS;
    case 'ZH':
      return zhCN;
    default:
      return zhCN;
  }
};

const ReduxIntlProvider = ({ children, lang }) => (
  <IntlProvider locale={lang} messages={chooseLocale(lang)}>
    {children}
  </IntlProvider>
);
export default ReduxIntlProvider;
