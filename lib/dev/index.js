import React, { Component } from "react"
import { AppContainer } from "react-hot-loader"
import { render } from "react-dom"
import injectTapEventPlugin from "react-tap-event-plugin"
import { App } from "./app"

injectTapEventPlugin()

const renderApp = () => {
	// if using react-router replace with <Routes/>
	render(<AppContainer>
          <App/>
        </AppContainer>, document.getElementById("app"));
}

renderApp() // Renders App on init

if (module.hot) {
	// if using react-router replace with "./routes"
	module.hot.accept("./app", renderApp)
}
