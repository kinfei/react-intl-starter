import React, { Suspense, useContext } from "react";

import { FormattedMessage } from "react-intl";

import { Button } from "antd";

import { Context } from "./components/TranslationWrapper";

import constants from "./constants";

import "./App.css";

function App() {
  const { lang, onChangeLanguage } = useContext(Context);

  return (
    <Suspense fallback="loading">
      <div className="App">
        <h1>
          <FormattedMessage
            id="welcome.title"
            values={{
              framework: "React",
            }}
          />
        </h1>

        <Button
          type="link"
          disabled={lang === constants.language.en}
          onClick={() => onChangeLanguage(constants.language.en)}
        >
          <FormattedMessage id="en-US" />
        </Button>

        <Button
          type="link"
          disabled={lang === constants.language.zh}
          onClick={() => onChangeLanguage(constants.language.zh)}
        >
          <FormattedMessage id="zh-CN" />
        </Button>
      </div>
    </Suspense>
  );
}

export default App;
