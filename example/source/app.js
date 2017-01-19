import React, { Component } from "react";
import { AppBar } from "material-ui";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import "./assets/index.scss"
import { SDKS } from "./sdks"

export class App extends Component {

	render() {

		const isMobile = /iPhone|iPad|iPod|Android|Mobile/i.test(navigator.userAgent);

		const muiTheme = getMuiTheme(darkBaseTheme);
		return <div>
           <MuiThemeProvider muiTheme={ muiTheme }>
             <div>
               <AppBar showMenuIconButton={ false }
                       style={ { backgroundColor: "black", marginBottom: "8em", height: isMobile ? "10em" : "auto" } } />
               <SDKS/>
             </div>
           </MuiThemeProvider>
         </div>
	}
}
