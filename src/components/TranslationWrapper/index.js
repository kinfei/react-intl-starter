import React, { useState } from "react";

import { IntlProvider } from "react-intl";

import constants from "../../constants";

import translation_en from "../../locales/en.json";
import translation_zh from "../../locales/zh.json";

export const Context = React.createContext();

const TranslationWrapper = (props) => {
  const messages = {
    en: translation_en,
    zh: translation_zh,
  };

  const [lang, setLang] = useState(constants.language.en);

  return (
    <Context.Provider value={{ lang, onChangeLanguage: setLang }}>
      <IntlProvider locale={lang} messages={messages[lang]}>
        {props.children}
      </IntlProvider>
    </Context.Provider>
  );
};

export default TranslationWrapper;
