import React, { Component } from "react"
import { AppContainer } from "react-hot-loader"
import { render } from "react-dom"
import injectTapEventPlugin from "react-tap-event-plugin"
import App from "./app"

injectTapEventPlugin()

const renderApp = () => {
	render( <AppContainer>
           <App />
         </AppContainer>, document.getElementById( "app" ) );
}

renderApp() // Renders App on init

if ( module.hot ) {
	module.hot.accept( "./app", renderApp )
}
