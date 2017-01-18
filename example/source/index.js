import React, { Component } from "react"
import { AppContainer } from "react-hot-loader"
import { render } from "react-dom"
import injectTapEventPlugin from "react-tap-event-plugin"
import Routes from "./routes"

injectTapEventPlugin()

const renderApp = () => {
	render(<AppContainer>
          <Routes/>
        </AppContainer>, document.getElementById("app"));
}

renderApp() // Renders App on init

if (module.hot) {
	module.hot.accept("./routes", renderApp)
}
