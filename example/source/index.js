/**
* @Author: Kayla Fitzsimmons <kaylafitzsimmons>
* @Date:   01-04-2017
* @Email:  kayla.fitzsimmons@protonmail.com
* @Project: tile-card
* @Filename: index.js
* @Last modified by:   kaylafitzsimmons
* @Last modified time: 01-09-2017
* @License: MIT
* @Copyright: 2016-present
*/

import React, { Component } from "react"
import { AppContainer } from "react-hot-loader"
import { render } from "react-dom"
import injectTapEventPlugin from "react-tap-event-plugin"
import App from "source/app"

injectTapEventPlugin()

const renderApp = () => {
  render(
    <AppContainer>
      <App />
    </AppContainer>, document.getElementById("app")
  );
}

renderApp() // Renders App on init

if (module.hot) {
  module.hot.accept("./app", renderApp)
}
