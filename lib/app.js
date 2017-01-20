import React, { Component } from "react";
import { AppBar } from "material-ui";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export class App extends Component {

	render() {

		const isMobile = /iPhone|iPad|iPod|Android|Mobile/i.test(navigator.userAgent);

		const muiTheme = getMuiTheme(darkBaseTheme);
		return <div>
           <MuiThemeProvider muiTheme={ muiTheme }>
             <div>
             </div>
           </MuiThemeProvider>
         </div>
	}
}
