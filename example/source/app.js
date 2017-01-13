import React, { Component, PropTypes } from "react";
import { Card, CardText, Paper, CardTitle } from "material-ui";
import AppContainer from "react-hot-loader";
import injectTapEventPlugin from "react-tap-event-plugin";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ReactDOM from "react-dom";
import logo from "./logo.png";
import logoDos from "./logo2.png";
import Stateful from "react-tilecard";

export default class App extends Component {
	constructor(props) {
	super(props)
	this.state = {
		expanded: false
	}
	}

	onExpandChange() {
	this.setState({
		expanded: !this.state.expanded
	})
	}
	render() {


	return <div>
          <MuiThemeProvider muiTheme={ getMuiTheme(darkBaseTheme) }>
            <div style={ { display: "flex", flexDirection: "column", alignItems: "center" } }>
              <Paper style={ { height: "90vh", width: "90vw" } }>
                <h2 style={ { padding: '.5em' } }>Tile Card MaterialUI React Component</h2>
              </Paper>
            </div>
          </MuiThemeProvider>
        </div>
	}
}
