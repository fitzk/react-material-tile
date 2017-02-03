import React, { Component } from "react";
import { AppBar, CardText } from "material-ui";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { ThemeProvider } from "styled-components"
import TileCard, { TileCardGrid } from "react-tilecard"
import logo from "./assets/js-yellow.png"

export class App extends Component {

	render() {

		const isMobile = /iPhone|iPad|iPod|Android|Mobile/i.test(navigator.userAgent);

		const muiTheme = getMuiTheme(darkBaseTheme);
		return <div>
           <MuiThemeProvider muiTheme={ muiTheme }>
             <ThemeProvider theme={ darkBaseTheme }>
               <TileCardGrid>
                 <TileCard tileWidth="150px"
                           tileHeight="150px"
                           title="React Tile"
                           subtitle="this is a subtitle"
                           src={ logo }>
                   <CardText>
                     React Tile!
                   </CardText>
                 </TileCard>
               </TileCardGrid>
             </ThemeProvider>
           </MuiThemeProvider>
         </div>
	}
}
