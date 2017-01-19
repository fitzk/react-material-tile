import React, { Component, PropTypes } from "react";
import { Card, CardText, Paper, CardTitle, AppBar } from "material-ui";
import AppContainer from "react-hot-loader";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export class App extends Component {

	render() {
		const muiTheme = getMuiTheme(darkBaseTheme);
		return <div>
           <MuiThemeProvider muiTheme={ muiTheme }>
             <div style={ { display: "flex", flexDirection: "column", alignItems: "center", margin: "0!important" } }>
               <AppBar/>
               { this.props.children && React.cloneElement(this.props.children, ...this.props) }
             </div>
           </MuiThemeProvider>
         </div>
	}
}
