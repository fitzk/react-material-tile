import React, { Component } from "react";
import { AppBar } from "material-ui";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import "./assets/index.scss"
import { SDKS } from "./sdks"

export class App extends Component {

	render() {
		const muiTheme = getMuiTheme(darkBaseTheme);
		return <div className="container">
           <MuiThemeProvider muiTheme={ muiTheme }>
             <div>
               <AppBar/>
               <SDKS/>
             </div>
           </MuiThemeProvider>
         </div>
	}
}
