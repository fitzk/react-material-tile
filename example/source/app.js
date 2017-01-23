import React, { Component } from "react";
import { AppBar } from "material-ui";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { TileCard } from "./source/tile-card"
import { ThemeProvider } from "styled-components"
import { SDKS } from "./sdks"

export class App extends Component {

	render() {

		const isMobile = /iPhone|iPad|iPod|Android|Mobile/i.test(navigator.userAgent);

		const muiTheme = getMuiTheme(darkBaseTheme);
		return <div>
           <MuiThemeProvider muiTheme={ muiTheme }>
             <ThemeProvider theme={ darkBaseTheme }>
               <div>
                 <AppBar showMenuIconButton={ false }
                         title="FAUX"
                         titleStyle={ { color: "white", fontSize: isMobile ? "8rem" : "auto", marginTop: ".5em" } }
                         style={ { backgroundColor: "black", marginBottom: "8em", height: isMobile ? "10em" : "auto" } } />
                 <SDKS/>
               </div>
             </ThemeProvider>
           </MuiThemeProvider>
         </div>
	}
}
