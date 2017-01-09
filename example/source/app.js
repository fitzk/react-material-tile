/**
* @Author: Kayla Fitzsimmons <kaylafitzsimmons>
* @Date:   01-07-2017
* @Email:  kayla.fitzsimmons@protonmail.com
* @Project: tile-card
* @Filename: app.js
* @Last modified by:   kaylafitzsimmons
* @Last modified time: 01-09-2017
* @License: MIT
* @Copyright: 2016-present
*/

import React, { Component, PropTypes } from "react"
import { Card, CardText, Paper, CardTitle } from "material-ui"
import AppContainer from "react-hot-loader"
import injectTapEventPlugin from "react-tap-event-plugin"
import getMuiTheme from "material-ui/styles/getMuiTheme"
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ReactDOM from "react-dom"
import t from "tile-card"
import logo from "source/logo.jpg"
import logoDos from "source/logo-white.png"
import Stateful from "tilecard"

export default class App extends Component {
  render() {
    return (
    <div>
      <MuiThemeProvider muiTheme={ getMuiTheme( darkBaseTheme ) }>
        <div style={ { display: "flex", flexDirection: "column", alignItems: "center" } }>
          <Paper style={ { height: "90vh", width: "90vw" } }>
            <h2 style={ { padding: '.5em' } }>Tile Card MaterialUI React Component</h2>
            <Stateful className="outer-card" headerClassName="outer-card-header" title="Example Parent" subtitle="recursive nested components" avatarSrc={ logo }
              name="example" />
          </Paper>
        </div>
      </MuiThemeProvider>
    </div>
    )
  }
}
